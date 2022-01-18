namespace Home {
  export class Page {
    constructor() {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
    }
  }
}
// 命名空间方式
// 全局变量很少，减少了全局污染，变量多转换为私有变量。
