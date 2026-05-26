// Map
// 1. Map vs. Object
const o = {};
o.a = "a";
o.b = "b";
o["c d"] = "c d";
// key, value -> 호출할 수 있는 이름 ==> 값
o["e"] = function () {
  console.log("e");
};
// // 숫자를 넣으면 배열로 인식된다든가
// for (const v of o) {
// }
// TypeError: o is not iterable - 컬렉션이 아니다
// 1. 효율적이지도 않고
// 2. KV라는 목적에 충실하지도 않다
console.log(o);
const map = new Map(); // new : 생성자 -> Map()
// 데이터를 관리하는 여러 함수를 내장
// map.get, set, has ...
for (const c of map) {
  // 변환과정 등을 거치지 않아도
  // iterable하다
}
