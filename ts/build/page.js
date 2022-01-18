"use strict";
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
var Home;
(function (Home) {
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
    class Page {
        constructor() {
            new Header();
            new Content();
            new Footer();
        }
    }
    Home.Page = Page;
})(Home || (Home = {}));
// 命名空间
