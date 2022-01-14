interface Girl6 {
  name: string;
  age: number;
  bust: number;
  waistline?: number;
  [propname: string]: any;
  say(): string;
}
// 不仅能限制对象 而且还可限制类

class littleGirl implements Girl6 {
  name = "刘圆";
  age = 18;
  bust = 99;
  say() {
    return "welcome";
  }
}
const girl6 = {
  name: "大大",
  age: 18,
  bust: 99,
  waistline: 33,
  sex: "woman",
  say: () => "welcome",
};
const screenResume1 = (girl6: Girl6) => {
  girl6.age < 24 && girl6.bust > 90 && console.log(girl6.name + "in");
  girl6.age >= 24 || (girl6.bust < 90 && console.log(girl6.name + "out"));
};
const getResume1 = (girl6: Girl6) => {
  console.log(girl6.age);
  console.log(girl6.bust);
  girl6.waistline && console.log(girl6.waistline);
  girl6.sex && console.log(girl6.sex);
};
screenResume1(girl6);
getResume1(girl6);
