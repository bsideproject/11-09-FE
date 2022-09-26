# Time Letter FE (11기 편지쓰자9팀)1

Time letter(이하 TL)는 느린 우체통을 모티브로 한 서비스입니다.

[Getting started](#getting-started)

<hr/>

## Getting Started

1. Set to proper node version:
```
nvm use
```

2. Install dependencies:
```
yarn
```

3. Workspaces usage:
특정 `workspace` 에 정의된 명령어 실행: `yarn <workspace-name> <command-name>`

Run Workspaces in development mode:
- app: 타임레터 앱 workspace
```
yarn app start
```
- components: 타임레터 공통 컴포넌트 workspace
```
yarn app components
```

4. Run app and components:
```
yarn start:all
```
