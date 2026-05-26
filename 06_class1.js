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
  age = 20;
  address;
}

const p1 = new Person();
const p2 = new Person("윌리엄");
console.log(p1, p2);
p1.hi();
p2.hi();
