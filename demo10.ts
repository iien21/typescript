class Lady {
  content = "Hi,Boy";
  sayHello() {
    return this.content;
  }
}

class littleGirl1 extends Lady {
  //   sayHello() {
  //     return "Hi,Honey";
  //   }
  // 继承并重写父级sayHello方法
  sayHello() {
    return super.sayHello() + ".你好！";
  }
  //   super继承父类方法
  sayLove() {
    return "I Love You";
  }
}
// 继承

const goddess = new littleGirl1();
console.log(goddess.sayHello());
console.log(goddess.sayLove());
