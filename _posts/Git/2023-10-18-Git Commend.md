---
title: "Git Commend"
categories: Git
---

## git
```bash
git
```
- git이 잘 설치되었는지 확인할 수 있음
- git과 관련된 commend을 확인할 수 있음

## init
```bash
git init
Initialized empty Git repository in Desktop/test/.git/
```
- git 저장소를 만드는 명령 Local에 깃 저장소를 만들 수 있음
- Initialized empty Git repository in <경로> 메세지가 나올 경우 성공한것
- 해당 경로에 .git 폴더가 만들어짐

## config
```bash
// 값 설정 (전역)
git config --global user.name "설정하고 싶은 이름"
git config --global user.email "설정하고 싶은 이메일"

// 값 설정 (지역)
git config --local user.name "설정하고 싶은 이름"
git config --local user.email "설정하고 싶은 이메일"

// 값 확인
git config user.name   
git config user.email

// 이름과 이메일 외에 다른 설정값을 보여줌
git config --list
```
- git의 사용자이름과 사용자메일을 설정하거나 설정된 값을 확인 할 수 있음

## status
```bash
git status
```
- 작업 디렉터리의 상태 확인을 함

## add
```bash
git add 스테이지에 추가할 대상
git add .   // 현재 디렉터리에 있는 모든 변경 사항을 스테이지에 추가
```
- 스테이지에 올리기

## git rm
- Local에서 폴더나 파일을 삭제를 하면 push를 할 시 GitHub는 그대로 유지됨 
- Local에서 삭제 한다고 remote에서 삭제가 이루어지지 않는다.
- 즉 제거했다는 내역 자체를 커밋해야함

```bash
git rm <fileName> // 원격 저장소와 로컬 저장소에 있는 파일 삭제
git rm —cached <fileName> // 원격저장소에 있는 파일만 삭제
git rm <file> // 하나씩 제거
git add -u // 전부제거
// 그 다음 commit과 push를 하면 된다.
```
- cached 옵션은 작업시에만 쓰는 파일이나 로그는 작업할 때 필요하지만 저장소에는 올리지 않아될 때 주로 사용한다.

## commit
```bash
git commit  // 커밋 메세지를 입력할 수 있는 Vim 창이 출력
git commit -m "커밋 메세지 내용"   // 생략해서 사용(주로 사용)
git commit --message "커밋 메세지 내용" // 위와 동일

git commit -am "커밋 메세지 내용"  // 스테이지 추가(add)와 커밋(commit)을 동시에 할 수 있음
git commit --all --message "커밋 메세지" // 위와 동일
```
- 스테이지에 올린 파일을 커밋함
- git commit -am은 git이 변경 사항을 추적하는(tracked) **파일에만 사용 가능함**
- git commit -am은 한 번이라도 커밋한적이 없는 **파일은(untracked) 파일은 사용할 수 없음**

## log
```bash
git log

git log --oneline   // 커밋 목록을 짧은 커밋해시, 커밋 메세지 제목만을 출력

git log -- branches // 브랜치 목록을 출력

git log -p      // 해당 커밋으로 어떤 파일이 어떻게 수정됐는지 출력
git log --patch  // 위와 동일

git log --graph  // 각 커밋을 그래프의 형태로 출력

git log -- oneline -- branches -- graph // 여러개의 옵션을 합쳐서 사용 가능
```
- commit 목록을 출력함
- commit hash값, 만든 사람, 만들어진 날짜, 커밋메세지가 출력
- commit 해시에 HEAD -> master는 현재 HEAD가 master 브랜치에 있음을 나타냄

### branches
![]({{site.url}}/images/Git/git_log_branches.png)
- master 브랜치의 Third Commit에서 git log를 했을 시 master 브랜치에 속해 있는 First, Second, Third 커밋 목록만 조회함
- serve 브랜치의 Fifth Commit에서 git log를 했을 시 master 브랜치와 serve 브랜치에 있는 모든 커밋 목록을 조회함
- 즉 git log 명령은 현재 브랜치를 기준으로 커밋 목록을 조회하기 때문에 git log 만으로는 자신의 브랜치에 속하지 않는 커밋은 볼 수 없음 

```bash
git log -- branches
```
- 모든 브랜치의 커밋 목록을 조회
- branches를 사용하면 모든 브랜치의 커밋 목록을 출력하기 때문에 어떤 브랜치에서 조회하든 동일한 결과를 출력

## tag
```bash
git tag 태그이름    // 최근 커밋에 태그를 붙음

git tag 태그이름 특정커밋의 해쉬값  // 특정 커밋에 태그를 붙임

git tag         // 태그 조회
git tag -l      // 태그 조회
git tag --list  // 위와 동일

git tag -d 태그이름         // 특정 태그삭제
git tag --delete 태그이름   // 위와 동일
```
- HEAD(현재 브랜치)의 최근 커밋에 태그를 붙임
- git log를 통해서 (HEAD -> master, tag: 태그 이름)으로 태그를 확인할 수 있음

