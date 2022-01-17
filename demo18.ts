interface Girl18 {
  name: string;
}
class SelectGirl<T extends Girl18> {
  constructor(private girls: T[]) {}
  getGirl(index: number): string {
    return this.girls[index].name;
  }
}
//泛型的约束Girl18是继承name属性,即参数必须含name。number|string的话就是继承number或string泛型
const selectGirl = new SelectGirl([
  { name: "大乔" },
  { name: "小乔" },
  { name: "安琪拉" },
]);
console.log(selectGirl.getGirl(1));
