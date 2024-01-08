var store = [{
        "title": "Iostream Libaray",
        "excerpt":"C++에서 입출력을 위한 헤더 파일 (표준 라이브러리) namespace #include &lt;iostream&gt; using namespace std int main() { int inputNumber; cin &gt;&gt; inputNumber; cout &lt;&lt; inputNumber &lt;&lt; endl; return 0; } namespace를 전역 범위로 사용하도록 하는 디렉티브 std는 C++ 표준 라이브러리에 모든 요소들이 포함되어 있는 namespace std:: 없이도 std namespace와 관련된 요소들에...","categories": ["C++"],
        "tags": [],
        "url": "/c++/Iostream-Library/",
        "teaser": null
      },{
        "title": "Set",
        "excerpt":"선언 set&lt;T&gt;이름 원하는 자료형 및 Class를 T에 선언 ex) string, int 중복을 허용하지 않고 허용하려면 multiset을 사용해야함 insert insert(element) insert(element): set에 element 추가 erase erase(element) erase(element): 세트에서 해당하는 element를 삭제 clear clear(): 세트에 있는 모든 원소 삭제 find(element): element에 해당하는 iterator를 반환 count(element): element에 해당하는 개수를 반환 기타 empty(): 비어있으면...","categories": ["C++"],
        "tags": [],
        "url": "/c++/Set/",
        "teaser": null
      },{
        "title": "Commit Convention",
        "excerpt":"Commit 구조 type: subject body(생략 가능) footer(생략 가능) Type Init: 프로젝트 생성 Feat: 새로운 기능 추가 Fix: 기능, 버그 수정 (하나의, 또는 적은양의 기능 수정) Refactor: 전체적인 구조 변경 (Fix 보다 수정사항이 큰 경우) Chore: 그 외에 작업들(패키지 매니저 변경, 빌드 수정 등등) Docs: 문서 수정, README 수정 Design: 기능변경없이...","categories": ["Git"],
        "tags": [],
        "url": "/git/Commit-Convention/",
        "teaser": null
      },{
        "title": "Data Structure",
        "excerpt":"응용 프로그램 설계 시 중요하게 고려해야 할 항목 중 하나는 데이터 관리 입력을 받아 연산하거나 처리한 후 그 결과를 출력하거나 데이터를 보내야 함 프로그래머는 데이터를 메모리에 저장하기 위해 여러 자료 구조를 사용할 수 있음 성능과 안정성을 확보하려면 상황에 맞는 적절한 자료 구조를 선택하는 것이 중요 응용 프로그램이 제대로 작동한다는 것은...","categories": ["DataStructures"],
        "tags": [],
        "url": "/datastructures/Data-Structures/",
        "teaser": null
      },{
        "title": "Linear(선형)",
        "excerpt":"원소들을 순차적으로 나열 시키며 앞 뒤 관계가 1:1 Contiguous Data Structures(연속된 자료 구조) 대표적으로 array가 있음 모든 원소를 단일 메모리 Chunk에 저장함 각각의 원소는 같은 Data Type을 사용하고 같은 크기의 메모리를 사용함 첫번째 원소의 주소를 Base Address(BA) 배열의 전체 크기와 상관없이 모든 원소에 곧바로 접근할 수 있어서 데이터 접근 시간이...","categories": ["DataStructures"],
        "tags": [],
        "url": "/datastructures/Linear(%EC%84%A0%ED%98%95)/",
        "teaser": null
      },{
        "title": "Git & GitHub",
        "excerpt":"Define 오픈 소스 버전 관리 시스템(VCS: Version Control System) Git은 Local에서 돌아가는 버전관리 프로그램. GitHub는 Remote에서 이 버전들을 저장해놓은 저장소. GitHub는 클라우드 서버를 사용해서 로컬에서 버전 관리한 소스코드를 업로드하여 공유 가능 GitHub는 분산 버전 제어, 액세스 제어, 소스 코드 관리, 버그 추적, 기능 요청 및 작업 관리를 제공 본인컴퓨터가 Local이고...","categories": ["Git"],
        "tags": [],
        "url": "/git/Git-&-GitHub/",
        "teaser": null
      },{
        "title": "Git Commend",
        "excerpt":"git git git이 잘 설치되었는지 확인할 수 있음 git과 관련된 commend을 확인할 수 있음 init git init Initialized empty Git repository in Desktop/test/.git/ git 저장소를 만드는 명령 Local에 깃 저장소를 만들 수 있음 Initialized empty Git repository in 메세지가 나올 경우 성공한것 해당 경로에 .git 폴더가 만들어짐 config // 값...","categories": ["Git"],
        "tags": [],
        "url": "/git/Git-Commend/",
        "teaser": null
      },{
        "title": "Non-Linear(비선형)",
        "excerpt":"선형 구조에서는 최대 두가지 방향(순방향과 역방향)으로 자료를 순회할 수 있음 그러나 이런 구조는 매우 제한적이어서 복잡한 문제에는 적용하기 어려움 트리와 그래프를 사용하면 더 복잡한문제를 풀 수 있음 데이터베이스(B-tree), 데이터 인코딩/압축(허프만 트리), 그래프 컬러링, 할당 문제, 최소 거리 문제 선형 자료 구조로 표현할 수 없는 대표적인 문제로 Hierarchical Problem(계층적 문제), Cyclic...","categories": ["DataStructures"],
        "tags": [],
        "url": "/datastructures/Non-Linear(%EB%B9%84%EC%84%A0%ED%98%95)/",
        "teaser": null
      },{
        "title": "String",
        "excerpt":"문자열 입력 받기 int main() { string fruit; cin &gt;&gt; fruit; // apple is red! 입력 cout &lt;&lt; fruit; // apple만 출력 } string 타입은 cin으로 입력받을 때 공백을 기준으로 문자열의 끝이라고 판단하여 더 이상의 입력을 받지 않음 공백을 포함한 문자열 입력 받기 int main() { string fruit; getline(cin,fruit); //...","categories": ["C++"],
        "tags": [],
        "url": "/c++/String/",
        "teaser": null
      },{
        "title": "Vector",
        "excerpt":"Define Standard Template Library(C++ 표준 라이브러리)에 있는 컨테이너로 사용자가 사용하기 편하게 정의된 Class vector 생성 시 heap에 생성 및 동적할당됨 Initialize vector&lt;int&gt;numbers; // 비어있는 vector 생성 numbers = {}; vector&lt;int&gt;numbers(4); // 기본값(0)으로 초기화된 4개의 원소를 가진 vector 생성 // numbers = {0, 0, 0, 0}; vector&lt;int)numbers(4,11); // 값 11로 초기화된...","categories": ["C++"],
        "tags": [],
        "url": "/c++/Vector/",
        "teaser": null
      },{
        "title": "Array",
        "excerpt":"Define memory를 자동으로 할당하고 해제함 원소의 타입과 배열 크기를 매개변수로 사용하는 클래스 템플릿 C와 마찬가지로 원소에 접근할 수 있는 [] 연산자를 제공 빠른 동작을 위해 전달된 인덱스 값이 배열 크기보다 작은지 검사하지 않음 Initialize array&lt;int, 10&gt;arr; // 크기가 10인 int 타입의 arr 이름을 가진 배열 선언 arr[0] = 1; //...","categories": ["C++"],
        "tags": [],
        "url": "/c++/Array/",
        "teaser": null
      },{
        "title": "Build Process",
        "excerpt":"C언어 Build Process C언어는 Compile 방식으로 빌드를 함 Compile 방식은 소스코드 전체를 기계어로 번역하는 방식 빌드과정은 크게 Precompile, Compile, Assemble, Link 4단계를 거침 Precompile(전처리) 전처리기에 의해 수행됨 #으로 시작되는 C 소스 코드는 전처리기에게 실직적인 컴파일이 이루어지기 전에 무언가를 실행하라고 알려줌 ex) #include : stdio.h 파일의 내용이 #include 부분에 포함됨 Compile(컴파일)...","categories": ["C++"],
        "tags": [],
        "url": "/c++/Build-Process/",
        "teaser": null
      },{
        "title": "Main Memory 구조",
        "excerpt":"1. Code(Program) Program을 만들고 실행 위해 구현한 코드(Text) CPU는 Code 영역에서 저장된 명령을 하나씩 가져가서 처리 한다. Program이 시작하고 종료될 때 까지 Memory에 계속 남아 있는다. 2. Data 공통으로 공유하기 위한 Data 전역변수, Static / class 타입변수 저장 Program이 실행되는 동안 Immutable Program 시작과 함께 할당되며 Program이 종료되면 소멸 3....","categories": ["ComputerScience"],
        "tags": [],
        "url": "/computerscience/Main-Memory-%EA%B5%AC%EC%A1%B0/",
        "teaser": null
      },{
        "title": "컴퓨터의 구조",
        "excerpt":"Computer Architecture(컴퓨터 구조) 컴퓨터의 구성요소나 작동원리를 몰라도 프로그래밍 문법만 알면 개발을 하는데 전혀 지장이 없음 때문에 ‘개발자면 코드만 잘 설계하면 되는거 아닌가?’ 라는 의문을 가질 수 있음 하지만 좋은 개발자가 되려면 프로그래밍 언어의 문법과 함께 컴퓨터의 근간(컴퓨터구조, 운영체제)을 알아야 함 문제 해결 능력을 기를 수 있음 똑같은 코드를 작성했지만 실행하는...","categories": ["ComputerArchitecture"],
        "tags": [],
        "url": "/computerarchitecture/%EC%BB%B4%ED%93%A8%ED%84%B0%EC%9D%98-%EA%B5%AC%EC%A1%B0/",
        "teaser": null
      },{
        "title": "Data",
        "excerpt":"정보 단위 0과 1을 나타내는 가장 작은 정보의 단위인 bit n 비트로 2ⁿ가지의 정보 표현 가능 프로그램은 수많은 bit로 이루어져 있음 단위 전 단위 1btye 8bit 1kB 1,000byte 1MB 1,000kB 1GM 1,000MB 1TB 1,000GM word(워드) CPU가 한 번에 처리할 수 있는 데이터 크기를 말함 word의 절반 크기를 half word, 1배...","categories": ["ComputerArchitecture"],
        "tags": [],
        "url": "/computerarchitecture/Data/",
        "teaser": null
      },{
        "title": "Command",
        "excerpt":"high-level Programming language(고급언어) 사람이 이해하기 쉽게 만들어진 언어 대부분의 프로그래밍 언어 고급언어에서 저급언어로 변환될때 크게 2가지 방식이 있는데 컴파일 방식과 인터프리터 방식이 있음 low-level Programming language(저급언어) 컴퓨터가 직접 이해하고 실행할 수 있는 언어 기계어와 어셈블리어가 있음 하드웨어와 밀접하게 맞닿은 프로그램을 개발하는 임베디드 개발자, 게임 개발자, 보안 솔루션 개발자, 시스템 해커...","categories": ["ComputerArchitecture"],
        "tags": [],
        "url": "/computerarchitecture/Command/",
        "teaser": null
      },{
        "title": "CPU 성능 향상 기법",
        "excerpt":"Clock(클럭) 클럭 신호가 빠르게 반복되면 CPU와 그 외의 부품들은 꼭 그런건 아니지만 일반적으로 빠른 박자로 움직임 즉 클럭 속도가 높아지면 CPU는 명령어 사이클을 더 빠르게 반복함 클럭 속도가 높은 CPU는 일반적으로 성능이 좋고 그래서 클럭 속도는 CPU 속도 단위로 간주됨 클럭 속도는 헤르츠(Hz) 단위로 측정, 1초에 클럭이 몇 번 반복되는지...","categories": ["ComputerArchitecture"],
        "tags": [],
        "url": "/computerarchitecture/CPU-%EC%84%B1%EB%8A%A5-%ED%96%A5%EC%83%81-%EA%B8%B0%EB%B2%95/",
        "teaser": null
      },{
        "title": "운영체제",
        "excerpt":"OperatingSystem(OS, 운영체제) 실행할 프로그램에 필요한 자원을 할당하고 프로그램이 올바르게 실행되도록 돕는 특별한 프로그램 운영체제도 프로그램이기 때문에 메모리에 적재되어야 함 하지만 특별한 프로그램이기 때문에 항상 컴퓨터가 부팅될 때 메모리 내 Kernel Space(커널 영역)이라는 공간에 적재되 실행 커널 영역을 제외한 나머지 영역을 User Space(사용자 영역) 운영체제는 실행할 프로그램을 메모리에 적재하고 더 이상...","categories": ["OS"],
        "tags": [],
        "url": "/os/%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C/",
        "teaser": null
      },{
        "title": "프로세스와 스레드",
        "excerpt":"Process 프로그램은 실행되기 전까지는 보조기억장치에 있는 데이터 덩어리일 뿐 프로그램을 메모리에 적재하고 실행되는 순간 프로그램은 프로세스가 됨 Foreground Process: 사용자가 보는 앞에서 실행되는 프로세스 Background Process: 사용자가 보지 못하는 뒤에서 실행되는 프로세스 백그라운드 프로세스 중에서 사용자와 직접 상호작용할 수 있는 프로세스도 있지만 상호작용없이 정해진 일만 수행하는 프로세스도 있음 Unix 체계에서는...","categories": ["OS"],
        "tags": [],
        "url": "/os/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4%EC%99%80-%EC%8A%A4%EB%A0%88%EB%93%9C/",
        "teaser": null
      },{
        "title": "CPU 스케줄링",
        "excerpt":"CPU Scheduling 운영체제가 프로세스들에게 공정하고 합리적으로 CPU 자원을 배분하는 것 컴퓨터 성능과도 직결됨 프로세스들에게 CPU를 제대로 배분하지 못한다면 당장 급하게 실행되는게 실행되지 못하거나, 급하지 않은 프로세스들만 실행 되는 등의 무질서한 상태가 발생할 수 있음 Priority(우선순위) 우선순위가 높은 프로세스란 빨리 처리해야 하는 프로세스를 의미 대부분의 프로세스들은 CPU와 입출력장치를 번갈아가며 실행함 즉...","categories": ["OS"],
        "tags": [],
        "url": "/os/CPU-%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81/",
        "teaser": null
      },{
        "title": "프로세스 동기화",
        "excerpt":"Synchronization(동기화) 동시다발적으로 실행되는 프로세스들은 서로 협력하며 영향을 주고 받음 이렇게 협력하여 실행되는 프로세스들은 실행 순서와 자원의 일관성을 보장해야 하기에 반드시 동기화가 필요함 실행 순서 제어를 위한 동기화 값을 저장하는 프로세스 A와 저장한 값을 읽는 프로세스 B가 있다고 가정 두 프로세스는 순서 없이 실행되어선 안됨 저장하는 프로세스 A가 실행되고 끝나서야 프로세스...","categories": ["OS"],
        "tags": [],
        "url": "/os/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4-%EB%8F%99%EA%B8%B0%ED%99%94/",
        "teaser": null
      },{
        "title": "교착 상태",
        "excerpt":"Deadlock(교착 상태) 프로세스를 실행하기 위해서는 자원이 필요한데 두 개 이상의 프로세스가 각자 가지고 있는 자원을 무작정 기다리면 일어나지 않을 사건을 기다리며 진행이 멈춰 버리는 현상 Dining Philosophers Problem(식사하는 철학자 문제) 음식을 먹기 위해서는 꼭 양손에 포크가 있어야 한다고 가정 왼쪽 포크가 있다면 왼쪽 포크를 들고 없다면 기다리고 오른쪽 포크가 있다면...","categories": ["OS"],
        "tags": [],
        "url": "/os/%EA%B5%90%EC%B0%A9-%EC%83%81%ED%83%9C/",
        "teaser": null
      },{
        "title": "가상 메모리",
        "excerpt":"연속 메모리 할당 연속적인 메모리 공간을 할당하는 방식 Swapping(스와핑) 메모리에 적재된 프로세스 중에서 현재 실행되지 않는 프로세스가 있을 수 있음 이러한 프로세스들은 임시로 보조기억장치에 보내고 그렇게 해서 생긴 메모리상의 빈 공간에 또 다른 프로세스를 적재하는 방식 Swap Space: 이때 프로세스들이 쫒겨나는 보조기억장치의 일부 영역 Swap-out: 현재 실행되지 않는 프로세스가 메모리에서...","categories": ["OS"],
        "tags": [],
        "url": "/os/%EA%B0%80%EC%83%81-%EB%A9%94%EB%AA%A8%EB%A6%AC/",
        "teaser": null
      },{
        "title": "파일 시스템",
        "excerpt":"File HDD나 SSD 같은 보조기억장치에 저장된 정보의 집합 모든 파일에는 이름, 파일을 실행하기 위한 정보, 파일 관련 부가 정보가 있음 파일 관련 부가 정보는 attribute 또는 metadata 라고 부름 파일 속성과 유형 속성 이름 의미 유형 OS가 인지하는 파일의 종류 ex) exe(Window) dmg(Mac) 크기 파일의 현재 크기와 허용 가능한 최대...","categories": ["OS"],
        "tags": [],
        "url": "/os/%ED%8C%8C%EC%9D%BC-%EC%8B%9C%EC%8A%A4%ED%85%9C/",
        "teaser": null
      }]
