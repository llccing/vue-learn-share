(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{335:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"node程序调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node程序调试"}},[t._v("#")]),t._v(" node程序调试")]),t._v(" "),a("p",[t._v("代码调试工具对于源码的理解真的是很方便的工具，前面几个命令解析的过程中是通过 "),a("code",[t._v("console.log")]),t._v(" 的方式，真的是很难用。每个地方加 "),a("code",[t._v("console.log")]),t._v("，很痛苦。")]),t._v(" "),a("p",[t._v("所以就很怀念很久之前调试Java或者C#的代码的日子，点个点儿就完成了，很方便")]),t._v(" "),a("h2",{attrs:{id:"launch-json配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launch-json配置"}},[t._v("#")]),t._v(" launch.json配置")]),t._v(" "),a("p",[t._v("举个例子，调试 "),a("code",[t._v("vue inpect")]),t._v(" 命令，launch.json的配置如下")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用 IntelliSense 了解相关属性。 ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 悬停以查看现有属性的描述。")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"configurations"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"request"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"launch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"启动程序"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"skipFiles"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<node_internals>/**"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重点是这两行，首先命令是 vue")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"program"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${workspaceFolder}/packages/@vue/cli/bin/vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 然后参数是 inspect。此处改为其他的也很容易，例如 ["serve"] 等于执行 vue serve 或者 ["ui"] 等于执行 vue ui')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"args"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inspect"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"调试web程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调试web程序"}},[t._v("#")]),t._v(" 调试web程序")]),t._v(" "),a("p",[t._v("todo 可以用一个vue的项目试试，应该会比 "),a("code",[t._v("console.log")]),t._v(" 的方式舒服。")]),t._v(" "),a("h2",{attrs:{id:"感谢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#感谢"}},[t._v("#")]),t._v(" 感谢")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://blog.ahui.me/posts/2019-05-11/debug-in-vscode/",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用VSCode调试你的node应用"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("文章中的这个配置json，非常易懂")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"request"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"launch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"调试inspect检查webpack config生成逻辑"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"program"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${workspaceFolder}/node_modules/.bin/vue-cli-service"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重点标记下")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"args"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inspect"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"env"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"VUE_CLI_SERVICE_CONFIG_PATH"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${workspaceFolder}/build/vue.config.js"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cwd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${workspaceFolder}"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://juejin.im/post/5c1b8bf56fb9a049ea38eafe",target:"_blank",rel:"noopener noreferrer"}},[t._v("调试js"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/71928374",target:"_blank",rel:"noopener noreferrer"}},[t._v("Debug with VSCode"),a("OutboundLink")],1),t._v(" 非常详细的描述")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.barretlee.com/blog/2019/03/18/debugging-in-vscode-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VSCode 调试中 launch.json 配置不完全指南"),a("OutboundLink")],1),t._v(" 阿里大佬的文章")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);