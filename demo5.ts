function getTotal(one: number, two: number): number {
  return one + two;
}
getTotal(1, 2);
// 最后一个number为返回类型注解，如果没有返回任何类型不检测。

function sayHello(): void {
  console.log("Hello World");
}
// void是没有返回值的意思

function errorFun(): never {
  throw new Error();
  console.log("hello");
}
function forNever(): never {
  while (true) {}
  console.log("hello");
}
// 一直执行不完使用never

function add({ one, two }: { one: number; two: number }) {
  return one + two;
}
add({ one: 1, two: 3 });
// 对象方式在对象后加类型

function getNumber({ one }: { one: number }) {
  return one;
}
getNumber({ one: 1 });

