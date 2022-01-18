// class Header {
//   constructor() {
//     const elem = document.createElement("div");
//     elem.innerText = "this is header";
//     document.body.appendChild(elem);
//   }
// }
// class Content {
//   constructor() {
//     const elem = document.createElement("div");
//     elem.innerText = "this is Content";
//     document.body.appendChild(elem);
//   }
// }
// class Footer {
//   constructor() {
//     const elem = document.createElement("div");
//     elem.innerText = "this is Footer";
//     document.body.appendChild(elem);
//   }
// }
// class Page {
//   constructor() {
//     new Header();
//     new Content();
//     new Footer();
//   }
// }
// 缺点污染全局变量

namespace Home {
  class Header {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "this is header";
      document.body.appendChild(elem);
    }
  }

  class Content {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "this is Content";
      document.body.appendChild(elem);
    }
  }

  class Footer {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "this is Footer";
      document.body.appendChild(elem);
    }
  }
  export class Page {
    constructor() {
      new Header();
      new Content();
      new Footer();
    }
  }
}
// 命名空间方式
// 全局变量很少，减少了全局污染，变量多转换为私有变量。