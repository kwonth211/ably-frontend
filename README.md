# 에이블리 프론트엔드 엔지니어 채용 과제

## 개발 환경 설정 안내

### 1. [Node.js](https://nodejs.org/en/download/package-manager) 설치 (18 버전 이상)

```bash
# installs nvm (Node Version Manager)
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# download and install Node.js
$ nvm install 18
# verifies the right Node.js version is in the environment
$ node -v # should print `v18.20.3`
# verifies the right NPM version is in the environment
$ npm -v # should print `10.7.0`
```

### 2. [Yarn](https://yarnpkg.com/) 패키지 매니저 및 프로젝트 의존 패키지 설치

```bash
# Yarn이 설치되어 있지 않은 경우 설치해 주세요.
$ npm install --global yarn

# 프로젝트 의존 패키지를 설치합니다.
$ yarn install
```

### 3. [Git](https://git-scm.com/) 설정

```bash
# git을 초기화 합니다.
$ git init
```

### 4. 로컬 서버 실행

```bash
$ yarn dev
```

- http://localhost:3000

## 과제 구현 추가 설명

💄 [UI: 공통 부분 Props 추상화](https://github.com/kwonth211/ably-frontend/commit/0e5f6a09b67db11594c35e2cd7a102f34318acce)

GoodsCard 컴포넌트 내부에 좋아요 버튼과 체크박스를 넣어 응집도를 높이려고 했습니다.  
ID만 Props로 전달해 코드의 결합도를 낮추고 상태를 내부(GoodsCard)에서 관리하려고 했지만, 공통 컴포넌트의 규모가 커지고 복잡도가 높아지는 문제가 있었습니다.  
이를 해결하기 위해 `floatingButton`과 같은 Props를 사용해 한 단계 추상화하고, 필요한 부분을 주입할 수 있도록 수정했습니다.

🎯 [SWR & Hooks를 사용한 비즈니스 로직 분리](https://github.com/kwonth211/ably-frontend/commit/e4485fbf6a94f17ca2e498d30882b35af8d3fdf8)

API 요청은 SWR 커스텀 훅을 만들어 관심사를 분리했습니다.  
남은 시간을 계산하는 로직도 커스텀 훅을 사용해 관련 관심사를 효과적으로 분리했습니다.

🔧 [에러 및 로딩 상태 관리](https://github.com/kwonth211/ably-frontend/commit/0caeeaa942bdd14f9f0dc0601f85f6c46f6f12aa)

API 요청과 에러 핸들링은 각 도메인에 맞게 처리했습니다.  
핫딜 콘텐츠 부분은 `Suspense`와 `ErrorBoundary`를 통해 선언적으로 관리했습니다.

❤️ [좋아요 상태 관리: 클라이언트 상태와 영구 저장](https://github.com/kwonth211/ably-frontend/commit/84155dbcbaab9eb7451533f994b291f5ed442876)

좋아요 상태를 클라이언트 상태로 관리하기 위해 `zustand`와 `localStorage`를 사용했습니다.  
`zustand`를 통해 인터페이스를 제공하고, 내부적으로는 `localStorage`에 저장되도록 설계해 상태를 영구적으로 유지할 수 있도록 했습니다.

