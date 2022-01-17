//  类的三种访问类型private、protected、public

class Person {
  public name?: string; // 公用 继承和外部都可使用
// private name?: string;私有 即只能在类内部访问；类的外部和继承都不可使用。
// protect name?: string;保护 即只能在类继承使用；类的外部不可使用。
  public sayHello() {
    console.log(this.name + " say hello");
  }
}

class Teacher1 extends Person {
  public sayBye() {
    console.log(this.name);
  }
}
const person = new Person();
person.name = "world";
person.sayHello();
console.log(person.name);
