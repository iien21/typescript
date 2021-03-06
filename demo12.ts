// 类的构造函数
class Person12 {
  //   public name: string;
  //   constructor(name: string) {
  //     this.name = name;
  //   }
  // 和下面方法起到同样的效果
  constructor(public name: string) {}
}

class Teacher extends Person12 {
  constructor(public age: number) {
    super("xin");
  }
  //   当子类继承父类方法时需要写constructor，且写super方法和传递参数。类方法默认有空的构造函数。
}
const person12 = new Person12("feng");
const techer = new Teacher(18);
console.log(techer.name, techer.age);
console.log(person12.name);
