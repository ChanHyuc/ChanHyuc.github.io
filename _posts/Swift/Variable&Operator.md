# Variable(변수)
- data(자료)를 담을 수 있는 공간
- 식별자(변수의 이름)은 **한 영역**에서 유일한 하나의 이름만 사용해야 한다.
- Memory에 값(Data)을 저장
- 변수 이름은 소문자로시작(대문자로 시작하는 것은 권장하지 않음)
- 변수 이름은 특수문자, 한글 등 사용가능 하지만, 관습적으로 잘 사용하지는 않음
- 변수를 여러개 한꺼번에 선언하는 방법: ,(콤마)로 연결

```swift
var color = "red"
var apple = color // 새로운 공간을 만들어서 값을 복사(Copy)해서 저장

var banana = "yellow", cherry = "red", durian = "yellow"
// ,를 이용하여 한꺼번에 선언 

var 1one = 1 // 숫자를 첫글자로 시작 금지
```

## Constants(상수)
- 변하지 않는 data(자료)를 담을 수 있는 공간

## Data Type
- 데이터를 메모리공간에 어떤 크기, 어떤 형태로 저장할 것인지를 정한다.
- 타입을 한번 정하면 중간에 변경할 수 없다.

### Basic Type (기본 타입)
- Int(정수)
- Float(실수), Double(실수) // 정밀도 차이
- Character(문자), String(문자열)
- Bool(참, 거짓)

### Custom Type (사용자 정의 타입)
- Enum
- Class
- Struct

## Declaration & Save (선언과 저장)
- 변수의 초기화 = 변수를 **선언**한 후 처음으로 어떠한 값을 **저장**하는 것
- 변수를 선언과 동시에 저장(메모리 공간을 생성하는 동시에 데이터를 저장)

```swift
var num = 10 // Type Inference (타입 추론)
var num: Int = 10 // Type Annotation (타입 명시)
```

## Conversion(타입변환)
- "123" -> Int("123") -> 123 // 타입 변환
- "apple" -> Int("apple") -> nil // 변환되지 않음
- 123.45 -> Int(123.45) -> 123 // 데이터 일부 유실

## Type Alias(타입치환)
```swift
typealias Name = target
```
- target이 Name이라는 단어로 치환됨
- 시스템적으로 기존에 정해져있는 명령어를 내가 임의로 커스텀 할 수 있음

## Type Safety(타입 안정성)
- Swift는 다른 type끼리 계산할 수 없다.

## Type Alias(별칭)
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

## 타입 명시
```swift
var number: Int = 5
```

## 타입 추론
```swift
var number = 5
```

### 타입 안정성
- 타입 추론을 사용할 경우 예상과 다른 결과가 나올 수 있음


# Operator(연산자)
A(피연산자) +(연산자) B(피연산자) // A + B

## 종류
1) Unary Operator(단항연산자) // a+ (공백없이 붙여서 사용)
2) Binary Operator(이항연산자) // a + b
3) Ternary Operator(삼항연산자) // a ? b : c (모든 사이에 공백을 한칸씩 추가)
- let result = score >= 70? "Pass" : "Fail"
4) Assignment(할당) // a = b (b라는 값을 a에 할당한다.)
5) Arithmetic(산술) // + - * / %  **(같은 타입끼리만 산술연산 가능!)**
6) Compound Assignment(복합할당) // a += b (a = a + b)
7) Comparison(비교) // = > <
8) Logical(논리) // ! && ||
9) Explicit Member Expression(명시적 멤버 표현식) // num.count

### 나누기 주의점
- 타입을 할당하는것에 따라서 연산결과가 다르게 나올 수 있음
```swift
var a = 4
var b = 5

var result: Double

result = Double(a / b)  // 0
// Int형 a와 b를 나누면 몫이 0이 나온후에 Double형으로 바뀜.
result = Double(a) / Double(b) // 0.8
// Double형 4와 5를 나눴으므로 0.8의 값이 나옴
```
