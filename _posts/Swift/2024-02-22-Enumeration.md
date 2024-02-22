---
title: "Enumeration"
categories: Swift
---
## Enumeration(열거형)
- 한정된 사례(case)로 만든 타입
- 열거형을 만든 뒤 타입의 케이스에서 벗어날 수 없으므로 코드의 가독성과 안정성이 높아짐 

```swift
enum Rainbow: String {  // 대문자로 시작
    case red            // case는 소문자
    case orange
    case yellow
    case green
    case blue
    case indigo
    case purple
}

enum Rainbow {  // ,로 한꺼번에 정의 가능
    case red,orange,yellow,green,blue,indigo,purple
}

var color: Rainbow = Rainbow.red    // 변수에 넣어 사용할 때
var color = Rainbow.red             // 타입 생략해서 변수에 선언할 떄

color       // red, Rainbow 열거형으로 변수 color를 선언하고 초기값을 .red로 할당합니다.
color = .orange     // 이후에는 Rainbow를 생략하여 사용할 수 있음
color       // orange
type(of: color)     // Rainbow
```

### Raw Value(원시값)
- case 마다 정수, 문자열을 매칭시켜서 편하게 사용할 수 있음
- 주로 String, Int를 사용하지만 **Hashable 프로토콜을 지키는 타입 모두 가능**
- 열거형을 선언하는 시점에 값이 저장 됨, 때문에 case(값) 변경은 불가능

```swift
enum Rainbow: String {  // String 저장 시
    case red = "red"
    case orange = "orange"
    case yellow = "yellow"
    case green = "green"
    case blue = "blue"
    case indigo = "indigo"
    case purple = "purple"
}

enum Rainbow: Int {  // Int 저장 시
    case red = 0
    case orange = 1
    case yellow = 2
    case green = 3
    case blue = 4
    case indigo = 5
    case purple = 6
}
```

### Associate Value(연관값)
- Raw Value(원시값)보다 구체적으로 사용할 수 있음
- 열거형을 생성하고 인스턴스 생성시 값이 저장됨
- **하나의 열거형의 Raw Value(원시값), Associate Value(연관값) 둘 다 사용하는건 불가능**

```swift
enum Fruit {
    case apple(color: String, price: Int)   // named tuple
    case banana(color: String, price: Int, region: String)
    case cherry(String, Int, String)        // unnamed tuple
}

let fruit = Fruit.apple(color: "red", price: 1000)

switch fruit {
case .apple(let color, let price):
    print("Apple - Color: \(color), Price: \(price)")
case .banana(let color, let price, let region):
    print("Banana - Color: \(color), Price: \(price), Region: \(region)")
case .cherry(let name, let price, let description):
    print("Cherry - Name: \(name), Price: \(price), Region: \(region)")
}
```

### Enum과 Switch문
- switch문은 분기처리에 최적화 되어 있어서 Enum과 같이 사용하기에 적합
- **즉 열거형은 항상 switch문으로 분기처리 가능**

```swift
switch color {          // color에 Rainbow라는 열거형 타입이 선언이 되었어야 함
case Rainbow.red:       // fullName으로 사용 가능
    print("빨간색 입니다.")
case .orange:
    print("주황색 입니다.")
case .yellow:
    print("노란색 입니다.")
case .green:
    print("초록색 입니다.")
case .blue:
    print("파란색 입니다.")
case .indigo:
    print("남색 입니다.")
case .purple:
    print("보라색 입니다.")
}
```
