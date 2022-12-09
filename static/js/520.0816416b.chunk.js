"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[520],{520:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,c,a,i=e(885),u=e(791),o=e(731),s=e(689),p=e(168),f=e(444),d=e(184),h=f.ZP.form(r||(r=(0,p.Z)(["\n  display: flex;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  width: 400px;\n"]))),l=f.ZP.button(c||(c=(0,p.Z)(["\n  width: 70px;\n  height: 35px;\n  font-size: 14px;\n  cursor: pointer;\n  &:hover {\n    opacity: 1;\n  }\n"]))),v=f.ZP.input(a||(a=(0,p.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 14px;\n  outline: none;\n  margin-right: 5px;\n&::placeholder {\n  font: inherit;\n  font-size: 14px;\n}\n"]))),g=function(){var n=(0,o.lr)(),t=(0,i.Z)(n,2),e=t[0],r=t[1],c=(0,u.useState)((function(){var n;return null!==(n=e.get("query"))&&void 0!==n?n:""})),a=(0,i.Z)(c,2),s=a[0],p=a[1];return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(h,{onSubmit:function(n){n.preventDefault(),""!==s.trim()&&(r({query:s}),p(""))},children:[(0,d.jsx)(v,{value:s,name:"search",onChange:function(n){var t=n.currentTarget.value;p(t.trim())},type:"text",autocomplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,d.jsx)(l,{type:"submit",children:"Search"})]})})},m=e(368),x=e(877),Z=function(){var n,t=(0,u.useState)([]),e=(0,i.Z)(t,2),r=e[0],c=e[1],a=(0,o.lr)(),p=null!==(n=(0,i.Z)(a,1)[0].get("query"))&&void 0!==n?n:"",f=(0,s.TH)();return(0,u.useEffect)((function(){p&&(0,x.co)(c,p)}),[p]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g,{}),r.length>0&&(0,d.jsx)(m.Z,{moviesList:r,location:f})]})}},877:function(n,t,e){e.d(t,{TP:function(){return s},co:function(){return d},gp:function(){return o},t_:function(){return p},yO:function(){return f}});var r=e(982),c=e(861),a=e(757),i=e.n(a),u=e(388),o=function(){var n=(0,c.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://api.themoviedb.org/3/movie/top_rated?api_key=de0dccb949912c01edc752d65802c189&language=en-US&page=1",n.next=3,u.Z.get("https://api.themoviedb.org/3/movie/top_rated?api_key=de0dccb949912c01edc752d65802c189&language=en-US&page=1").then((function(n){0!==n.data.results.length&&t((0,r.Z)(n.data.results))})).catch((function(n){console("Not list !")}));case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,c.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=de0dccb949912c01edc752d65802c189&language=en-US"),n.next=3,u.Z.get(r).then((function(n){t(n.data)})).catch((function(n){t({})}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,c.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=de0dccb949912c01edc752d65802c189&language=en-US&page=1"),n.next=3,u.Z.get(r).then((function(n){t(n.data.results)})).catch((function(n){t([])}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,c.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=de0dccb949912c01edc752d65802c189&language=en-US"),n.next=3,u.Z.get(r).then((function(n){t(n.data)})).catch((function(n){t({})}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),d=function(){var n=(0,c.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://api.themoviedb.org/3/search/movie?api_key=de0dccb949912c01edc752d65802c189&query=".concat(e,"&page=1&language=en-US"),n.next=3,u.Z.get(r).then((function(n){t(n.data.results)})).catch((function(n){t([])}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()},368:function(n,t,e){var r,c=e(168),a=(e(791),e(444)),i=e(731),u=e(184),o=a.ZP.li(r||(r=(0,c.Z)(["\n    padding: 10px;\n    cursor: pointer;\n"])));t.Z=function(n){var t=n.moviesList,e=n.location;if(0!==t.length)return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{children:t.map((function(n){return(0,u.jsx)(o,{children:(0,u.jsx)(i.OL,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})})}}}]);
//# sourceMappingURL=520.0816416b.chunk.js.map