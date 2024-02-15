---
title: "Algorithm Library"
categories: C++
---
## Define
- 다양한 정렬, 검색, 변형 등의 일반적인 알고리즘 함수들을 포함

## erase
- 시퀀스 컨테이너에서 특정 값을 가진 모든 요소를 제거하는 함수

## unique
- 연속된 중복된 요소를 압축(제거)하는 함수
### unique && set

|unique|set|
|---|---|
|원본의 순서로 반환|정렬된 순서로 반환|
|연속된 중복된 요소만 제거|중복을 허용하지 않음|
|ex) 1, 2, 4, 2, 3, 3, 5 -> 1, 2, 4, 2, 3, 5 |ex) 1, 2, 4, 2, 3, 3, 5 -> 1, 2, 3, 4, 5|

## sort & stable_sort
- 기본값 오름차순

|sort|stable_sort|
|---|---|
|동일한 값의 요소들에서 두 요소가 기존에 가지고 있던 순서를 보장하지 않음|동일한 값의 요소들에서 두 요소가 기존에 가지고 있던 순서를 보장|

## binary_search
- first 부터 last 까지의 범위 안에서 인자로 전달한 value가 있는지 이진 탐색으로 확인
- 원소가 존재 한다면 true를 없다면 false를 return 함
```cpp
int main() {
    vector<int>v = {1, 2, 3, 4, 5};
    if( binary_search(v.begin(), v.end(), 2) ) cout << "Yes";   // Yes 출력
    else cout << "No";
}

// binary_search를 직접 함수로 만들 때 
int binarySearch(vector<int>v, int first, int last, int target) {
    int middle = (first + last) / 2;
    if(target == v[middle]) return 1;
    
    if(target < v[first] || target > v[last]) return 0;
    
    if(target > v[middle]) return binarySearch(v, middle + 1, last, target);
    else return binarySearch(v, first, middle - 1, target);
}
```

