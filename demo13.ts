// private的get和set用法

class littleGirl2 {
  constructor(private _age: number) {}
  // 类的内部变量名通常以下划线开头

  get age() {
    return this._age - 10;
  }
  // 属性
  set age(age: number) {
    this._age = age + 3;
  }
}
const xiaohua = new littleGirl2(28);
xiaohua.age = 25;
console.log(xiaohua.age);

class Girl {
  static sayLove() {
    return "I love 1";
  }
  sayLove1() {
    return "I love 2";
  }
}
const girl5 = new Girl();
console.log(Girl.sayLove());//静态类方法
console.log(girl5.sayLove1());//实例化方法
