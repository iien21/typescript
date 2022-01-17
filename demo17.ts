// 泛型 多数情况下泛型可写为T
function join<Exten>(first: Exten, second: Exten) {
  return `${first}${second}`;
}
// Exten为范型 即调用着传入的是什么类型，函数参数就为什么类型。
console.log(join<string>("hi", "feng"));

// 泛型数组
function myFun<ANY>(params: ANY[]) {
  //也可以写成(params: Array<ANY>)
  return params;
}
myFun<string>(["s", "tr"]);

function join1<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
join1<string, number>("hi", 1);
