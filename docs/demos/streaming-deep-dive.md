# 심층 분석: 스트리밍(Streaming)과 서스펜스(Suspense)

사용자님께서 발견하신 두 가지 현상은 Next.js와 React의 **스트리밍(Streaming)** 기술의 핵심입니다.
1.  `page.tsx`에 로딩 로직이 없는데도 `loading.tsx`가 나타나는 현상
2.  네트워크 탭에서 데이터가 "숨겨진(hidden)" HTML 형태로 들어오는 현상

이 문서에서는 이 마법 같은 동작이 내부적으로 어떻게 구현되는지 자세히 설명합니다.

## 1. `loading.tsx`는 약속된 이름인가요?

네, 맞습니다! **Next.js App Router는 파일 시스템 기반의 규칙(Convention)**을 따릅니다.

-   **규칙**: 폴더 안에 `loading.tsx`라는 파일이 있으면, Next.js는 자동으로 같은 폴더의 `page.tsx`를 **React Suspense**로 감싸줍니다.
-   **변환 과정**:
    개발자가 작성한 코드가:
    ```tsx
    // page.tsx
    export default async function Page() { ... }
    ```
    
    빌드 시 내부적으로 이렇게 변환됩니다:
    ```tsx
    <Suspense fallback={<Loading />}>
      <Page />
    </Suspense>
    ```

    ```

    **중요한 점**: `await`가 있든 없든, `loading.tsx` 파일이 존재하면 **무조건** `Suspense`로 감싸집니다.
    -   **Async Page (`await` 있음)**: 데이터가 올 때까지 `Loading`을 보여줍니다.
    -   **Sync Page (`await` 없음)**: `Loading`이 아주 잠깐 스쳐 지나가거나, 즉시 `Page`가 보입니다.


## 2. 스트리밍(Streaming)의 구현 원리

Next.js는 **HTTP Chunked Transfer Encoding**이라는 표준 기술을 사용하여 HTML을 조각조각 나누어 보냅니다.

### 시간대별 전송 과정

#### 1단계: 초기 껍데기 전송 (0ms)
브라우저가 페이지를 요청하자마자, 서버는 즉시 응답을 시작합니다. 하지만 연결을 끊지 않고 열어둡니다.
이때 보내는 HTML에는 다음이 포함됩니다:
-   `<head>` 태그 (메타데이터, 스타일)
-   레이아웃 (`layout.tsx`)
-   **로딩 스켈레톤** (`loading.tsx`의 내용)

사용자는 빈 화면 대신 즉시 로딩 화면을 보게 됩니다.

#### 2단계: 데이터 대기 (0ms ~ 2000ms)
서버에서는 `page.tsx`의 `await fetch(...)`가 실행 중입니다. 데이터가 올 때까지 기다립니다.
이 동안 브라우저는 로딩 화면을 보여주고 있고, 서버와의 연결은 계속 유지(Pending)됩니다.

#### 3단계: 데이터 도착 및 추가 전송 (2000ms)
데이터 패칭이 완료되면, 서버는 나머지 HTML(실제 리스트 내용)을 생성합니다.
그리고 이 HTML 조각(Chunk)을 열려있는 연결을 통해 브라우저로 **밀어 보냅니다(Push)**.

이때 전송되는 데이터는 대략 이런 형태입니다 (단순화함):
```html
<!-- 숨겨진 상태로 데이터 전송 -->
<div hidden id="S:0">
  <ul>
    <li>User 1...</li>
    <li>User 2...</li>
  </ul>
</div>

<!-- 스크립트 주입 -->
<script>
  // "로딩 화면(스켈레톤)을 찾아서, 방금 도착한 저 숨겨진 div 내용으로 바꿔치기해라!"
  $RC = function(b, c, e) { ... }
  $RC("S:0", "loading-placeholder-id")
</script>
```

### 핵심 요약
1.  **HTTP 연결 유지**: 응답을 한 번에 다 보내고 끝내는 게 아니라, 빨대 꽂듯이 연결을 유지합니다.
2.  **조각 전송**: 준비된 부분(`loading.tsx`)부터 먼저 보내고, 늦게 준비된 부분(`page.tsx`)은 나중에 보냅니다.
3.  **스크립트 치환**: 나중에 도착한 HTML 조각에는 "나를 어디에 끼워 넣어라"라는 아주 작은 자바스크립트 명령어가 같이 들어있습니다. 브라우저는 이 명령을 실행하여 로딩 화면을 실제 콘텐츠로 교체합니다.

이 모든 과정이 **React Server Components**와 **Next.js**에 의해 자동으로 처리되므로, 개발자는 단순히 `async/await`만 쓰면 됩니다.
