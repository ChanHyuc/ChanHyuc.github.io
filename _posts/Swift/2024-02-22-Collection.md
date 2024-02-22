---
title: "Collection"
categories: Swift
---
## Collection(컬렉션)
- 다수의 데이터를 효율적으로 관리하기 위한 자료형

## Array
- 순서대로 저장, 순서가 있기 때문에 값은 중복가능
- 일반적으로 배열 하나에 **동일한 타입**의 데이터만 담을 수 있음
    - Any 타입을 사용하면 여러 데이터 타입을 담을 수 있음

```swift
let fruit: Array<String> = []   // 정식 문법
let fruit: [String] = []        // 단축 문법
let fruit = Array<String>()      // ()은 생성자를 의미!
let fruit = [String]()
```

### 메서드 & 요소
```swift
var fruit = ["apple","banana","cherry","durian"]

fruit.count         // 4, 배열의 요소 수 확인
fruit.isEmpty       // false, 배열이 비었는지 확인
fruit.contains("blueberry") // false, 배열에 특정 요소가 있는지 확인
fruit.randomElement()       // 랜덤으로 하나 추출
fruit[1]            // banana, 인덱스 접근
fruit.first     // apple, 옵셔널로 반환되기 때문에 사용하려면 옵셔널 바인딩을 통해서 사용해야 함
fruit.last      // durian, 옵셔널로 반환되기 때문에 사용하려면 옵셔널 바인딩을 통해서 사용해야 함
```

### insert(삽입)
```swift
var fruit = ["apple","banana","cherry","durian"]
fruit.insert("blueberry", at: 1)    // ["apple", "blueberry", "banana", "cherry", "durian"]
```

### replace(교체)
```swift
var fruit = ["apple","banana","cherry","durian"]

fruit.replaceSubrange(1...1, with: ["blueberry"])  // ["apple", "blueberry", "cherry", "durian"]
fruit[1] = "blueberry"      // 요소 교체
```

### append(추가)
```swift
var fruit = ["apple","banana","cherry","durian"]

fruit += ["eggfruit"]       // 요소 추가
fruit.append("eggfruit")    // 배열 마지막에 추가
fruit.append(contentsOf: ["eggfruit","fig"]) // 배열 마지막에 추가
```

### remove(삭제)
```swift
var fruit = ["apple","banana","cherry","durian"]

fruit.remove(at: 1) // apple 삭제, 1번째 요소 삭제
fruit.removeAll()   // [], 전체 요소 삭제
```

## Dictionary(딕셔너리)
- 데이터를 Key(키)와 Value(값)으로 하나의 쌍으로 만들어 순서가 없는 저장
- key 값은 유일해야함(중복 불가능), value는 중복 가능
- 동일한 타입쌍으로 데이터만 담을 수 있음 
    - ex) [Int: String]으로 생성했다면 키는 Int, 값은 String 타입으로만 담아야 함 
- **딕셔너리의 key값은 Hashable 해야함.**
- 서버에서 데이터를 받아올때 Dictionary로 받아오고 Array 형태로 바꿔서 사용

- 값만 따로 검색하는 방법은 제공하지 않음
- Dictionary의 값에 또 다른 딕셔너리 또는 배열을 사용해서 중첩적으로 사용 가능
- 원하는 value를 찾을 때 Array는 길면 앞에서부터 하나하나 값을 찾아야 하지만
- 딕셔너리의 각 value마다 Hashable로 key의 고유한 값을 설정하면 찾기 빠르다.

```swift
var fruit: [String: String] = [:]   // 단축문법
var fruit: Dictionary<String, String> // 정식문법
```

### 메서드 & 검색
```swift
var fruit = ["a": "apple","b":"banana","c":"cherry"]

fruit.count     // 3
fruit.isEmpty   // false
fruit.randomElement()   // Tuple 형태로 옵셔널로 리턴

// 검색
fruit["a"]  // Optional("apple"), String?으로 반환
fruit["g"]  // nil, 옵셔널 타입이기 때문에 값이 없으면 nil 값 반환
fruit["g", default:"grape]  // 키 g가 값이 있다면 값을 반환하고, 값이 없다면 기본값 grape 반환
fruit.keys    // ["a","b","c"], key값 탐색
fruit.values    // ["apple","banana","cherry"], value 탐색

```

### Update, replace, append(삽입, 교체, 추가)
```swift
fruit["b"] = "blueberry"
fruit.updateValue("durian", forKey: "d") // 키값이 없으면 만들어지고 기존에 있었다면 덮어써짐
```

### remove(삭제)
```swift
fruit["a"] = nil
fruit.removeValue(forKey: "a")  // 삭제후 값 리턴
```

### Hash, Hashable, HashValue
- 어떤 타입이 Hashable 하다는건 해시 함수의 input으로 들어갔을 때 항상 동일한 결과가 나오는 것.
- 값의 유일성을 보장하고 검색 속도가 상대적으로 빠름
- Swift의 기본 타입은(Int, String, Double) 모두 Hashable

## Set(집합)
- 집합과 같은 연산을 제공하는 순서가 없는 저장
- Hashing 알고리즘을 사용하므로 정렬순서보다 검색속도가 중요한 경우에 사용

```swift
var set: Set<Int> = [1, 1, 2, 2, 3, 3, 3]   // Array와 구분이 안되기 때문에 생성시 타입 선언을 꼭 해야함
print(set)  // [2,1,3] 요소를 중복으로 넣어도 중복저장이 되지 않음, 출력할때 마다 순서가 바뀜
```

### 메서드
```swift
var set: Set<Int> = [1, 1, 2, 2, 3, 3, 3]

set.count   // 3
set.isEmpty // false
set.contains(5) // false
set.randomElement // 랜덤하게 값 추출
```

### update, remove
```swift
set.update(with: 4)
set.remove(4)
set.removeAll()
```

### 집합
```swift
// 부분집합 여부 확인
set.isSubset(of: subSet)

// 상위집합 여부
set.isSuperset(of: subSet)

// 서로소 여부
set.isDisjoint(with: subSet)

// 합집합
set.union(subSet)
set.formUnion(subSet)   // 원본 변경

// 교집합
set.intersection(subSet)
set.formIntersection(subSet)    // 원본 변경

// 차집합
set.subtraction(subSet)
set.subtract(subSet)    // 원본 변경

// 대칭차집합
set.symmetricDifference(subSet)
set.formSymmetricDifference(subSet) // 원본 변경
```

### Naming
- 컬렉션을 직접적으로 변경할때는 동사원형으로 사용 (Mutating)
- 원본은 변경하지 않고, 리턴형으로 다른 컬렉션을 반환할때는 분사형태로 사용(-ing/-ted)

```swift
    // 원본 변경
fruit.sort()
fruit.reverse()
fruit.shuffle()     // 임의로 뒤섞는다

// 원본은 보존하고 다른 컬렉션으로 반환
fruit.sorted() 
fruit.reversed()
fruit.shuffled()
```
