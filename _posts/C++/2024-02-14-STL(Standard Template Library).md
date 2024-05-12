---
title: "STL(Standard Template Library)"
categories: C++
---
## Define
- 표준으로 인증받은 라이브러리 모음집
- 자료구조, 함수, 알고리즘 등을 사용하기 쉽게 정형화한 라이브러리
- STL 3가지 요소
    - Containers
    - Altorithm: Container에서 실행되는 알고리즘
    - Iterator(반복자): Container와 Algorithm을 연결해 줌

## map



```cpp
#include<map>

int main() {
    vector<int>v1 = {6, 1, 4, 2, 3};
    vector<int>v2 = {1, 5, 6, 7};
    map<int, int>m; // map 선언
    for(int i = 0; i < v1.size(); i++) {
        m[v1[i]] = 1;
    }
    // binary_search와 달리 정렬을 하지 않아도 됨
    
    for(int i = 0; i < v2.size(); i++) {
        if(m[v2[i]]) cout << "Yes" << '\n';
        else cout << "No" << '\n';
    }
}   // Yes No Yes No 출력
```

## unordered_map
- 데이터가 많을 시 map에 비해 좋은 성능을 보임
- Hash Table을 기반으로 키의 해시 값을 사용하여 데이터를 저장하고 검색함
- 시간 복잡도는 O(1)
- key가 유사한 데이터가 많다면 해시 충돌로 성능이 떨어질 수 있음