## diff
```bash
git diff

git diff --cached
git diff --staged   // 스테이지에 추가된 항목과 최근 커밋의 차이가 출력

git diff <커밋> <커밋>    // 커밋끼리 비교함, 짧은 해쉬값을 입력해도 무방
git diff <이 커밋을 기준으로> <이 커밋이 달라진 점>
git diff <기준이 되는 브랜치> <기준과 비교할 브랜치>
```
- 최근 커밋과 현재 작업 디렉터리의 차이를 출력함
- HEAD는 현재 브랜치의 최신 커밋을 가리키고 HEAD^는 최신 커밋에서 1번 이전 커밋을 가리킴
- 커밋해쉬값 대신 HEAD^(HEAD~1), HEAD^^^(HEAD~3)을 사용해도 됨

## revert
```bash
git revert <취소할 커밋>
// revert 과정에서 오류가 발생 시 직접 conflict를 수정해야함
git revert —continue    // 계속 진행
git rever — abort    // 취소
```
![revert]({{site.url}}/images/Git/revert.png)
- 커밋한 내용을 되돌리되 되돌아간 상태에 대한 새로운 버전(커밋)을 만드는 방법
- revert를 사용하면 git commit를 사용 한것처럼 Vim 창이 나타남
- revert는 기존의 커밋을 취소하고 새로운 커밋을 만드는 명령이기 때문에 커밋 메세지를 작성해야 함
- **기존 버전은 삭제되지 않음** 흔적이 남게되서 협업할 때 사용

## reset
```bash
git reset --옵션 <되돌아갈 커밋해쉬값>
```
![reset]({{site.url}}/images/Git/reset.png)
- 커밋한 내용을 되돌리되 되돌아간 시점으로 완전하게 되돌아가는 방법(즉 되돌아갈 버전 이후의 버전은 삭제되는 방식)

### reset 옵션
![reset]({{site.url}}/images/Git/reset_option.png)

|옵션|내용|
|---|---|
|soft|**작업 디렉터리** 변경사항과 stage에 추가된 변경 사항은 유지하되 **커밋한것만(git commit)** 되돌리는 reset|
|mixed(default)|**작업 디렉터리 변경사항만** 유지하고 **stage(git add)**와 **커밋(git commit)**을 되돌리는 reset|
|hard|**작업 디렉터리**까지 전부 최근 커밋했던 기준으로 되돌리는 reset|

## stash
```bash
git stash
git stash -m "메시지 내용"

git stash list  // 임시 저장된 작업 내역 조회, 최근에 저장된 작업일 수록 숫자가 작음

git stash apply <stash@{번호}>

git stash drop <stash@{번호}>
```

![stash]({{site.url}}/images/Git/stash_before.png)
![stash]({{site.url}}/images/Git/stash_after.png)
- 임시 저장 기능 (여러 개를 임시 저장할 수 있음)
- 사용하게 될 경우 **작업 디렉터리**에서 모든 변경 사항은 임시 저장되고 **작업 디렉터리**는 최근 커밋했던 기준으로 깨끗한 상태로 돌아감
- stash는 **stage**에 이미 올라와 있거나 한번이라도 **커밋**한적이 있는 파일에만 사용할 수 있음(**tracked**)
- 즉 방금 막 생성한 파일처럼 추적하지 않는 파일(**untracked**)은 사용할 수 없음

## branch
```bash
git branch  // 현재 브랜치의 목록과 작업 중인 브랜치가 *로 표시

git branch <생성할 브랜치> // 브랜치 생성
git branch -b <생성할 브랜치>  // 브랜치를 생성하고 생성한 브랜치로 이동

git checkout <이동할 브랜치>   // 브랜치 이동

git branch -d <삭제할 브랜치>  // 브랜치 삭제, 삭제할 브랜치에서 사용할 수 없음, 다른 브랜치로 이동해서 삭제해야함
git branch --delete <삭제할 브랜치>  // 위와 동일

git merge <병합할 브랜치>  // 브랜치 병합하기, 병합할 브랜치로 이동 후에 사용할 것
```
- 버전을 여러 흐름으로 나누어 관리함
    - 브랜치를 나눔
    - 각각의 브랜치에서 작업함
    - 필요한 경우 나눈 브랜치를 합침
