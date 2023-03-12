(this.webpackJsonpcinema=this.webpackJsonpcinema||[]).push([[0],{174:function(e,t,n){e.exports=n(205)},204:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(42),l=n.n(c),o=n(15),i=n(12),u=n(26),m=n.n(u),s=n(220),b=n(216),p=n(89),d=n(163),E=n(219),f=n(223),O=n(221),j=function(e){var t=e.deleteFilm,n=e.setOpen,a=e.open;return r.a.createElement(E.a,{closeIcon:!0,centered:!1,open:a,onClose:function(){return n(!1)},onOpen:function(){return n(!0)}},r.a.createElement(f.a,{icon:"trash",content:"Delete Film"}),r.a.createElement(E.a.Content,null,r.a.createElement("p",null,"Are you sure you want to delete this film?")),r.a.createElement(E.a.Actions,null,r.a.createElement(O.a,{color:"red",onClick:function(){return n(!1)}},r.a.createElement(p.a,{name:"remove"})," No"),r.a.createElement(O.a,{color:"green",onClick:t},r.a.createElement(p.a,{name:"checkmark"})," Yes")))},D=n(29),v=n(217),h=n(10),y=n.n(h),k=n(14),C=n(142),I=n.n(C),g="https://www.omdbapi.com",w=function(e){return{type:"REMOVE_FILM",payload:e}},T={poster:{label:"Poster URL",name:"Poster"},title:{label:"Title",name:"Title"},director:{label:"Director",name:"Director"},year:{label:"Year",name:"Year"},genre:{label:"Genre",name:"Genre"},runtime:{label:"Runtime",name:"Runtime"}},F=function(e){var t=e.Title,n=e.Director,c=e.Year,l=e.Runtime,u=e.Genre,s=e.Poster,b=e.imdbID,p=e.setOpen,d=e.open,j=Object(o.b)(),h=Object(a.useState)({Title:t,Director:n,Year:c,Runtime:l,Genre:u,Poster:s,imdbID:b}),y=Object(i.a)(h,2),k=y[0],C=y[1],I=Object(a.useState)({}),g=Object(i.a)(I,2),w=g[0],F=g[1],M=function(e){C(Object(D.a)(Object(D.a)({},k),{},{[e.target.name]:e.target.value}))},R=function(){var e=k,t=_(e);m.a.isEmpty(t)&&(b?(console.log(e,"formValues"),j(function(e){return{type:"EDIT_FILM",payload:e}}(e))):j({type:"ADD_FILM",payload:e}),p(!1)),F(_(e))},G=Object(o.c)((function(e){return e.films})),_=function(e){var t={},n=e.Title,a=e.Director,r=e.Year,c=e.Genre,l=e.Runtime;return n||(t.Title="Title cannot be empty"),function(e){var t=m.a.filter(G,(function(e){return e.imdbID!==b}));return m.a.some(t,(function(t){return m.a.toLower(t.Title)===m.a.toLower(e)}))}(n)&&(t.Title="Title already exists"),a||(t.Director='Must specify a director"s name'),r&&4===r.length&&function(e){var t=Date.parse(e);return!isNaN(t)}(r)||(t.Year="Year must be entered with four digits, e.g. 1976"),c||(t.Genre="Must specify a genre"),l||(t.Runtime="Must specify a runtime"),t};return r.a.createElement(E.a,{closeIcon:!0,centered:!1,open:d,onClose:function(){return p(!1)},onOpen:function(){return p(!0)}},r.a.createElement(f.a,{icon:b?"pencil":"add",content:b?"Edit Film":"Add Film"}),r.a.createElement(E.a.Content,null,r.a.createElement(v.a,{onSubmit:R},m.a.map(T,(function(e,t){var n=e.label,a=e.name;return r.a.createElement(v.a.Field,{key:t,control:"input",label:n,name:a,value:k[a],onChange:M,error:w[a]})})))),r.a.createElement(E.a.Actions,null,r.a.createElement(O.a,{color:"red",onClick:function(){return p(!1)}},"Cancel"),r.a.createElement(O.a,{color:"green",onClick:R},b?"Save Changes":"Add Film")))},M=n(6),R=function(e){var t=e.Poster,n=e.Title,c=e.Year,l=e.Runtime,u=e.Genre,m=e.Director,b=e.imdbID,p=Object(o.b)(),E=Object(M.n)(),f=Object(a.useState)(!1),O=Object(i.a)(f,2),D=O[0],v=O[1],h=Object(a.useState)(!1),y=Object(i.a)(h,2),k=y[0],C=y[1],I=function(){p(w(b)),v(!1)};return r.a.createElement(s.a,{onClick:function(){return E("/movie/".concat(b))}},r.a.createElement(d.a,{src:t,alt:n,wrapped:!0}),r.a.createElement(s.a.Content,null,r.a.createElement(s.a.Header,null,n)),r.a.createElement(F,{deleteFilm:I,setOpen:C,open:k,Poster:t,Title:n,Year:c,Runtime:l,Genre:u,Director:m,imdbID:b}),r.a.createElement(j,{deleteFilm:I,setOpen:v,open:D}))};function G(e){for(var t=e.toLowerCase(),n=e.toUpperCase(),a="",r=0;r<t.length;++r)t[r]===n[r]&&""!==t[r].trim()||(a+=e[r]);return a}var _=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(o.c)((function(e){return e.films}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a.Group,{stackable:!0,as:b.a,itemsPerRow:5},m.a.map(l,(function(e){var t=e.Poster,n=e.Title,a=e.imdbID,c=e.Year,l=e.Director,o=e.Genre,i=e.Runtime;return r.a.createElement(R,{key:a,Poster:t,Title:m.a.startCase(m.a.toLower(G(n))),Year:c,Director:l,Runtime:i,Genre:o,imdbID:a})}))),r.a.createElement(p.a,{link:!0,size:"massive",onClick:function(){return c(!0)},name:"add circle",title:"Add new film"}),r.a.createElement(F,{open:n,setOpen:c,Poster:"https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1728&q=80"}))},L=n(218),S=function(){var e=Object(o.b)(),t=Object(M.n)(),n=Object(o.c)((function(e){return e.theme})).darkMode;return r.a.createElement(L.a,{inverted:n},r.a.createElement(L.a.Item,{onClick:function(){return t("/")}},"Cinema"),r.a.createElement(L.a.Item,{title:"Dark/Light Mode"},r.a.createElement(p.a,{name:n?"sun":"moon",onClick:function(){return e({type:"TOGGLE_DARK_MODE"})}})))},Y=n(61),P=function(){var e=Object(o.b)(),t=Object(M.n)(),n=Object(M.p)().id,c=Object(o.c)((function(e){return e.films[n]})),l=c.Poster,u=c.Title,m=c.Year,b=c.Runtime,p=c.Genre,E=c.Director,f=c.imdbID,D=Object(a.useState)(!1),v=Object(i.a)(D,2),h=v[0],y=v[1],k=Object(a.useState)(!1),C=Object(i.a)(k,2),I=C[0],g=C[1];console.log(n,c,"loca");var T=function(){e(w(f)),y(!1),t("/")};return r.a.createElement(s.a,{fluid:!0,centered:!0,style:{width:"80%"}},r.a.createElement(s.a.Content,{style:{cursor:"pointer"},onClick:function(){return t("/")}},"Go Back"),r.a.createElement(d.a,{src:l,centered:!0,alt:u,wrapped:!0}),r.a.createElement(s.a.Content,null,r.a.createElement(s.a.Header,null,u),r.a.createElement(s.a.Description,null,r.a.createElement("p",null,"Director: ",E),r.a.createElement("p",null,"Year: ",m),r.a.createElement("p",null,"Genre: ",p),r.a.createElement("p",null,"Runtime: ",b))),r.a.createElement(s.a.Content,{extra:!0},r.a.createElement("div",{className:"ui two buttons"},r.a.createElement(O.a,{basic:!0,onClick:function(){return y(!0)},color:"red"},r.a.createElement("i",{className:"fas fa-trash"})),r.a.createElement(O.a,{basic:!0,onClick:function(){return g(!0)},color:"green"},r.a.createElement("i",{className:"fas fa-pencil-alt"})))),r.a.createElement(F,{deleteFilm:T,setOpen:g,open:I,Poster:l,Title:u,Year:m,Runtime:b,Genre:p,Director:E,imdbID:f}),r.a.createElement(j,{deleteFilm:T,setOpen:y,open:h}))},A=function(e){var t=e.children,n=Object(o.c)((function(e){return e.films}));return console.log(Object.keys(n).length),Object.keys(n).length?t:r.a.createElement(M.a,{to:{pathname:"/"},replace:!0})},N=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.theme})).darkMode;return Object(a.useEffect)((function(){e(function(){var e=Object(k.a)(y.a.mark((function e(t){var n,a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I()("".concat(g,"/?s=").concat("war","&apikey=").concat("b5677617"));case 2:return n=e.sent.data.Search,a=n.map((function(e){return I()("".concat(g,"/?t=").concat(e.Title,"&apikey=").concat("b5677617"))})),e.next=6,Promise.all(a);case 6:r=e.sent.map((function(e){return e.data})),t({type:"FETCH_FILMS",payload:r});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),r.a.createElement("div",{className:t?"App inverse":"App"},r.a.createElement(Y.a,null,r.a.createElement(S,null),r.a.createElement(M.d,null,r.a.createElement(M.b,{path:"/",element:r.a.createElement(_,null)}),r.a.createElement(M.b,{path:"/movie/:id",element:r.a.createElement(A,null,r.a.createElement(P,null))}))))},x=n(56),H=n(162),V=Object(x.c)({films:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;switch(a){case"FETCH_FILMS":return Object(D.a)(Object(D.a)({},e),m.a.mapKeys(n,"imdbID"));case"REMOVE_FILM":return m.a.omit(e,n);case"EDIT_FILM":return Object(D.a)(Object(D.a)({},e),{},{[n.imdbID]:n});case"ADD_FILM":return Object(D.a)(Object(D.a)({},e),{},{[n.imdbID]:n});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_DARK_MODE":return Object(D.a)(Object(D.a)({},e),{},{darkMode:!e.darkMode});default:return e}}}),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.d,U=Object(x.e)(V,K(Object(x.a)(H.a)));n(203),n(204);l.a.render(r.a.createElement(o.a,{store:U},r.a.createElement(N,null)),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.2ac5fd9f.chunk.js.map