// type annotation 类型注解
// type inference 类型推断
let count2: number;
count2 = 123;
let countInference = 123;

const one = 1;
const two = 2;
const three = one + two;
const xiaojie = {
  name: "刘杏",
  age: 18,
};
// 会自动分析推断的是类型推断

function getTotal1(one, two) {
  return one + two;
}
getTotal(1, 2);
// 不会自动分析类型的就需要类型注解
