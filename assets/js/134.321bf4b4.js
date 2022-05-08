(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{540:function(t,s,a){"use strict";a.r(s);var n=a(58),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"this-call-apply-bind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-call-apply-bind"}},[t._v("#")]),t._v(" this/call/apply/bind")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/7",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 深入之从 ECMAScript 规范解读 this"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://weread.qq.com/web/reader/8c632230715c01a18c683d8",target:"_blank",rel:"noopener noreferrer"}},[t._v("📚 你不知道的 JavaScript"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"this-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-是什么"}},[t._v("#")]),t._v(" this 是什么")]),t._v(" "),a("p",[t._v("this 的作用就是 减少函数传参上下文对象？？")]),t._v(" "),a("p",[t._v("this 提供了一种更优雅的方式来隐式“传递”一个对象引用，因此可以将 API 设计得更加简洁并且易于复用。")]),t._v(" "),a("p",[a("strong",[t._v("显式传递上下文对象会让代码变得越来越混乱，使用 this 则不会这样。当我们介绍对象和原型时，你就会明白函数可以自动引用合适的上下文对象有多重要")])]),t._v(" "),a("p",[t._v("每当你想要把 this 和词法作用域的查找混合使用时，一定要提醒自己，这是无法实现的")]),t._v(" "),a("h3",{attrs:{id:"this-到底是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-到底是什么"}},[t._v("#")]),t._v(" this 到底是什么")]),t._v(" "),a("p",[t._v("this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。")]),t._v(" "),a("p",[t._v("this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。")]),t._v(" "),a("p",[t._v("每个函数的 this 是在调用时被绑定的，完全取决于函数的调用位置（也就是函数的调用方法）")]),t._v(" "),a("h3",{attrs:{id:"this-全面解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-全面解析"}},[t._v("#")]),t._v(" this 全面解析")]),t._v(" "),a("h4",{attrs:{id:"绑定规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绑定规则"}},[t._v("#")]),t._v(" 绑定规则")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("默认绑定")]),t._v(" "),a("blockquote",[a("p",[t._v("独立函数调用 指向全局 严格模式下 LHS 会失败无法查询 this 导致 TypeError: this is undefined")])])]),t._v(" "),a("li",[a("p",[t._v("隐式绑定")]),t._v(" "),a("blockquote",[a("p",[t._v("调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含，不过这种说法可能会造成一些误导")])])]),t._v(" "),a("li",[a("p",[t._v("显示绑定 call apply bind")])]),t._v(" "),a("li",[a("p",[t._v("new 绑定")]),t._v(" "),a("blockquote",[a("p",[t._v("实际上并不存在所谓的“构造函数”，只有对于函数的“构造调用")])])]),t._v(" "),a("li",[a("p",[t._v("箭头函数本身没有 this 指向他的词法"),a("strong",[t._v("作用域")]),t._v(" this")])])]),t._v(" "),a("h4",{attrs:{id:"绑定例外"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绑定例外"}},[t._v("#")]),t._v(" 绑定例外")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("显性绑定 第一个值 null")])]),t._v(" "),a("li",[a("p",[t._v("间接引用 "),a("code",[t._v("(a.foo = b.foo)()")]),t._v(" 函数的赋值返回函数\n默认绑定来说，决定 this 绑定对象的并不是调用位置是否处于严格模式，而是函数体是否处于严格模式。如果函数体处于严格模式，this 会被绑定到 undefined，否则 this 会被绑定到全局对象。")])])]),t._v(" "),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("b")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1232")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" c\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ol",[a("li",[t._v("作为对象调用时，指向该对象 obj.b(); // 指向 obj")]),t._v(" "),a("li",[t._v("作为函数调用, var b = obj.b; b(); // 指向全局 window 严格是 undefined")]),t._v(" "),a("li",[t._v("作为构造函数调用 var b = new Fun(); // this 指向当前实例对象 b")]),t._v(" "),a("li",[t._v("作为 call 与 apply 调用 obj.b.apply(object, []); // this 指向当前的 object")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/57204184",target:"_blank",rel:"noopener noreferrer"}},[t._v("箭头函数"),a("OutboundLink")],1),t._v("不使用上面的绑定规则，根据外层作用域来决定 this，继承外层函数调用的 this 绑定")])])])}),[],!1,null,null,null);s.default=r.exports}}]);