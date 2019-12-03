(this["webpackJsonpreact-suspenselist-bug"]=this["webpackJsonpreact-suspenselist-bug"]||[]).push([[0],{4:function(e,t,l){e.exports=l(9)},9:function(e,t,l){"use strict";l.r(t);var n=l(0),a=l.n(n),r=l(3),o=l.n(r),c=l(1),i=k("A"),u=k("B"),s=k("C"),m=k("A"),d=k("B"),E=k("C");function v(e){var t=e.req;return a.a.createElement("div",null,a.a.createElement("div",null,"Request: ",t.map((function(e){return e[0]}))),a.a.createElement("ul",null,a.a.createElement(a.a.SuspenseList,{revealOrder:"forwards"},t.map((function(e){var t=Object(c.a)(e,2),l=t[0],n=t[1];return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(p,{text:"Loading ".concat(l)})},a.a.createElement(n,null))})))))}function b(){var e=a.a.useState(1),t=Object(c.a)(e,2),l=t[0],n=t[1];return a.a.createElement("div",null,a.a.createElement("div",null,"Scenario is:",a.a.createElement("ul",null,a.a.createElement("li",null,"Click on ",a.a.createElement("em",null,"Resolve A")),a.a.createElement("li",null,"Click on ",a.a.createElement("em",null,"Resolve C")),a.a.createElement("li",null,"Click on ",a.a.createElement("em",null,"See second page"))),a.a.createElement("p",null,"Got: A / Loading B / Loading C"),a.a.createElement("p",null,"C has been marked as loading while it has already been rendered as a loaded once.")),a.a.createElement("div",null,a.a.createElement("button",{disabled:i.isResolved(),onClick:i.resolve},"Resolve A"),a.a.createElement("button",{disabled:u.isResolved(),onClick:u.resolve},"Resolve B"),a.a.createElement("button",{disabled:s.isResolved(),onClick:s.resolve},"Resolve C"),a.a.createElement("button",{disabled:2===l,onClick:function(){return n(2)}},"See second page")),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement(v,{req:1===l?[["C",s]]:[["A",i],["B",u],["C",s]]})))}function C(){var e=a.a.useState(1),t=Object(c.a)(e,2),l=t[0],n=t[1];return a.a.createElement("div",null,a.a.createElement("div",null,"Scenario is:",a.a.createElement("ul",null,a.a.createElement("li",null,"Click on ",a.a.createElement("em",null,"Resolve B")),a.a.createElement("li",null,"Click on ",a.a.createElement("em",null,"Resolve C")),a.a.createElement("li",null,"Click on ",a.a.createElement("em",null,"See second page"))),a.a.createElement("p",null,"Got: Loading A / C"),a.a.createElement("p",null,"Not consistent with the other scenario.")),a.a.createElement("div",null,a.a.createElement("button",{disabled:m.isResolved(),onClick:m.resolve},"Resolve A"),a.a.createElement("button",{disabled:d.isResolved(),onClick:d.resolve},"Resolve B"),a.a.createElement("button",{disabled:E.isResolved(),onClick:E.resolve},"Resolve C"),a.a.createElement("button",{disabled:2===l,onClick:function(){return n(2)}},"See second page")),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement(v,{req:1===l?[["B",d],["C",E]]:[["A",m],["C",E]]})))}var f=function(){return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement("div",{style:{flexGrow:1}},a.a.createElement(b,null)),a.a.createElement("div",{style:{flexGrow:1}},a.a.createElement(C,null)))};function p(e){return a.a.createElement("li",null,e.text)}function k(e){var t=!1,l=function(){if(!t)throw n;return a.a.createElement(p,{text:e})},n=new Promise((function(e){l.resolve=function(){return t=!0,e()},l.isResolved=function(){return t}}));return l}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.createRoot(document.getElementById("root")).render(a.a.createElement(f,null)),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[4,1,2]]]);
//# sourceMappingURL=main.e97f56d3.chunk.js.map