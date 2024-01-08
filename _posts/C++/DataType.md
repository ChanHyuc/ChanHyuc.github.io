---
title: "Data Type"
categories: C++
---
## Boolean
### Bool 데이터를 toggle 하는 경우
```cpp
bool toggle;        // default 값 0 (false)
toggle = !toggle;   // NOT 연산을 통해 바꾸기
toggle == false ? toggle = true : toggle = false;   // 삼항연산자를 통해 바꾸기
toggle = 1 - toggle;// 숫자 연산을 통해 바꾸기
toggle ^= 1;        // XOR 연산을 사용해서 바꾸기
```

### Reference
- [Youtube: CS50](https://www.youtube.com/@cs50)
