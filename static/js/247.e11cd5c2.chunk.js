"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{877:function(t,n,e){e.d(n,{TP:function(){return s},co:function(){return f},gp:function(){return o},t_:function(){return p},yO:function(){return d}});var r=e(982),c=e(861),a=e(757),u=e.n(a),i=e(388),o=function(){var t=(0,c.Z)(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/movie/top_rated?api_key=de0dccb949912c01edc752d65802c189&language=en-US&page=1",t.next=3,i.Z.get("https://api.themoviedb.org/3/movie/top_rated?api_key=de0dccb949912c01edc752d65802c189&language=en-US&page=1").then((function(t){0!==t.data.results.length&&n((0,r.Z)(t.data.results))})).catch((function(t){console("Not list !")}));case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),s=function(){var t=(0,c.Z)(u().mark((function t(n,e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=de0dccb949912c01edc752d65802c189&language=en-US"),t.next=3,i.Z.get(r).then((function(t){n(t.data)})).catch((function(t){n({})}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),p=function(){var t=(0,c.Z)(u().mark((function t(n,e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=de0dccb949912c01edc752d65802c189&language=en-US&page=1"),t.next=3,i.Z.get(r).then((function(t){n(t.data.results)})).catch((function(t){n([])}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),d=function(){var t=(0,c.Z)(u().mark((function t(n,e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=de0dccb949912c01edc752d65802c189&language=en-US"),t.next=3,i.Z.get(r).then((function(t){n(t.data)})).catch((function(t){n({})}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),f=function(){var t=(0,c.Z)(u().mark((function t(n,e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/search/movie?api_key=de0dccb949912c01edc752d65802c189&query=".concat(e,"&page=1&language=en-US"),t.next=3,i.Z.get(r).then((function(t){n(t.data.results)})).catch((function(t){n([])}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()},247:function(t,n,e){e.r(n),e.d(n,{StyledImg:function(){return g},StyledLi:function(){return h},Text:function(){return l}});var r,c,a,u=e(885),i=e(168),o=e(791),s=e(689),p=e(877),d=e(444),f=e(184),h=d.ZP.li(r||(r=(0,i.Z)(["\n    list-style-type: none;\n"]))),g=d.ZP.img(c||(c=(0,i.Z)(["\n    width: 120px;\n    margin-left:50px;\n"]))),l=d.ZP.p(a||(a=(0,i.Z)(["\n    margin-left: 30px;\n    font-size: 14px;\n"])));n.default=function(){var t=(0,s.UO)().moviesId,n=(0,o.useState)({}),e=(0,u.Z)(n,2),r=e[0],c=e[1];if((0,o.useEffect)((function(){(0,p.yO)(c,t)}),[t]),r.hasOwnProperty("cast")){var a=r.cast;return(0,f.jsxs)(f.Fragment,{children:[0===r.length?(0,f.jsx)("h3",{children:"No casts"}):a.map((function(t){var n=t.profile_path,e=t.original_name,r=t.character;return(0,f.jsxs)(h,{children:[(0,f.jsx)(g,{loading:"lazy",src:"https://image.tmdb.org/t/p/w500".concat(n),alt:"actor"}),",",(0,f.jsx)(l,{children:e}),(0,f.jsxs)(l,{children:["Character: ",r]})]},e)}))," "]})}}}}]);
//# sourceMappingURL=247.e11cd5c2.chunk.js.map