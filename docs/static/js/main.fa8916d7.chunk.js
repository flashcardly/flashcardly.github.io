(this["webpackJsonpflashcardly-web"]=this["webpackJsonpflashcardly-web"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(5),i=n.n(r),s=(n(11),n(12),{getValue:function(e){var t,n=null!==(t=localStorage.getItem(e))&&void 0!==t?t:"null";return Promise.resolve().then((function(){return JSON.parse(n)}))},setValue:function(e,t){var n=null==t?JSON.stringify(null):JSON.stringify(t);return Promise.resolve().then((function(){return localStorage.setItem(e,n)}))},remove:function(){},hasKey:function(){}}),l={getValue:function(e){return console.error("Storage not implemented"),console.log("tried to load ".concat(e)),Promise.resolve()},setValue:function(e,t){return console.error("Storage not implemented"),console.log("tried to set ".concat(e)),Promise.resolve()},remove:function(){},hasKey:function(){}},a=o.a.createContext(l),u=n(2),j=Object(c.createContext)({options:{selectedDeck:""},setOptions:function(){}}),d=n(0),f=function(e){var t=e.children,n=Object(c.useState)({selectedDeck:"ES-EN"}),o=Object(u.a)(n,2),r=o[0],i=o[1],s=Object(c.useContext)(a);return Object(c.useEffect)((function(){s.getValue("preferences").then((function(e){e&&e.selectedDeck!==r.selectedDeck&&i(e)}))}),[]),Object(d.jsx)(j.Provider,{value:{options:r,setOptions:i},children:t})},b=n(6),h=function(e){var t,n=e.deck,o=Object(c.useState)(0),r=Object(u.a)(o,2),i=r[0],s=r[1],l=Object(c.useState)(!0),a=Object(u.a)(l,2),j=a[0],f=a[1],b=function(){s(Math.floor(Math.random()*n.length)),f(!0)};Object(c.useEffect)((function(){b()}),[n]);var h=null!==(t=n[i])&&void 0!==t?t:{front:"",back:""},O=j?h.front:h.back;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{onClick:function(){f(!j)},style:{position:"relative",height:"300px",width:"500px",border:"2px solid black",margin:"0 auto",backgroundColor:"#f0ffff"},children:[Object(d.jsx)("h1",{children:O}),Object(d.jsx)("div",{style:{position:"absolute",bottom:"0"},children:Object(d.jsx)("span",{children:"click card to show reverse"})})]}),Object(d.jsx)("button",{style:{width:"200px",border:"rgb(30,30,30)",fontSize:"24px",backgroundColor:"#88ABFB",marginTop:"20px"},onClick:b,children:"Random Card"})]})},O=n(4),x=function(){var e=Object(c.useContext)(j),t=e.options,n=e.setOptions,o=Object(c.useContext)(a);return[t,function(e){o.setValue("preferences",e).then((function(){return n(e)}))}]},g=[{fileName:"ES-EN",title:"Spanish to English"},{fileName:"FR-EN",title:"French to English"},{fileName:"EN-ES",title:"English to Spanish"},{fileName:"EN-FR",title:"English to French"}],p=function(e){e.onUpdate,Object(c.useContext)(a);var t=x(),n=Object(u.a)(t,2),o=n[0],r=n[1];return Object(d.jsx)("section",{children:Object(d.jsxs)("fieldset",{onChange:function(e){var t=e.target.value,n=Object(O.a)(Object(O.a)({},o),{},{selectedDeck:t});r(n)},children:[Object(d.jsx)("legend",{children:"Choose your deck"}),Object(d.jsx)("ul",{style:{display:"inline-block",listStyle:"none",paddingLeft:"0"},children:g.map((function(e){return Object(d.jsx)("li",{style:{textAlign:"left"},children:Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{value:e.fileName,name:"deck",type:"radio",checked:o.selectedDeck===e.fileName}),"\xa0",Object(d.jsx)("span",{children:e.title})]})})}))})]})})},v=function(){var e=x(),t=Object(u.a)(e,1)[0],n=Object(c.useState)(!1),o=Object(u.a)(n,2),r=o[0],i=o[1],s=Object(c.useState)([]),l=Object(u.a)(s,2),j=l[0],d=l[1],f=Object(c.useContext)(a),b=function(e){return(t="/data",n=e,fetch("".concat(t,"/").concat(n,".json")).then((function(e){return e.json()}))).then((function(e){return f.setValue("deck",e).then((function(){return d(e)}))}));var t,n};return Object(c.useEffect)((function(){f.getValue("deck").then((function(e){return e?function(e){return Promise.resolve(e).then(d)}(e):b(t.selectedDeck)})).then((function(){return i(!0)}))}),[]),Object(c.useEffect)((function(){r&&b(t.selectedDeck)}),[t.selectedDeck]),[j]},m=function(e){Object(b.a)(e);var t=x(),n=Object(u.a)(t,1)[0],c=v(),o=Object(u.a)(c,1)[0];return o.length?Object(d.jsxs)("article",{children:[Object(d.jsx)("h1",{className:"logo",children:"Flashcardly!"}),Object(d.jsx)("div",{children:n.selectedDeck}),Object(d.jsx)("section",{children:Object(d.jsx)(h,{deck:o})}),Object(d.jsx)("section",{style:{paddingTop:"2rem"},children:Object(d.jsx)(p,{})})]}):Object(d.jsx)("article",{children:"...loading"})};var k=function(){return Object(d.jsx)(a.Provider,{value:s,children:Object(d.jsx)(f,{children:Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(m,{})})})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),S()}},[[14,1,2]]]);
//# sourceMappingURL=main.fa8916d7.chunk.js.map