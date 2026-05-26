// class
class Person {
  // 생성자
  constructor(name) {
    // 생성자를 매개변수로 받고
    this.name = name; // 소멸하지 않고
    // this.age
    this.address = "대한민국";
  }
  hi() {
    console.log(`${this.name}에요 반가워요!`);
  }
  #age = 20; // #을 붙이면 private(클래스 외부에서는 접근 불가)로 만들 수 있음, 하지만 최신 문법이기 때문에 보편적이지 않음
  // 접근 불가가 되었을 때는 3가지
  // 1. 앞으로 이 값은 변화하지 않음 (상수 같은 개념)
  // 2. 은닉 => 메모리 주소 자체를 노출하지 않고 접근자/메서드를 통해서만 변경하며 차후 검증이나 복잡한 로직을 대응.
  // 3. 내부 작업에만 필요한 임시변수. 인스턴스의 상태 저장.
  address;

  // 접근자 프로퍼티
  // #age를 외부에서 사용하고 싶다면
  // getter
  get age() {
    return this.#age + ""; // ""를 붙이면  문자열로 변환
  }
  // setter
  set age(value) {
    this.#age = value;
  }
}

const p1 = new Person();
const p2 = new Person("윌리엄");
console.log(p1, p2);
p1.hi();
p2.hi();

// 필드, 멤버변수, 속성 ==> 각각 객체(인스턴스)별로 별도의 저장공간을 가지는 개념
console.log(p1.name, p2.name);
// console.log(p1.#age);
// Property '#age' is not accessible outside class 'Person' because it has a private identifier.ts(18013)

// getter, setter는 함수이면서 동시에 할당 연산자에 반응
p1.age = 1000; // 할당 연산자와 같이 쓰면 private한 변수, 필드 혹은 다른 내부 작업 등에 대입
console.log(p1.age); // 함수처럼 ()을 안 붙여도 그 자체를 프로퍼티처럼 쓸 수 있게 함.
