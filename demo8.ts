interface Girl4 {
  name: string;
  age: number;
  bust: number;
  waistline?: number;
}
type Girl5 = string;
// 接口是对象 类型是基础

const girl4 = {
  name: "大大",
  age: 18,
  bust: 99,
  waistline: 33,
};
const screenResume = (girl4: Girl4) => {
  girl4.age < 24 && girl4.bust > 90 && console.log(girl4.name + "in");
  girl4.age >= 24 || (girl4.bust < 90 && console.log(girl4.name + "out"));
};
const getResume = (girl4: Girl4) => {
  console.log(girl4.age);
  console.log(girl4.bust);
  girl4.waistline && console.log(girl4.waistline);
};
screenResume(girl4);
getResume(girl4);