- Git은 최초의 브랜치 master를 default로 사용, GitHub는 main을 default로 사용
- HEAD는 현재 작업 중인 브랜치의 **최신 커밋**을 가리킴
- 브랜치를 나누고 합치는 과정에서 HEAD의 위치를 자유롭게 바꿀 수 있음
- checkout하게 되면 HEAD의 위치가 해당 브랜치의 최신 커밋을 가리키고 **작업 디렉터리**는 체크아웃한 브랜치의 환경으로 바뀌게 됨
- 브랜치를 하나로 병합하는 것을 merge
- 빨리 감기 병합(fast-forward merge)
- 충돌: 병합하려는 두 브랜치가 **서로 같은 내용을 다르게 수정한 상황**
- 충돌은 여러명이 협업할 경우 빈번하게 발생하고 발생하면 브랜치가 병합되지 못함
- 그래서 왜 발생하고 어떻게 해결할 수 있는지 알아야 함
- 충돌이 발생한 파일들은 충돌을 해결한 뒤 다시 커밋해야 브랜치가 병합됨
- 충돌을 해결한다: 같은 내용을 다르게 수정한 브랜치 중 어떤 브랜치를 반영할 것인지 선택함
- 충돌이 발생한 파일에는 <<<<<, >>>>>, ===== 기호가 표기 됨
- <<<<<와 ===== 기호 사이의 내용을 선택할지 =====와 >>>>> 기호 사이의 내용을 선택할지 골라야 함

## rebase
```bash
git rebase <옮길 브랜치 이름>
```
- 브랜치를 재배치함, 브랜치가 뻗어나온 기준점을 옮김
- 옮기기전의 브랜치로 checkout으로 이동하고 나서 사용해야 함

![rebase]({{site.url}}/images/Git/rebase_before.png)
![rebase]({{site.url}}/images/Git/rebase_after.png)

## clone
```bash
git clone <원격 저장소 경로>  // 현재 경로(local)에 클론
git clone <원격 저장소 경로> <클론받을 경로>    // 특정 경로에 클론
```
- 원격 저장소를 현재 작업하는 컴퓨터로(local) 복사함

## remote
```bash
git remote  // 원격 저장소 목록을 출력
git remote -v   // 원격 저장소의 이름과 경로를 출력
git remote --verbose    // 위와동일

git remote add <원격 저장소 경로> <원격 저장소 이름> // 로컬 저장소에 원격 저장소를 추가함

git remote rename <기존 원격 저장소 이름> <변경할 원격 저장소 이름>    // 로컬 저장소 이름 변경

git remote remove <삭제할 원격 저장소 이름>   // 로컬 저장소 삭제
```
- 원격 저장소를 추가, 변경, 조회, 삭제를 할 수 있음

## push
```bash
git push
```
- 로컬 저장소의 변경 사항을 원격 저장소에 업데이트 함

```bash
git push -u origin main
git push <원격 저장소 이름> <브랜치 이름>
```
- 원격저장소 origin으로 로컬 저장소 main 브랜치의 변경 사항을 푸쉬함
- -u 옵션은 처음 푸쉬할 때 한 번만 사용 추후 간단히 git push, git pull 명령만으로 origin의 main 브랜치로 푸시 풀 할 수 있음

## fetch
- 원격 저장소의 변경 사항을 로컬 저장소에 병합하지 않고 **일단 가져만 오는 방법**
- fetch는 원격 저장소의 변경 사항을 origin/main 브랜치로 가져올 뿐 main 브랜치는 변함이 없기 때문 즉 로컬 저장소의 브랜치로 병합하지 않음

```bash
    //순서
git checkout origin main
git checkout FETCH_HEAD   // 위와 동일
git checkout main
git merge origin/main
```

![fetch]({{site.url}}/images/Git/fetch_before.png)
![fetch]({{site.url}}/images/Git/fetch_after.png)
![fetch]({{site.url}}/images/Git/merge_after.png)


## pull
- 원격 저장소를 가져와서 합침
- fetch와 merge를 동시에 하는 방식

## pull request
- pull request를 통해 협업하는 과정
1. 기여하려는 저장소를 본인 계정으로 포크하기
2. 포크한 저장소를 클론하기
3. 브랜치 생성 후 생성한 브랜치에서 작업하기
4. 작업한 브랜치 푸시하기
5. pull request 보내기

- 원격저장소의 주인이 Collaborator로 추가한 경우 저장소의 주인이 아니여도 push할 권한이 생김
- 하지만 대부분 직접 푸쉬할 권한이 없는 상태에서 pull request로 협업함
- pull request는 말 그대로 원격저장소가 내가 변경한 사항을 pull 하도록 요청(request) 하는 것

## quotepath
```bash
git config core.quotepath false // 한글 파일명이 깨져서 보일 때
```
[core.quotepath](https://git-scm.com/docs/git-config#Documentation/git-config.txt-corequotePath)

## Reference
[모두의 깃&깃허브]()
