---
layout: single
title: "Commit Convention"
categories: Git
---

## Commit 구조
```
type: subject

body(생략 가능)

footer(생략 가능)
```

### Type
- Init: 프로젝트 생성
- Feat: 새로운 기능 추가
- Fix: 기능, 버그 수정 (하나의, 또는 적은양의 기능 수정)
- Refactor: 전체적인 구조 변경 (Fix 보다 수정사항이 큰 경우)
- Chore: 그 외에 작업들(패키지 매니저 변경, 빌드 수정 등등)


- Docs: 문서 수정, README 수정
- Design: 기능변경없이 UI / UX 수정
- Rename: 파일 이름 수정하거나 옮기는 경우
- Remove: 파일을 삭제한 경우
- Comment: 주석 추가 및 변경
- Style: 들여쓰기, 동일한 파일에서 코드 위치 옮기기 등 코드변경이 없을경우
- Test: 테스트코드 추가, 기능 테스트

### Subject (제목)
- 제목은 50글자를 넘기지 않도록하고 마침표나 특수기호는 사용 안함
- 영어로 작성할 경우 동사원형(ex. Add, Update, Modify)로 시작한다
- 서술형 문장이 아닌 간결하고 요점적으로 서술

### Body (본문)
- 본문은 한 줄당 72자 내로 작성
- 글자 수 제한없이 최대한 상세히 작성
- 어떻게 변경했는지 보다는 무엇을, 왜 변경했는지 작성

### footer (꼬리말)
- 꼬리말은 필수가 아닌 선택사항. 이슈 트래커 ID를 작성
- `유형: #이슈 번호` 형식으로 사용
- 이슈 유형은 다음 중 하나를 사용
    - Fixes: 이슈 수정 중
    - Resolves: 이슈를 해결 했을 때
    - Ref: 참고할 이슈가 있을 때
    - Related to: 해당 커밋에 관련된 이슈 번호
