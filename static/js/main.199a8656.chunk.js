(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),u=(n(10),n(4)),l=n(1),i=function(e){return r.a.createElement("div",{style:{marginTop:"20px"}},"Current Counter:",e.value)},s=function(e){return r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement("button",{onClick:e.incHandler},"Increment"),r.a.createElement("button",{onClick:e.decHandler},"Decrement"),r.a.createElement("button",{onClick:e.addHandler},"Add 10"),r.a.createElement("button",{onClick:e.subHandler},"Substract 15"))},d=function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{style:{marginTop:"40px"},onClick:e.clicked},"Store results"),r.a.createElement("ul",{style:{listStyle:"none"}},e.dataList.map((function(e,t){return r.a.createElement("li",{key:t},e)}))))},m=(n(11),{counter:0,dataList:[]}),E=function(e,t){switch(t.type){case"INCREMENT":return Object(l.a)(Object(l.a)({},e),{},{counter:e.counter+1});case"DECREMENT":return Object(l.a)(Object(l.a)({},e),{},{counter:e.counter-1});case"ADD":return Object(l.a)(Object(l.a)({},e),{},{counter:e.counter+10});case"SUB":return Object(l.a)(Object(l.a)({},e),{},{counter:e.counter-15});case"SHOW":return Object(l.a)(Object(l.a)({},e),{},{dataList:e.dataList.concat(e.counter)});default:return e}};var p=function(){var e=Object(a.useReducer)(E,m),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(i,{value:n.counter}),r.a.createElement(s,{incHandler:function(){return c({type:"INCREMENT"})},decHandler:function(){return c({type:"DECREMENT"})},addHandler:function(){return c({type:"ADD"})},subHandler:function(){return c({type:"SUB"})}}),r.a.createElement(d,{clicked:function(){return c({type:"SHOW"})},dataList:n.dataList}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.199a8656.chunk.js.map