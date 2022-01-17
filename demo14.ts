class Person1 {
  public readonly _name: string;
  constructor(name: string) {
    this._name = name;
  }
}
const person1 = new Person1("feng");
// person1._name='三上'// readonly为只读属性，不可编辑。
console.log(person1._name);



abstract class Girl1 {
  abstract skill();
}
// 抽象类 抽象方法。抽象类一般都跟抽象方法。
class Waiter extends Girl1 {
  skill() {
    console.log("hey,drink");
  }
}
class BaseTeacher extends Girl1 {
  skill() {
    console.log("hey,move");
  }
}
class SeniorTeacher extends Girl1 {
  skill() {
    console.log("hey,dance");
  }
}
// 继承抽象类 每个下面都需要有相应的抽象方法
