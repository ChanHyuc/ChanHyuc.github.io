---
title: "DataType & Operator"
categories: Swift
---
## Variable(변수)
- **변경할 수 있는** data(자료)를 담을 수 있는 공간
- 식별자(변수의 이름)은 **한 영역**에서 유일한 하나의 이름만 사용해야 함
- Memory에 값(Data)을 저장
- ,(콤마)를 사용해서 변수를 여러개를 한꺼번에 선언할 수 있음

```swift
var color: String = "red"
var apple = color // 새로운 공간을 만들어서 값을 복사(Copy)해서 저장

var banana = "yellow", cherry = "red", durian = "yellow"
// ,를 이용하여 한꺼번에 선언 
```

### Constants(상수)
- **변경할 수 없는** data(자료)를 담을 수 있는 공간

```swift
let apple = "red"
apple = "green" // 에러, 변경 불가능
```

### String Interpolation(문자열 보간법)
- 변수나 상수를 문자열안에 나타낼 때 사용

```swift
let fruit = "apple"
let color = "red"
print("\(fruit) is \(color)")   // apple is red
```

## Data Type
- Data를 메모리 공간에 어떤 크기, 어떤 형태로 저장할 것인지 정함
- Swift는 타입을 한번 정하면 중간에 **변경할 수 없음**
- Type Safety(타입 안정성): Swift는 다른 type끼리 계산할 수 없음

### Basic Type(기본 타입)
- Int(정수)
- Float(실수), Double(실수) // 정밀도 차이
- Character(문자), String(문자열)
- Bool(참, 거짓)

### Collection Type(집합체 타입)
- Array
- Set
- Dictionary

### Custom Type(사용자 정의 타입)
- Enum
- Class
- Struct

## Declaration & Save (선언과 저장)
- 타입 추론을 사용할 경우 예상과 다른 결과가 나올 수 있음

```swift
var num = 10 // Type Inference (타입 추론)
var num: Int = 10 // Type Annotation (타입 명시)
```

### Conversion(타입변환)

```swift
"123" -> Int("123") -> 123 // 타입 변환
"apple" -> Int("apple") -> nil // 변환되지 않음
123.45 -> Int(123.45) -> 123 // 데이터 일부 유실
```

### 나누기 주의점
- 데이터타입을 할당하는것에 따라서 연산결과가 다르게 나올 수 있음

```swift
var a = 4
var b = 5

var result: Double

result = Double(a / b)  // 0
// Int형 a와 b를 나누면 몫이 0이 나온후에 Double형으로 바뀜.
result = Double(a) / Double(b) // 0.8
// Double형 4와 5를 나눴으므로 0.8의 값이 나옴
```

### Type Alias(별칭)
- 시스템적으로 기존에 정해져있는 명령어를 내가 임의로 커스텀 할 수 있음

```swift
// 원래 사용한 코드
func test(value: (Int) -> String){

}
// typealias로 파라미터 타입부분만 별칭으로 생성
typealias funcIS = (Int) -> String

// Type Alias로 단축
func test(value: funcIS){

}
``` 

## Operator(연산자)
- A + B
    - A, B: Operand(피연산자)
    - +: Operator(연산자)

### 연산자 종류
1. Unary Operator(단항 연산자) // +A, !A
2. Binary Operator(이항 연산자) // A + B
3. Ternary Operator(삼항 연산자) // let result = score >= 70? "Pass" : "Fail"
4. Assignment Operator(할당 연산자) // A = B + C
5. Arithmetic Operator(산술 연산자) // + - * / %  **(같은 타입끼리만 산술연산 가능!)**
6. Compound Assignment Operator(복합 할당 연산자) // A = A + 5, A += 5 (A값에 5를 더함)
7. Comparison Operator(비교 연산자) // = > <
8. Logical Operator(논리 연산자) // ! && \|\|

### Explicit Member Expression(명시적 멤버 표현식, 접근 연산자)
- DataType이나 Tuple, 또는 모듈의 멤버에 대한 접근을 함, 자신의 멤버 식별자 사이의 마침표 . 으로 구성됨

```swift
class Fruit {
    var apple = "red";
}
let color = Fruit()
let member =  color.apple    // 멤버 접근
```

## Reference
- [The Basics](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/)
- [Expressions](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/expressions/)
