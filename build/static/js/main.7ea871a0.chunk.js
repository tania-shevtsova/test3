(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{39:function(e,t,n){e.exports=n(79)},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(34),l=n.n(c),o=n(6),i=n(7),m={display:"flex",listStyle:"none",padding:"20px 0 20px 0",margin:"0",fontSize:"20px",fontWeight:"500",boxShadow:"0 6px 5px 2px #ccc",marginBottom:"35px"},s={marginRight:"8px",paddingLeft:"20px"},u={color:"palevioletred"},p={textDecoration:"none",color:"#000"},b=function(){return r.a.createElement("ul",{style:m},r.a.createElement("li",{style:s},r.a.createElement(o.c,{to:"/",exact:!0,activeStyle:u,style:p},"Home")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/movies",activeStyle:u,style:p},"Movies")))},d=n(11),f=n(12),h=n(14),E=n(13),v=n(15),y=n(37),g=n(19),x=n(38),j=n.n(x);function O(){var e=Object(y.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]);return O=function(){return e},e}var k=Object(g.css)(O()),w=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(E.a)(t).call(this,e))).state={loading:!0},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sweet-loading"},r.a.createElement(j.a,{css:k,size:60,color:"#123abc",loading:this.state.loading}))}}]),t}(r.a.Component),S=n(18),z=n.n(S),B=n(23),C=n(21),D=n.n(C),F=n(22),I=n.n(F),J="https://api.themoviedb.org/3/trending/all/day?api_key=cf7e1750a0f8b90bb35162b1428fcf90",L=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[]},n.componentDidMount=Object(B.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get(J).then((function(e){n.setState({movies:e.data.results})}));case 2:case"end":return e.stop()}}),e)}))),n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.state.movies;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Trending today"),r.a.createElement("ul",null,t.map((function(t){return r.a.createElement("li",{key:I()()},r.a.createElement(o.b,{to:{pathname:"/movies/".concat(t.id),state:{from:e.props.location,locationLink:e.props.location.pathname}}},t.title,t.name))}))))}}]),t}(a.Component),M=Object(i.g)(L),A=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,95))})),H=Object(a.lazy)((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,94))})),N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(a.Suspense,{fallback:r.a.createElement(w,null)},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0,component:M}),r.a.createElement(i.b,{path:"/movies/:movieId",component:A}),r.a.createElement(i.b,{path:"/movies",component:H}),r.a.createElement(i.a,{to:"/"}))))};l.a.render(r.a.createElement(o.a,null,r.a.createElement(i.b,null,r.a.createElement(N,null))),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.7ea871a0.chunk.js.map