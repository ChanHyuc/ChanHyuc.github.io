---
title: "Git Commend"
categories: Git
---

## git
```bash
git
```
- git이 잘 설치되었는지 확인할 수 있음
- git과 관련된 목록을 확인할 수 있음

## init
```bash
git init
```
- git 저장소를 만드는 명령 Local에 깃 저장소를 만들 수 있음

## config
```bash
// 값 설정
git config --global user.name "설정하고 싶은 이름"
git config --global user.email "설정하고 싶은 이메일"

// 값 확인
git config user.name   
git config user.email

// 이름과 이메일 외에 다른 설정값을 보여줌
git config --list
```
- git에 이름과 이메일을 설정하거나 설정된 값을 확인 할 수 있음

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

git log -p      // 해당 커밋으로 어떤 파일이 어떻게 수정됐는지 출력
git log --patch  // 위와 동일

git log --graph  // 각 커밋을 그래프의 형태로 출력
```
- commit 목록을 출력함
- commit hash값, 만든 사람, 만들어진 날짜, 커밋메세지가 출력
- commit 해시에 HEAD -> master는 현재 HEAD가 master 브랜치에 있음을 나타냄

### branches
![]({{site.url}}/images/git_log_branches.png)
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
