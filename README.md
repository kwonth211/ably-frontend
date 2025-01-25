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

과제 구현 후 아래 내용을 간결하게 채워서 커밋해 주세요.

- 특별히 신경써서 강조하고 싶은 부분
- 시간이 더 주어졌다면 보완할만한 부분

- 💄 ui: 공통 부분 props 추상화 [https://github.com/kwonth211/ably-frontend/commit/0e5f6a09b67db11594c35e2cd7a102f34318acce]

  - GoodCard 컴포넌트 내부에 좋아요 버튼과 체크박스를 넣어 응집도를 높이려고 했습니다.
    - id만 props로 전달해 코드의 결합도를 낮추고, 상태를 내부(GoodCard)에서 관리하려고 했지만
  - 공통 컴포넌트의 규모가 커지고 복잡도가 낮추는 것을 해결하기 위해 floatingButton 과 같은 props로 한단계 추상화해서 필요한 부분을 주입할 수 있도록 했습니다.

- swr & hooks 을 사용하여 비지니스 로직 분리 [https://github.com/kwonth211/ably-frontend/commit/e4485fbf6a94f17ca2e498d30882b35af8d3fdf8]

  - API 요청은 swr custom hook을 만들어 관심사를 분리 했습니다.
  - 남은 시간 계산하는 로직은 custom hook을 통해 관심사를 분리 했습니다.

- 에러 및 로딩 상태 관리 [https://github.com/kwonth211/ably-frontend/commit/0caeeaa942bdd14f9f0dc0601f85f6c46f6f12aa]

  - API 요청 과 에러에 대한 핸들링을 각 도메인에 맡게 처리 했습니다.
  - 핫딜 컨텐츠 부분은 Suspense 와 ErrorBoundary를 통해 선언적으로 관리 했습니다.

- 좋아요를 클라이언트 상태로 관리 하기 위해 zustand + localStorage를 이용했습니다.[https://github.com/kwonth211/ably-frontend/commit/84155dbcbaab9eb7451533f994b291f5ed442876]
  - 인터페이스는 zustand를 사용하고, 내부적으로 localStorage에 저장되도록 하여 영구히 저장되도록 했습니다.
