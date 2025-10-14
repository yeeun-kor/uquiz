# UQuiz?

<br>

| 🗓️ 프로젝트 기간 | 2025.10.14 ~ 진행 중                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------- |
| ⚙️ 기술 스택     | React, Tailwind CSS, React Router, LocalStorage (점수 & 랭킹 저장용), Vite (개발 환경 설정) |
| ☁️ 배포 환경     | AWS S3, CloudFront, '도메인'                                                                |

<br>

## 🎯 프로젝트 소개

**UQuiz?** 는 사용자의 **닉네임을 입력**받아 퀴즈를 풀이하고,
정답 개수를 **점수화하여 랭킹을 표시**하는 퀴즈 서비스입니다.

✨ 주요 특징

- 닉네임을 기반으로 개인 점수 기록
- 문제 풀이 후 실시간 점수 계산
- 전체 사용자 점수 비교를 위한 **랭킹 보드 제공**

<br>

## 🚀 구현 단계

<details>
<summary>🗺️ 라우팅 설정</summary>
리액트 라우터를 활용해 페이지 간 이동 구조 설계
</details>

<details>
<summary>🙋‍♂️ 닉네임 입력 페이지 구현</summary>
닉네임 입력 및 검증 로직 구현
</details>

<details>
<summary>🧠 퀴즈 풀이 페이지 구현</summary>
문제 출력, 선택지 선택 및 점수 계산 기능 구현
</details>

<details>
<summary>🏁 결과 페이지 구현</summary>
맞춘 문제 수와 점수를 표시하고 랭킹 페이지로 이동
</details>

<details>
<summary>🌐 배포하기</summary>
Vercel 또는 Netlify를 이용한 배포
</details>

<details>
<summary>⚙️ Custom Hooks를 활용한 로직 분리</summary>
상태 관리 및 비즈니스 로직의 재사용성 향상
</details>

<details>
<summary>🚧 404 Not Found 페이지 구현</summary>
잘못된 경로 접근 시 사용자에게 안내 페이지 표시
</details>
