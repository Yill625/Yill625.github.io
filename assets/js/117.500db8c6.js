(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{522:function(t,a,v){"use strict";v.r(a);var r=v(58),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"执行上下文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文"}},[t._v("#")]),t._v(" 执行上下文")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://juejin.cn/post/6844903682283143181",target:"_blank",rel:"noopener noreferrer"}},[t._v("[译] 理解 JavaScript 中的执行上下文和执行栈"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/4",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 深入之执行上下文栈"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://github.com/kuitos/kuitos.github.io/issues/18",target:"_blank",rel:"noopener noreferrer"}},[t._v("一道 js 面试题引发的思考"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"什么是执行上下文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是执行上下文"}},[t._v("#")]),t._v(" 什么是执行上下文？")]),t._v(" "),v("p",[t._v("代码在运行的时候，执行的环境")]),t._v(" "),v("h2",{attrs:{id:"执行上下文类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文类型"}},[t._v("#")]),t._v(" 执行上下文类型")]),t._v(" "),v("ul",[v("li",[t._v("全局执行上下文\n"),v("blockquote",[v("p",[t._v("— 这是默认或者说基础的上下文，任何不在函数内部的代码都在全局上下文中。它会执行两件事：创建一个全局的 window 对象（浏览器的情况下），并且设置 this 的值等于这个全局对象。一个程序中只会有一个全局执行上下文")])])]),t._v(" "),v("li",[t._v("函数执行上下文\n"),v("blockquote",[v("p",[t._v("每当一个函数被调用时, 都会为该函数创建一个新的上下文。每个函数都有它自己的执行上下文，不过是在函数被调用时创建的。函数上下文可以有任意多个。每当一个新的执行上下文被创建，它会按定义的顺序（将在后文讨论）执行一系列步骤。")])])]),t._v(" "),v("li",[t._v("Eval 函数执行上下文\n"),v("blockquote",[v("p",[t._v("执行在 eval 函数内部的代码也会有它属于自己的执行上下文，但由于 JavaScript 开发者并不经常使用 eval，所以在这里我不会讨论它。")])])])]),t._v(" "),v("h2",{attrs:{id:"执行栈"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#执行栈"}},[t._v("#")]),t._v(" 执行栈")]),t._v(" "),v("p",[t._v("执行栈，也就是在其它编程语言中所说的“调用栈”，是一种拥有 LIFO（后进先出）数据结构的栈，被用来存储代码运行时创建的所有执行上下文")]),t._v(" "),v("h2",{attrs:{id:"对于每个执行上下文-都有三个重要属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对于每个执行上下文-都有三个重要属性"}},[t._v("#")]),t._v(" 对于每个执行上下文，都有三个重要属性")]),t._v(" "),v("ul",[v("li",[t._v("变量对象 (variable object)")]),t._v(" "),v("li",[t._v("作用域链 (scope chain)")]),t._v(" "),v("li",[t._v("this")])]),t._v(" "),v("h3",{attrs:{id:"this"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#this"}},[t._v("#")]),t._v(" this")]),t._v(" "),v("ul",[v("li",[t._v("在全局执行上下文中，this 的值指向全局对象。(在浏览器中，this 引用 Window 对象)。")]),t._v(" "),v("li",[t._v("在函数执行上下文中，this 的值取决于该函数是如何被调用的。如果它被一个引用对象调用，那么 this 会被设置成那个对象，否则 this 的值被设置为全局对象或者 undefined（在严格模式下）。")])]),t._v(" "),v("h3",{attrs:{id:"变量对象"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#变量对象"}},[t._v("#")]),t._v(" 变量对象")]),t._v(" "),v("p",[t._v("变量对象是与执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明。")]),t._v(" "),v("p",[t._v("!!!全局上下文中的变量对象就是全局对象")]),t._v(" "),v("h3",{attrs:{id:"执行过程-变量对象的过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#执行过程-变量对象的过程"}},[t._v("#")]),t._v(" 执行过程 变量对象的过程")]),t._v(" "),v("ol",[v("li",[t._v("进入执行上下文 "),v("strong",[t._v("当进入执行上下文时，这时候还没有执行代码")]),t._v(" "),v("ol",[v("li",[t._v("函数的所有形参 (如果是函数上下文)")]),t._v(" "),v("li",[t._v("函数声明")]),t._v(" "),v("li",[t._v("变量声明")])])]),t._v(" "),v("li",[t._v("代码执行 "),v("strong",[t._v("在代码执行阶段，会顺序执行代码，根据代码，修改变量对象的值")])])]),t._v(" "),v("p",[t._v("总结")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("全局上下文的变量对象初始化是全局对象")])]),t._v(" "),v("li",[v("p",[t._v("函数上下文的变量对象初始化只包括 Arguments 对象")])]),t._v(" "),v("li",[v("p",[t._v("在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值")])])]),t._v(" "),v("p",[t._v("4.在代码执行阶段，会再次修改变量对象的属性值")]),t._v(" "),v("h3",{attrs:{id:"变量对象-vo-和活动对象-ao-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#变量对象-vo-和活动对象-ao-的区别"}},[t._v("#")]),t._v(" 变量对象(VO)和活动对象（AO）的区别")]),t._v(" "),v("p",[t._v("未进入执行阶段之前，变量对象(VO)中的属性都不能访问！但是进入执行阶段之后，变量对象(VO)转变为了活动对象(AO)，里面的属性都能被访问了，然后开始进行执行阶段的操作。它们其实都是同一个对象，只是处于执行上下文的不同生命周期。")])])}),[],!1,null,null,null);a.default=s.exports}}]);