# BizBid Frontend

폐업 소상공인 중고 비품 경매 플랫폼 — BizBid의 프론트엔드 레포지토리입니다.

## 기술 스택

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4
- **UI**: Shadcn/ui (base-nova) + @base-ui/react
- **State**: Zustand 5, TanStack Query 5
- **Form**: React Hook Form + Zod
- **Test**: Vitest + Storybook 10

## 시작하기

```bash
npm install
npm run dev       # 개발 서버 (localhost:3000)
```

## 주요 명령어

```bash
npm run dev            # 개발 서버
npm run build          # 프로덕션 빌드
npm run lint           # ESLint
npm run storybook      # Storybook 컴포넌트 개발 서버 (localhost:6006)
npx vitest             # 컴포넌트 테스트
```

## 프로젝트 구조

```
src/
├── app/                # Next.js App Router 페이지
├── components/
│   ├── common/         # 도메인 컴포넌트 (각 컴포넌트마다 .stories.tsx 포함)
│   └── ui/             # Shadcn 기본 UI 컴포넌트
└── lib/
    └── utils.ts        # cn() 유틸리티
```
