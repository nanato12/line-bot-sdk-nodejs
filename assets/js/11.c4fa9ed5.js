(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{358:function(t,s,e){"use strict";e.r(s);var a=e(42),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"middleware-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#middleware-config"}},[t._v("#")]),t._v(" "),e("code",[t._v("middleware(config)")])]),t._v(" "),e("p",[t._v("It returns a "),e("a",{attrs:{href:"https://github.com/senchalabs/connect",target:"_blank",rel:"noopener noreferrer"}},[t._v("connect"),e("OutboundLink")],1),t._v(" middleware used\nby several Node.js web frameworks such as "),e("a",{attrs:{href:"https://expressjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Express"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"type-signature"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#type-signature"}},[t._v("#")]),t._v(" Type signature")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleware")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MiddlewareConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Middleware\n")])])]),e("p",[t._v("The types of "),e("code",[t._v("MiddlewareConfig")]),t._v(" and "),e("code",[t._v("Middleware")]),t._v(" are like below.")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MiddlewareConfig")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  channelAccessToken"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  channelSecret"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Middleware")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" req"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IncomingMessage\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ServerResponse\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n")])])]),e("p",[t._v("The "),e("code",[t._v("Middleware")]),t._v(" type is defined according to the connect middleware itself. For\nthe detail of the connect middleware, please refer to the "),e("a",{attrs:{href:"https://github.com/senchalabs/connect",target:"_blank",rel:"noopener noreferrer"}},[t._v("connect"),e("OutboundLink")],1),t._v(" documentation.")]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("p",[t._v("A very simple example of the middleware usage with an Express app is like below:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// globally")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleware")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or directly with handler")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/webhook'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleware")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  req"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("events "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webhook event objects")]),t._v("\n  req"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("destination "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// user ID of the bot (optional)")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("The middleware returned by "),e("code",[t._v("middleware()")]),t._v(" parses body and checks signature\nvalidation, so you do not need to use "),e("RouterLink",{attrs:{to:"/api-reference/validate-signature.html"}},[e("code",[t._v("validateSignature()")])]),t._v("\ndirectly.")],1),t._v(" "),e("p",[t._v("You do not need to use "),e("a",{attrs:{href:"https://github.com/expressjs/body-parser",target:"_blank",rel:"noopener noreferrer"}},[t._v("body-parser"),e("OutboundLink")],1),t._v("\nto parse webhook events, as "),e("code",[t._v("middleware()")]),t._v(" embeds body-parser and parses them to\nobjects. Please keep in mind that it will not process requests without\n"),e("code",[t._v("X-Line-Signature")]),t._v(" header. If you have a reason to use body-parser for other\nroutes, "),e("em",[t._v("please do not use it before the LINE middleware")]),t._v(". body-parser parses\nthe request body up and the LINE middleware cannot parse it afterwards.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// don't")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bodyParser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleware")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("middleware")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bodyParser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("There are environments where "),e("code",[t._v("req.body")]),t._v(" is pre-parsed, such as "),e("a",{attrs:{href:"https://firebase.google.com/docs/functions/http-events",target:"_blank",rel:"noopener noreferrer"}},[t._v("Firebase Cloud Functions"),e("OutboundLink")],1),t._v(".\nIf it parses the body into string or buffer, do not worry as the middleware will\nwork just fine. If the pre-parsed body is an object, please use "),e("RouterLink",{attrs:{to:"/api-reference/validate-signature.html"}},[e("code",[t._v("validateSignature()")])]),t._v("\nmanually with the raw body.")],1),t._v(" "),e("p",[t._v("About building webhook server, please refer to "),e("RouterLink",{attrs:{to:"/guide/webhook.html"}},[t._v("Webhook")]),t._v(".")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);