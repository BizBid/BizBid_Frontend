# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 명령어

```bash
npm run dev          # 개발 서버 실행 (localhost:3000)
npm run build        # 프로덕션 빌드
npm run lint         # ESLint 실행 (flat config, ESLint 9)
npm run storybook    # 컴포넌트 개발 서버 (localhost:6006)
npx vitest           # 컴포넌트 테스트 실행 (Storybook Vitest + Playwright Chromium)
```

## 프로젝트 개요

**BizBid** — 폐업 소상공인 중고 비품 경매 플랫폼. Next.js App Router + React Server Components 기반.

## 기술 스택

| 역할 | 기술 |
|------|------|
| 프레임워크 | Next.js (App Router) |
| 스타일링 | Tailwind CSS v4 (`@tailwindcss/postcss`, v3 플러그인과 다름) |
| UI 라이브러리 | Shadcn/ui (`base-nova` 스타일) + `@base-ui/react` 프리미티브 |
| 클라이언트 상태 | Zustand 5 |
| 서버 상태 | TanStack Query 5 |
| 폼 | React Hook Form + Zod |
| 테스트 | Storybook 10 + Vitest addon |

## 디렉토리 구조

- `src/app/` — App Router 페이지, `layout.tsx`에서 Geist 폰트 + 글로벌 CSS 설정
- `src/components/common/` — 도메인 컴포넌트. 각 컴포넌트마다 `.stories.tsx` 파일이 짝으로 존재. `index.ts`로 배럴 export
- `src/components/ui/` — Shadcn CLI로 생성된 기본 UI 컴포넌트
- `src/lib/utils.ts` — `cn()` 헬퍼 (clsx + tailwind-merge)

경로 별칭: `@/*` → `src/*`

## 컴포넌트 패턴

**ProductCard는 discriminated union 타입 사용:**
```ts
type ProductCardProps = AuctionProduct | FixedProduct  // type: "auction" | "fixed"
```
새 상품 관련 props 추가 시 이 패턴을 따라야 함.

**`"use client"` 경계:** `CountdownTimer`처럼 타이머·인터랙션이 필요한 컴포넌트만 클라이언트 컴포넌트로 분리. 레이아웃·데이터 페칭은 서버 컴포넌트 유지.

**새 도메인 컴포넌트 추가 시:** `src/components/common/`에 컴포넌트 파일 + `.stories.tsx` 함께 생성 후 `index.ts`에 export 추가.

## 스타일링 규칙

디자인 토큰은 `src/app/globals.css`의 CSS 변수로 관리됨. 컬러 값을 하드코딩하지 말고 `bg-primary`, `text-muted-foreground` 등 토큰을 사용할 것. Tailwind v4는 `tailwind.config.js` 대신 CSS 파일에서 `@theme inline`으로 테마를 정의한다.
