# Invest With Us

현대적인 투자 플랫폼을 위한 Next.js 기반의 웹 애플리케이션입니다.

## 기술 스택

- **Frontend Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: 
  - Radix UI
  - Embla Carousel
  - FontAwesome Icons
- **Development Tools**:
  - ESLint
  - Turbopack
  - PostCSS

## 프로젝트 구조

```
src/
├── app/          # Next.js 페이지 및 라우팅
├── components/   # 재사용 가능한 UI 컴포넌트
├── sections/     # 페이지 섹션 컴포넌트
├── lib/         # 유틸리티 라이브러리
└── utils/       # 헬퍼 함수 및 유틸리티
```

## 시작하기

1. 의존성 설치:
```bash
npm install
# or
yarn install
```

2. 개발 서버 실행:
```bash
npm run dev
# or
yarn dev
```

3. 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속

## 주요 기능

- 모던한 UI/UX
- 반응형 디자인
- 캐러셀 애니메이션
- 최적화된 폰트 로딩
- TypeScript 기반 타입 안정성

## 빌드 및 배포

프로덕션 빌드:
```bash
npm run build
# or
yarn build
```

프로덕션 서버 실행:
```bash
npm run start
# or
yarn start
```

## 배포

이 프로젝트는 [Vercel Platform](https://vercel.com)을 통해 쉽게 배포할 수 있습니다.

자세한 배포 방법은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 참조하세요.
