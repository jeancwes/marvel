(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(24),s=c.n(a),r=(c(32),c(26)),o=c(2),l=c(5),j=(c(33),c(0));function d(e){var t=e.comic;return Object(j.jsx)("section",{children:Object(j.jsxs)("table",{className:"table table-striped",children:[Object(j.jsx)("caption",{children:"Detalhes do Quadrinho"}),Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Id"}),Object(j.jsx)("td",{children:t.id})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"P\xe1ginas"}),Object(j.jsx)("td",{children:t.pageCount})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Descri\xe7\xe3o"}),Object(j.jsx)("td",{children:t.description})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Formato"}),Object(j.jsx)("td",{children:t.format})]})]})]})})}function b(e){var t=e.comic;return Object(j.jsxs)(j.Fragment,{children:[t&&Object(j.jsxs)("section",{className:"comic",children:[Object(j.jsx)("header",{className:"comic-header",children:Object(j.jsx)("h2",{children:t.title})}),Object(j.jsx)("section",{className:"comic-thumbnail",children:Object(j.jsx)("img",{className:"comic-thumbnail-image",src:"".concat(t.thumbnail.path,".").concat(t.thumbnail.extension),alt:"thumbnail"})}),Object(j.jsx)("section",{className:"comic-info",children:Object(j.jsx)(d,{comic:t})})]}),";"]})}c(35);function h(e){var t=e.opened,c=e.onClose,n=e.header,i=e.content,a=e.footer;return Object(j.jsx)(j.Fragment,{children:t&&Object(j.jsx)("div",{className:"dialog-backdrop",children:Object(j.jsxs)("section",{className:"dialog",children:[Object(j.jsxs)("header",{className:"dialog-header",children:[n,Object(j.jsx)("button",{type:"button",className:"link float-right",onClick:function(){return c(!t)},children:"Fechar Di\xe1logo"})]}),Object(j.jsx)("section",{className:"dialog-content",children:i}),Object(j.jsx)("footer",{className:"dialog-footer",children:a})]})})})}var u=c(25),m=c.n(u),O="service_qeaa29d",x="user_vcnmCJvbZ6ioKRN5GOHbb",f="template_a7s8pw7";function p(e){var t=e.comics,c=e.selectedComics,i=Object(n.useState)(""),a=Object(l.a)(i,2),s=a[0],r=a[1],o=Object(n.useState)(""),d=Object(l.a)(o,2),b=d[0],h=d[1],u=Object(n.useState)(""),p=Object(l.a)(u,2),g=p[0],v=p[1],N=Object(n.useState)(!1),C=Object(l.a)(N,2),S=C[0],y=C[1];Object(n.useEffect)((function(){return s&&b&&c.some((function(e){return!0===e}))?y(!0):y(!1)}),[b,s,c]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{className:"email-form",onSubmit:function(e){return function(e){e.preventDefault(),v(t.reduce((function(e,t,n){return!1===c[n]?e:e+"\n          <h2>".concat(t.title,'</h2> <br>\n          <img src="').concat(t.thumbnail.path,".").concat(t.thumbnail.extension,'" \n            width="200" height="250" alt="image" /> <br>\n          <p>').concat(t.description,"</p> <br>\n        ")}),""));var n={to_name:s,to_email:b,from_name:"Marvel Assessment",message:'\n        <!DOCTYPE html>\n        <html lang="en">\n        <head>\n            <meta charset="UTF-8">\n            <meta http-equiv="X-UA-Compatible" content="IE=edge">\n            <meta name="viewport" content="width=device-width, initial-scale=1.0">\n            <title>Marvel Assessment</title>\n        </head>\n            <body>\n              '.concat(g,"\n            </body>\n        </html>\n      ")};m.a.send(O,f,n,x).then((function(e){alert("Email Enviado",e.text)}),(function(e){alert("Ocorreu um Erro",e.text)}))}(e)},children:[Object(j.jsx)("h2",{children:"Enviar Quadrinhos por Email"}),Object(j.jsx)("input",{type:"text",placeholder:"Informe seu Nome",onChange:function(e){return r(e.target.value)}}),Object(j.jsx)("input",{type:"email",placeholder:"Informe seu Email",onChange:function(e){return h(e.target.value)}}),Object(j.jsx)("button",{type:"submit",disabled:!S,children:"Enviar"})]})})}function g(e){var t=e.comics,c=Object(n.useState)(!1),i=Object(l.a)(c,2),a=i[0],s=i[1],r=Object(n.useState)(),o=Object(l.a)(r,2),d=o[0],u=o[1],m=Object(n.useState)([]),O=Object(l.a)(m,2),x=O[0],f=O[1];Object(n.useEffect)((function(){f(t.map((function(e){return!1})))}),[t]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"table-responsive",children:[t&&t.length>0&&Object(j.jsxs)("table",{className:"table table-striped",role:"table",children:[Object(j.jsxs)("caption",{role:"caption",children:[t.length," Quadrinhos"]}),Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{role:"row",children:[Object(j.jsx)("th",{}),Object(j.jsx)("th",{children:"Id"}),Object(j.jsx)("th",{children:"T\xedtulo"}),Object(j.jsx)("th",{children:"P\xe1ginas"}),Object(j.jsx)("th",{children:"A\xe7\xf5es"})]})}),Object(j.jsx)("tbody",{children:t&&t.map((function(e,t){return Object(j.jsxs)("tr",{role:"row",children:[Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"checkbox",onChange:function(){return e=t,void f(x.map((function(t,c){return e===c?!t:t})));var e},name:"comic-".concat(e.id),id:"comic-".concat(e.id),checked:x[t]})}),Object(j.jsx)("td",{children:e.id}),Object(j.jsx)("td",{children:e.title}),Object(j.jsx)("td",{children:e.pageCount}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{type:"button",className:"link",onClick:function(){u(e),s(!a)},children:"Ver Quadrinho"})})]},e.id)}))})]}),t&&0===t.length&&Object(j.jsx)("table",{className:"table table-striped",role:"table",children:Object(j.jsx)("caption",{role:"caption",children:"Nenhum Quadrinho"})})]}),Object(j.jsx)(p,{comics:t,selectedComics:x}),Object(j.jsx)(h,{opened:a,onClose:function(){return s(!a)},content:Object(j.jsx)(b,{comic:d})})]})}var v=c(38);function N(e){var t=e.onSearch,c=Object(n.useState)(""),i=Object(l.a)(c,2),a=i[0],s=i[1];return Object(n.useEffect)((function(){if(a){var e=setTimeout((function(){v.get("https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=".concat(a,"&apikey=620ef48dd36a7a49cdb0868d5363b2b4")).then((function(e){console.log(e),t(e.data.data.results)})).catch((function(e){console.log(e)}))}),800);return function(){return clearTimeout(e)}}}),[t,a]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{className:"search-form",children:[Object(j.jsx)("h2",{children:"Buscar Quadrinho"}),Object(j.jsx)("input",{type:"text",className:"search-input",onChange:function(e){return s(e.currentTarget.value)},value:a,placeholder:"Digite para Buscar"})]})})}function C(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],i=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("header",{className:"comics-header",children:Object(j.jsx)("h1",{children:"Marvel"})}),Object(j.jsx)("main",{className:"comics-main",children:Object(j.jsxs)("section",{children:[Object(j.jsx)(N,{onSearch:i}),Object(j.jsx)(g,{comics:c})]})}),Object(j.jsx)("footer",{className:"comics-footer"})]})}var S=function(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{path:"/comics",children:Object(j.jsx)(C,{})}),Object(j.jsx)(o.a,{exact:!0,from:"/",to:"/comics"})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),y()}},[[62,1,2]]]);
//# sourceMappingURL=main.1fc7228e.chunk.js.map