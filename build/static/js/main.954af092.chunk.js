(this["webpackJsonpmovie-on-project"]=this["webpackJsonpmovie-on-project"]||[]).push([[0],{431:function(e,t,n){},432:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(45),r=n.n(i),s=n(27),o=n(14),l=n(15),u=n(36),b=n(18),j=n(58),d=function(){j.a.initialize([{trackingId:"UA-154720048-2",gaOptions:{name:"ga3"}},{trackingId:"G-KHZYD75TV9",gaOptions:{name:"ga4"}}],{debug:!1,alwaysSendToDefaultTracker:!1}),console.log("GA init")},m=function(e,t,n){if(console.log("gaEvent:",e,t),!e||!t)return console.warn("category and action is required");if(n){var a=n.value,c=n.label;j.a.event({category:e,action:t,value:a,label:c})}else j.a.event({category:e,action:t})},p=n(3),O=function(){return Object(p.jsxs)("div",{className:"home-banner",onClick:function(){return m("home","Click banner image")},children:[Object(p.jsxs)("div",{className:"info",children:[Object(p.jsx)("h3",{children:"\u6c99\u4e18 Dune"}),Object(p.jsx)("p",{children:"\u8b1b\u8ff0\u4e00\u500b\u795e\u7955\u53c8\u6027\u683c\u5f37\u70c8\u7684\u82f1\u96c4\u4e4b\u5fc3\u8def\u6b77\u7a0b\uff0c\u672c\u7247\u8b1b\u8ff0\u4fdd\u7f85\u4e9e\u5d14\u8fea\u7684\u6545\u4e8b\uff0c\u4ed6\u662f\u4e00\u500b\u8070\u660e\u53c8\u5bcc\u6709\u5929\u8ce6\u7684\u5e74\u8f15\u4eba\uff0c\u80a9\u8ca0\u8d85\u8d8a\u81ea\u5df1\u7406\u89e3\u7684\u5049\u5927\u5929\u547d\uff0c\u4e14\u5fc5\u9808\u9060\u884c\u81f3\u5b87\u5b99\u4e2d\u6700\u5371\u96aa\u7684\u884c\u661f\uff0c\u4ee5\u78ba\u4fdd\u4ed6\u5bb6\u4eba\u53ca\u65cf\u4eba\u672a\u4f86\u7684\u5ef6\u7e8c\u3002\u6575\u5c0d\u52e2\u529b\u70ba\u6436\u596a\u552f\u6709\u6b64\u884c\u661f\u624d\u51fa\u7522\u7684\u73cd\u8cb4\u8cc7\u6e90\u5927\u6253\u51fa\u624b\uff0c\u800c\u9019\u4e5f\u662f\u4eba\u985e\u6700\u73cd\u8996\u7684\u8cc7\u6e90\uff0c\u4e00\u7a2e\u80fd\u89e3\u9396\u4eba\u985e\u5049\u5927\u6f5b\u80fd\u7684\u7269\u8cea\uff0c\u552f\u6709\u80fd\u6230\u52dd\u81ea\u5df1\u6050\u61fc\u7684\u4eba\u624d\u80fd\u5b58\u6d3b\u3002"}),Object(p.jsx)("div",{className:"buttons",children:Object(p.jsx)(u.b,{to:"/browse",onClick:function(){return m("home","Click to browse movies",{label:"text-button"})},children:"\u66f4\u591a\u597d\u7247"})})]}),Object(p.jsx)("div",{className:"home-banner-bottom"})]})},v=c.a.memo(O),h=n(200),f=n.n(h),g=function(e){var t=e.children,n=document.body;return Object(i.createPortal)(t,n)},x=function(e){var t=e.children,n=Object(a.useRef)(null),c={closeModal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300,t=arguments.length>1?arguments[1]:void 0,a=function(){n.current&&n.current.remove(),Object(l.isFunction)(t)&&t()};setTimeout(a,e)}};return Object(p.jsx)(g,{children:Object(p.jsx)("div",{ref:n,children:Object(a.cloneElement)(t,Object(s.a)(Object(s.a)({},t.props),c))})})},w=function(e){var t=Object(p.jsx)(x,{children:e}),n=document.createElement("div");Object(i.render)(t,n)};function y(e){var t=document.querySelectorAll("".concat(e||".modal"));t&&t.forEach((function(e){e.classList.add("hidden"),setTimeout((function(){return e.remove()}),100)}))}var N=function(e){var t=e.data,n=Object(a.useState)(!1),c=Object(o.a)(n,2),i=c[0],r=c[1],s=Object(a.useRef)(null),u=Object(a.useCallback)((function(){y(),r(!0);var e=window.location.pathname.replace("/","");m(Object(l.isEmpty)(e)?"home":e,"Hover a movie card",{value:t.internal})}),[]);return Object(a.useEffect)((function(){if(i){var e=s.current.getBoundingClientRect();w(Object(p.jsx)(G,{data:t,clintRect:e,setVisible:r}))}}),[i]),Object(p.jsx)("div",{onMouseOut:function(){return r(!1)},onMouseEnter:u,className:"movie-card",ref:s,children:Object(p.jsx)("img",{src:t.img,onMouseEnter:u,alt:""})})},k=c.a.memo(N),_=n(2),C=n.n(_),S=n(5),E=n(201),T=n.n(E).a.create({baseURL:"https://hike-together.club",headers:{"Content-Type":"application/json"},withCredentials:!1,validateStatus:function(e){return e>=200&&e<=500}});T.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),T.interceptors.response.use((function(e){if(200!==e.status){var t=e.data.message||e.data.msg;console.error("url:".concat(e.request.responseURL," error"),"errorMessage:".concat(t),"status code:".concat(e.status))}return e}),(function(e){return console.error(e),e.response&&console.error(e.response.request.responseURL,e),Promise.reject(e)}));var I=function(e){return T.get("/api/movie/",{params:e})},L=function(e){return T.get("api/detail/".concat(e))},M=function(e){return T.get("api/movie/recommend?&id=".concat(e))},A=function(e){return T.get("api/search/?query=".concat(e))},R=function(e){var t=e.data,n=t.date_in_theater,a=t.main_taiwan_name,c=t.internal;return Object(p.jsxs)("div",{className:"recommend-card overlay",onClick:function(){y(),setTimeout((function(){w(Object(p.jsx)(U,{id:c}))}),500),m("movieList","click to see movie detail",{value:c})},children:[Object(p.jsx)("div",{className:"recommend-card-img",children:Object(p.jsx)("img",{src:t.img})}),Object(p.jsxs)("div",{className:"recommend-card-content",children:[Object(p.jsx)("h6",{children:n.slice(0,4)}),Object(p.jsx)("p",{children:a})]})]})},D=c.a.memo(R),B={Comedy:{id:1,name:"\u559c\u5287",type:"comedy"},Fantasy:{id:2,name:"\u5947\u5e7b",type:"fantasy"},Romance:{id:3,name:"\u611b\u60c5",type:"romance"},Drama:{id:4,name:"\u5287\u60c5",type:"drama"},Action:{id:5,name:"\u52d5\u4f5c",type:"action"},Suspense:{id:6,name:"\u61f8\u7591",type:"suspense"},War:{id:7,name:"\u6230\u722d",type:"war"},Adventure:{id:8,name:"\u5192\u96aa",type:"adventure"},Mystery:{id:11,name:"\u63a8\u7406",type:"mystery"},Horror:{id:12,name:"\u9a5a\u609a\u6050\u6016",type:"horror"},"Sci-Fi":{id:13,name:"\u79d1\u5e7b",type:"Science fiction"},Crime:{id:14,name:"\u72af\u7f6a",type:"crime"},Historical:{id:16,name:"\u6b77\u53f2",type:"historical"},Musical:{id:17,name:"\u6b4c\u821e",type:"musical"},Sports:{id:18,name:"\u9ad4\u80b2",type:"sports"},Biography:{name:"\u50b3\u8a18",type:"biography"}},z=[{name:"\u71b1\u9580\u53c3\u8003",value:"rating_total_amount"},{name:"IMDb",value:"imdb_rating",color:"#DBA506"},{name:"\u8c46\u74e3",value:"douban_rating",color:"#2e963d"},{name:" \u721b\u756a\u8304",value:"audience_rating",color:"#FA320A"}],P=[{value:"imdb_rating",label:"IMDb",children:[{value:"imdb_rating=9",label:"9 \u5206\u4ee5\u4e0a"},{value:"imdb_rating=8",label:"8 \u5206\u4ee5\u4e0a"},{value:"imdb_rating=7",label:"7 \u5206\u4ee5\u4e0a"},{value:"imdb_rating=6",label:"6 \u5206\u4ee5\u4e0a"},{value:"imdb_rating=5",label:"5 \u5206\u4ee5\u4e0a"},{value:"imdb_rating=4",label:"4 \u5206\u4ee5\u4e0a"},{value:"imdb_rating=3",label:"3 \u5206\u4ee5\u4e0a"}]},{value:"douban_rating",label:"\u8c46\u74e3",children:[{value:"douban_rating=9",label:"9 \u5206\u4ee5\u4e0a"},{value:"douban_rating=8",label:"8 \u5206\u4ee5\u4e0a"},{value:"douban_rating=7",label:"7 \u5206\u4ee5\u4e0a"},{value:"douban_rating=6",label:"6 \u5206\u4ee5\u4e0a"},{value:"douban_rating=5",label:"5 \u5206\u4ee5\u4e0a"},{value:"douban_rating=4",label:"4 \u5206\u4ee5\u4e0a"},{value:"douban_rating=3",label:"3 \u5206\u4ee5\u4e0a"}]},{value:"tomato_rating",label:"\u721b\u756a\u8304",children:[{value:"tomato_rating=9",label:"90 \u5206\u4ee5\u4e0a"},{value:"tomato_rating=8",label:"80 \u5206\u4ee5\u4e0a"},{value:"tomato_rating=7",label:"70 \u5206\u4ee5\u4e0a"},{value:"tomato_rating=6",label:"60 \u5206\u4ee5\u4e0a"},{value:"tomato_rating=5",label:"50 \u5206\u4ee5\u4e0a"},{value:"tomato_rating=4",label:"40 \u5206\u4ee5\u4e0a"},{value:"tomato_rating=3",label:"30 \u5206\u4ee5\u4e0a"}]}],F=function(e){var t=e.split(","),n="";return t.forEach((function(e,t){B[e]&&(n+=(0!==t?"\u3001":"")+B[e].name)})),n},H=function(e){var t=e.id,n=e.closeModal,c=Object(a.useState)(null),i=Object(o.a)(c,2),r=i[0],s=i[1],u=Object(a.useState)(null),b=Object(o.a)(u,2),j=b[0],d=b[1],O=Object(a.useState)({}),v=Object(o.a)(O,2),h=v[0],f=v[1],g=Object(a.useState)([]),x=Object(o.a)(g,2),w=x[0],y=x[1],N=Object(a.useRef)(null),k=function(){if(N.current){N.current.classList.add("disappear");var e=setTimeout((function(){return n()}),500);d(e)}m("movieDetail","click to close movie detail",{value:t})},_=function(e){var n=h.rotten_tomato_id,a=h.imdb_id,c=h.douban_id;switch(m("movieDetail","click movie-ranking website",{value:t,label:e}),e){case"imdb":return window.open("https://www.imdb.com/title/".concat(a),"_blank");case"douban":return window.open("https://movie.douban.com/subject/".concat(c),"_blank");case"tomatoes":return window.open("https://www.rottentomatoes.com/m/".concat(n),"_blank")}},E=Object(a.useCallback)(Object(S.a)(C.a.mark((function e(){var a,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t);case 2:if(200===(a=e.sent).status){e.next=5;break}return e.abrupt("return",n());case 5:f(a.data[0]),c=setTimeout((function(){N.current.classList.remove("disappear")}),500),s(c),window.scrollTo({top:0,behavior:"smooth"});case 9:case"end":return e.stop()}}),e)}))),[]),T=function(){var e=Object(S.a)(C.a.mark((function e(){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(t);case 2:if(200===(n=e.sent).status){e.next=5;break}return e.abrupt("return");case 5:y(n.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return E(),T(),function(){clearTimeout(r),clearTimeout(j)}}),[]),Object(p.jsxs)("div",{className:"modal movie-detail-container",children:[Object(p.jsx)("div",{onClick:k,className:"black-background"}),!Object(l.isEmpty)(h)&&Object(p.jsxs)("div",{className:"movie-detail disappear",ref:N,children:[Object(p.jsxs)("div",{className:"movie-detail-top",children:[Object(p.jsx)("button",{className:"btn-close",onClick:k,children:Object(p.jsx)("svg",{viewBox:"0 0 24 24","data-uia":"previewModal-closebtn",role:"button","aria-label":"close",tabIndex:"0",children:Object(p.jsx)("path",{d:"M12 10.586l7.293-7.293 1.414 1.414L13.414 12l7.293 7.293-1.414 1.414L12 13.414l-7.293 7.293-1.414-1.414L10.586 12 3.293 4.707l1.414-1.414L12 10.586z",fill:"currentColor"})})}),Object(l.isEmpty)(h.video_id)?Object(p.jsx)("img",{src:h.img}):Object(p.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(h.video_id,"?rel=0&autoplay=1&mute=1&enablejsapi=1"),title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}),Object(p.jsx)("div",{className:"background-gradient"}),Object(p.jsxs)("div",{className:"info",children:[Object(p.jsx)("h3",{children:h.main_taiwan_name}),Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("div",{className:"button plus",onClick:function(){m("movieDetail","click to like movie",{value:t})},children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",children:Object(p.jsx)("path",{d:"M32 16v32m16-16H16"})})}),Object(p.jsx)("div",{className:"button play",onClick:function(){m("movieDetail","click to collect movie",{value:t})},children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",children:Object(p.jsx)("path",{d:"M54 35h2a4 4 0 1 0 0-8H34a81 81 0 0 0 2-18 4 4 0 0 0-8 0s-4 22-18 22H4v24h10c4 0 12 4 16 4h20a4 4 0 0 0 0-8h2a4 4 0 0 0 0-8h2a4 4 0 0 0 0-8"})})})]})]})]}),Object(p.jsxs)("div",{className:"movie-detail-bottom",children:[Object(p.jsxs)("div",{className:"left-row",children:[Object(p.jsx)("p",{className:"preference",children:"XX% \u9069\u5408\u59b3"}),Object(p.jsx)("p",{className:"year",children:h.date_in_theater?h.date_in_theater.slice(0,4):""}),h.chinese_description?h.chinese_description.trim().split("\u3002").map((function(e,t){return e.length?Object(p.jsx)("article",{children:"".concat(e,"\u3002")},t):null})):Object(p.jsx)("article",{})]}),Object(p.jsxs)("div",{className:"right-row",children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:"\u5c0e\u6f14\uff1a"}),h.director_list||""]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:"\u6f14\u54e1\uff1a"}),h.actor_list.replaceAll(",","\u3001")]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:"\u985e\u578b\uff1a"}),F(h.feature_list)]}),Object(p.jsxs)("div",{className:"buttons",children:[h.rating&&Object(p.jsxs)("div",{className:"icon-button-wrap",onClick:function(){return _("imdb")},children:[Object(p.jsx)("div",{className:"button imdb"}),Object(p.jsx)("p",{className:"score",children:"".concat(h.rating,"\uff08\u5171 ").concat(h.rating_count," \u8a55\u5206\uff09")})]}),h.avg_rating&&Object(p.jsxs)("div",{className:"icon-button-wrap",onClick:function(){return _("douban")},children:[Object(p.jsx)("div",{className:"button douban"}),Object(p.jsx)("p",{className:"score",children:"".concat(h.avg_rating,"\uff08\u5171 ").concat(h.total_rating_amount," \u8a55\u5206\uff09")})]}),!Object(l.isEmpty)(h.audience_rating)&&Object(p.jsxs)("div",{className:"icon-button-wrap",onClick:function(){return _("tomatoes")},children:[Object(p.jsx)("div",{className:"button tomatoes"}),Object(p.jsx)("p",{className:"score",children:"".concat(h.audience_rating," \u89c0\u773e\u8a55\u5206\uff08\u5171 ").concat(h.audience_rating_amount," \u8a55\u5206\uff09")})]}),!Object(l.isEmpty)(h.tomator_rating)&&Object(p.jsxs)("div",{className:"icon-button-wrap",onClick:function(){return _("tomatoes")},children:[Object(p.jsx)("div",{className:"button tomatoes"}),Object(p.jsx)("p",{className:"score",children:"".concat(h.tomator_rating," \u5f71\u8a55\u8a55\u5206\uff08\u5171 ").concat(h.tomator_rating_amount," \u8a55\u5206\uff09")})]})]})]})]}),w&&Object(p.jsxs)("div",{className:"movie-detail-recommend",children:[Object(p.jsx)("h4",{children:"\u985e\u4f3c\u5f71\u7247"}),Object(p.jsx)("div",{className:"list",children:w.map((function(e,t){return t>8?null:Object(p.jsx)(D,{data:e},e.id)}))})]})]})]})},U=c.a.memo(H),Y=c.a.memo((function(e){var t=e.type,n=e.id,c=e.rating,i=Object(a.useCallback)((function(){var e=window.location.pathname.replace("/","");m(Object(l.isEmpty)(e)?"home":e,"Click movie-ranking type",{value:n,label:t})}),[]);return Object(p.jsxs)("div",{className:"icon-button-wrap",onClick:i,children:[Object(p.jsx)("div",{className:"button ".concat(t)}),Object(p.jsx)("p",{className:"score",children:c})]})})),V=function(e){var t=e.data,n=e.clintRect,c=e.closeModal,i=e.setVisible,r=Object(a.useState)(null),s=Object(o.a)(r,2),u=s[0],b=s[1],j=Object(a.useState)(null),d=Object(o.a)(j,2),O=d[0],v=d[1],h=Object(a.useRef)(null),f=function(e){var t=e.width,n=e.height,a=e.top,c=e.left,i=window.screen,r=i.availWidth,s=i.availHeight,o=1.7*t>350?350:1.7*t,l=1.08*o,u=a-(l-n)/2,b=c-(o-t)/2;return u<60&&(u=60),l+u>s&&(u=s-l),c+o>r&&(b=.96*r-o),c-10<=.04*r&&(b=.04*r),{position:{top:u,left:b},size:{width:o,height:"auto"}}}(n),g=f.position,x=f.size;Object(a.useEffect)((function(){var e=setTimeout((function(){h.current.classList.remove("disappear")}),300);return b(e),function(){clearTimeout(u),clearTimeout(O)}}),[]);t.id;var y=t.internal,N=t.main_taiwan_name,k=t.main_original_name,_=t.imdb_rating,C=t.douban_rating,S=t.tomator_rating,E=t.img,T=t.video_id;return Object(p.jsx)("div",{className:"modal floating-card-wrapper",style:g,children:Object(p.jsx)("div",{className:"floating-card disappear",onMouseLeave:function(){if(h){h.current.classList.add("disappear");var e=setTimeout((function(){return c()}),500);v(e)}i(!1)},style:x,ref:h,children:Object(p.jsxs)("div",{className:"movie-card-info",children:[Object(l.isEmpty)(T)?Object(p.jsx)("img",{src:E}):Object(p.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(T,"?rel=0&autoplay=1&mute=1&enablejsapi=1"),title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}),Object(p.jsxs)("div",{className:"info-content",children:[Object(p.jsx)("div",{className:"content-top",children:Object(p.jsxs)("h4",{children:["".concat(N,"  "),Object(p.jsx)("span",{children:k})]})}),Object(p.jsx)("div",{className:"tags"}),Object(p.jsxs)("div",{className:"buttons",children:[!Object(l.isEmpty)(_)&&Object(p.jsx)(Y,{type:"imdb",id:y,rating:_}),!Object(l.isEmpty)(C)&&Object(p.jsx)(Y,{type:"douban",id:y,rating:C}),!Object(l.isEmpty)(S)&&Object(p.jsx)(Y,{type:"tomatoes",id:y,rating:S}),Object(p.jsx)("div",{className:"button play",onClick:function(){return function(){var e=t.internal,n=window.location.pathname.replace("/","");m(Object(l.isEmpty)(n)?"home":n,"Click to see movie detail",{value:e}),w(Object(p.jsx)(U,{id:e}))}()},children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",children:Object(p.jsx)("path",{d:"M6 2l52 30L6 62V2z"})})})]})]})]})})})},G=c.a.memo(V),q=[{breakpoint:1400,settings:{slidesToShow:8,slidesToScroll:8,infinite:!0}},{breakpoint:1200,settings:{slidesToShow:6,slidesToScroll:6,infinite:!0}},{breakpoint:992,settings:{slidesToShow:6,slidesToScroll:6,infinite:!0}},{breakpoint:768,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0}},{breakpoint:576,settings:{slidesToShow:4,slidesToScroll:4}}],K=c.a.memo((function(e){var t=e.title,n=e.movies,c=void 0===n?[]:n,i=Object(a.useRef)(null),r={dots:!1,infinite:!0,speed:500,slidesToShow:7,slidesToScroll:7,initialSlide:0,responsive:q,onSwipe:function(){return m("movieList","swipe a movie list")}},o=function(e){var n,a;y(),m("movieList","slide to ".concat(e," list"),{value:t}),"previous"===e?null===(n=i.current)||void 0===n||n.slickPrev():null===(a=i.current)||void 0===a||a.slickNext()};return Object(p.jsx)("div",{className:"movie-list-wrapper",children:Object(l.isEmpty)(c)?Object(p.jsx)("div",{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u.b,{className:"movie-list-title",to:"/",children:t}),Object(p.jsx)("div",{className:"movie-list",children:Object(p.jsxs)("div",{className:"slider-container",children:[Object(p.jsx)("button",{className:"btn-previous",onClick:function(){return o("previous")}}),Object(p.jsx)(f.a,Object(s.a)(Object(s.a)({},r),{},{ref:i,children:c.map((function(e){return Object(p.jsx)(k,{data:e},e.main_taiwan_name)}))})),Object(p.jsx)("button",{className:"btn-next",onClick:function(){return o("next")}})]})})]})})}));function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)([]),s=Object(o.a)(r,2),u=s[0],b=s[1];e.hasOwnProperty("start")||(e.start=0),e.hasOwnProperty("sort")||(e.sort="rating_total_amount");var j=function(){var t=Object(S.a)(C.a.mark((function t(){var n,a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(!0),t.next=3,I(e);case 3:if(200===(n=t.sent).status){t.next=6;break}return t.abrupt("return",console.log(n));case 6:if(a=n.data,Object(l.isArray)(a)){t.next=9;break}return t.abrupt("return");case 9:b(a),i(!1);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){j()}),[]),[u,c]}var Z=function(e){var t=e.children,n=e.style,c=e.className;return Object(a.useEffect)((function(){window.GA_INITIALIZED||(d(),window.GA_INITIALIZED=!0),function(){var e=window.location.pathname;console.log("logPageView",e),j.a.set({page:e}),j.a.pageview(e)}(),y()}),[]),Object(p.jsx)("div",{style:n,className:"layout ".concat(c),children:t})},X=c.a.memo(Z),J=function(){var e=W(),t=Object(o.a)(e,2),n=t[0],a=t[1],c=W({feature:B.Romance.id}),i=Object(o.a)(c,1)[0],r=W({feature:B.Mystery.id}),s=Object(o.a)(r,1)[0],l=W({feature:B.Horror.id}),u=Object(o.a)(l,1)[0],b=W({feature:B.Comedy.id}),j=Object(o.a)(b,1)[0],d=W({feature:B["Sci-Fi"].id}),m=Object(o.a)(d,1)[0];return Object(p.jsxs)(X,{className:"".concat(a&&"loading"),children:[Object(p.jsx)(v,{}),Object(p.jsxs)("div",{className:"home-content-wrapper",children:[Object(p.jsx)(K,{movies:n,title:"\u71b1\u9580\u7d93\u5178\u597d\u7247"}),Object(p.jsx)(K,{movies:i,title:"\u6d6a\u6f2b\u611b\u60c5"}),Object(p.jsx)(K,{movies:s,title:"\u63a8\u7406\u61f8\u7591"}),Object(p.jsx)(K,{movies:u,title:"\u9a5a\u609a\u6050\u6016"}),Object(p.jsx)(K,{movies:j,title:"\u8f15\u9b06\u559c\u5287"}),Object(p.jsx)(K,{movies:m,title:"\u79d1\u5e7b\u4e16\u754c"})]})]})},Q=n(440),$=n(202),ee=n(82);Object($.a)({apiKey:"AIzaSyDrjBiOVU7r0XwwTEzhdv6npYMGbQAZt1I",authDomain:"movie-on-f2219.firebaseapp.com",databaseURL:"",projectId:"movie-on-f2219",storageBucket:"movie-on-f2219.appspot.com",messagingSenderId:"941748570381",appId:"1:941748570381:web:9f7f5b28308d1fa6de0844",measurementId:"G-B87HNYKV7Z"});var te=Object(ee.b)(),ne=new ee.a;ne.setCustomParameters({prompt:"select_account"});var ae=Object(a.createContext)({user:null}),ce=function(e){var t=e.children,n=Object(a.useState)(null),c=Object(o.a)(n,2),i=c[0],r=c[1];return Object(a.useEffect)((function(){te.onAuthStateChanged((function(e){if(!e)return r(null);var t=e.displayName,n=e.email,a=e.accessToken,c=e.photoURL;r({name:t,email:n,picture:c,accessToken:a,isLogin:!0})}))}),[]),Object(p.jsx)(ae.Provider,{value:i,children:t})},ie=function(){var e=Object(a.useContext)(ae),t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],i=n[1],r=function(e){i("register"===e),m("signIn","toggle button",{label:e})};return Object(p.jsx)(p.Fragment,{children:e?Object(p.jsx)(b.a,{to:"/"}):Object(p.jsx)(X,{className:"login-page-wrapper",children:Object(p.jsx)("div",{className:"centered-wrap",children:Object(p.jsxs)("div",{className:"card ".concat(c&&"card-flip"),children:[Object(p.jsxs)("section",{className:"login card-front",children:[Object(p.jsx)("h3",{className:"login-title",children:"Sign In"}),Object(p.jsxs)("div",{className:"login-group",children:[Object(p.jsx)("input",{className:"login-group-input",type:"text",autoComplete:"off",onClick:function(){return m("signIn","Click sign-in username")}}),Object(p.jsx)("label",{className:"login-group-label",children:"\u5e33\u865f Username"})]}),Object(p.jsxs)("div",{className:"login-group",children:[Object(p.jsx)("input",{className:"login-group-input",type:"password",autoComplete:"off",onClick:function(){return m("signIn","Click sign-in password")}}),Object(p.jsx)("label",{className:"login-group-label",children:"\u5bc6\u78bc Password"})]}),Object(p.jsx)("button",{className:"login-btn",type:"button",onClick:function(){return m("signIn","click sign-in button")},children:"\u767b\u5165"}),Object(p.jsxs)("div",{className:"login-cta",children:[Object(p.jsx)("button",{style:{visibility:"hidden"},children:"\u5fd8\u8a18\u5bc6\u78bc\uff1f"}),Object(p.jsx)("button",{onClick:function(){m("signIn","click sign-in button",{label:"google"}),Object(ee.c)(te,ne)},children:"\u4f7f\u7528 Google \u767b\u5165"})]}),Object(p.jsx)(Q.a,{size:"lg",checkedChildren:"\u767b\u5165",unCheckedChildren:"\u8a3b\u518a",checked:c,onChange:function(){return r("register")},style:{width:"70px"}})]}),Object(p.jsxs)("section",{className:"register card-back",children:[Object(p.jsx)("h3",{className:"register-title",children:"Sign Up"}),Object(p.jsxs)("div",{className:"register-group",children:[Object(p.jsx)("input",{className:"register-group-input",type:"email",autoComplete:"off",onClick:function(){return m("signIn","click sign-up email")}}),Object(p.jsx)("label",{className:"register-group-label",children:"\u8a3b\u518a\u4fe1\u7bb1 Email"})]}),Object(p.jsxs)("div",{className:"register-group",children:[Object(p.jsx)("input",{className:"register-group-input",type:"text",autoComplete:"off",onClick:function(){return m("signIn","click sign-up username")}}),Object(p.jsx)("label",{className:"register-group-label",children:"\u5e33\u865f Username"})]}),Object(p.jsxs)("div",{className:"register-group",children:[Object(p.jsx)("input",{className:"register-group-input",type:"password",autoComplete:"off",onClick:function(){return m("signIn","click sign-up password")}}),Object(p.jsx)("label",{className:"register-group-label",children:"\u5bc6\u78bc Password"})]}),Object(p.jsx)("button",{className:"register-btn",type:"button",onClick:function(){return m("signIn","click sign-up button")},children:"\u8a3b\u518a"}),Object(p.jsx)(Q.a,{size:"lg",checkedChildren:"\u767b\u5165",unCheckedChildren:"\u8a3b\u518a",checked:c,onChange:function(){return r("login")},style:{width:"70px"}})]})]})})})})},re=function(){var e=Object(a.useContext)(ae);return Object(p.jsx)(p.Fragment,{children:e?Object(p.jsx)(X,{className:"profile-page-wrapper"}):Object(p.jsx)(b.a,{to:"/login"})})};function se(){var e=Object(b.g)();return{changeRouter:function(t){t&&(y(),e.push(t))}}}var oe=function(e){var t=e.searchWord,n=Object(a.useState)([]),c=Object(o.a)(n,2),i=c[0],r=c[1],s=se();return Object(a.useEffect)((function(){if(Object(l.isEmpty)(t))return s("/");(function(){var e=Object(S.a)(C.a.mark((function e(t){var n,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t);case 2:if(200===(n=e.sent).status){e.next=5;break}return e.abrupt("return",console.log(n));case 5:if(a=n.data,Object(l.isArray)(a)){e.next=8;break}return e.abrupt("return");case 8:r(a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(t)}),[t]),Object(p.jsx)(X,{className:"search-wrapper",children:!Object(l.isEmpty)(t)&&Object(p.jsxs)(p.Fragment,{children:[i.length&&Object(p.jsxs)("p",{className:"search-hint",children:["\u627e\u5230\u8207\u300c ",Object(p.jsx)("span",{children:t})," \u300d\u6709\u95dc\u7684\u5f71\u7247"]}),!i.length&&Object(p.jsxs)("p",{className:"search-hint",children:["\u627e\u4e0d\u5230\u8207\u300c ",Object(p.jsx)("span",{children:t})," \u300d\u6709\u95dc\u7684\u5f71\u7247"]}),Object(p.jsx)("div",{className:"movie-gallery",children:i.map((function(e){return Object(p.jsx)(k,{data:e},e.main_taiwan_name)}))})]})})},le=n(4),ue=n(203),be=n.n(ue),je=n(441),de=n(438),me=n(437),pe=n(435),Oe=n(439),ve=n(436),he=Number(be()().format("YYYY")),fe=Object.values(B);fe.unshift({id:"",name:"\u5168\u90e8\u985e\u578b",type:"all"});var ge=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),r=Object(o.a)(i,2),u=r[0],b=r[1],j=Object(a.useState)([]),d=Object(o.a)(j,2),O=d[0],v=d[1],h=Object(a.useRef)(null),f=Object(a.useState)({sort:"rating_total_amount",feature:"",start_year:1980,end_year:he}),g=Object(o.a)(f,2),x=g[0],w=g[1],N=function(e,t){m("browse","select movie by ".concat(e),{label:t}),w(Object(s.a)(Object(s.a)({},x),{},Object(le.a)({},e,t)))},_=Object(l.debounce)((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];m("browse","select movie by year",{label:"".concat(n,"-").concat(a)}),w(Object(s.a)(Object(s.a)({},x),{},{start_year:n,end_year:a}))}),500),E=function(){var e=Object(S.a)(C.a.mark((function e(t){var n,a,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),(n=Object(s.a)({},x)).start=t||0,console.log(n),e.next=6,I(n);case 6:if(200===(a=e.sent).status){e.next=9;break}return e.abrupt("return",console.log(a));case 9:c=a.data,v(t?O.concat(c):c),b(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){y(),E()}),[x]),Object(a.useEffect)((function(){n&&O.length&&(m("browse","scroll to bottom"),E(O.length))}),[n]),Object(a.useEffect)((function(){var e=new IntersectionObserver((function(e){var t=e[0];c(t.isIntersecting)}),{threshold:[1]});return h.current&&e.observe(h.current),function(){e.disconnect()}}),[]),Object(p.jsxs)(X,{className:"browse-wrapper ".concat(u&&"loading"),children:[Object(p.jsxs)("div",{className:"conditions-wrapper",children:[Object(p.jsx)(je.a,{md:2,children:Object(p.jsx)("div",{style:{height:400,position:"fixed"},children:Object(p.jsx)(de.a,{defaultValue:[1980,he],min:1980,max:2021,graduated:!0,vertical:!0,renderMark:function(e){if(e%5===0)return Object(p.jsx)("span",{children:e})},onChange:_})})}),Object(p.jsxs)("div",{className:"flex-space-between",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(me.a,{title:Object(l.find)(fe,{id:x.feature}).name,activeKey:x.feature,onClick:function(){return m("browse","click to select movie type")},onSelect:function(e){var t=Object(l.find)(fe,{type:e}).id;N("feature",t)},children:fe.map((function(e,t){var n=e.name,a=e.type;return Object(p.jsx)(me.a.Item,{eventKey:a,children:n},a)}))}),Object(p.jsx)(pe.a,{inline:!0,name:"radioList",value:x.value,appearance:"picker",onChange:function(e){N("sort",e)},children:z.map((function(e){var t=e.name,n=e.value,a=e.color;return Object(p.jsx)(Oe.a,{style:{backgroundColor:"".concat(x.sort===n?a:"")},value:n,children:t},n)}))})]}),Object(p.jsx)(ve.a,{data:P,appearance:"default",placeholder:"\u7be9\u9078\u8a55\u5206",style:{width:"min-content",backgroundColor:"#141414"},searchable:!1,onChange:function(e){Object(l.isEmpty)(e)&&(delete x.imdb_rating,delete x.douban_rating,delete x.tomato_rating),E()},onSelect:function(e,t){if(!(t.length<2)){var n=Object(o.a)(t,2),a=n[0],c=n[1];N(a.value,c.value[c.value.length-1])}},onClick:function(){return m("browse","click to limit movie-ranking score")},renderValue:function(){var e="",t=x.imdb_rating,n=x.douban_rating,a=x.tomato_rating;return t&&(e+="IMDB / ".concat(t," \u5206\u4ee5\u4e0a")),n&&(e+="".concat(Object(l.isEmpty)(e)?"":"\u3001","\u8c46\u74e3 / ").concat(n," \u5206\u4ee5\u4e0a")),a&&(e+="".concat(Object(l.isEmpty)(e)?"":"\u3001","\u721b\u756a\u8304 / ").concat(a,"0 \u5206\u4ee5\u4e0a")),e}})]})]}),Object(p.jsx)("div",{className:"movie-gallery",children:O.map((function(e){return Object(p.jsx)(k,{data:e},e.main_taiwan_name)}))}),Object(p.jsx)("div",{className:"page-bottom",ref:h})]})},xe=n(216),we=n(215),ye=n.n(we),Ne=function(e){var t=e.isTop,n=e.setSearchWord,c=Object(b.h)(),i=Object(a.useContext)(ae),r=se().changeRouter,s=Object(a.useState)(!1),j=Object(o.a)(s,2),d=j[0],O=j[1];return Object(p.jsxs)("nav",{className:"navbar ".concat(t&&"top"),children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(u.b,{className:"logo",to:"/"}),Object(p.jsxs)("ul",{className:"navbar-list",children:[Object(p.jsx)(u.b,{to:"/",className:"".concat("/"===c.pathname&&"active"),children:"\u9996\u9801"}),Object(p.jsx)(u.b,{to:"/browse",className:"".concat("/browse"===c.pathname&&"active"),children:"\u96fb\u5f71\u5206\u985e"})]})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"navbar-input-group ".concat(d&&"isFocus"),children:[Object(p.jsx)("button",{children:Object(p.jsx)(ye.a,{size:"3em",style:{color:"white",fontSize:"22px"},onClick:function(){m("navbar","click to search movie",{label:"search-icon"}),O(!0)}})}),Object(p.jsx)("input",{type:"text",onKeyDown:function(e){"Enter"===e.key&&(Object(l.isEmpty)(e.target.value)?(O(!1),r("/")):(m("navbar","enter to search movie",{value:e.target.value}),n(e.target.value),r("/search")))},autoComplete:"off"})]}),Object(p.jsx)(u.b,{className:"navbar-icon",to:"".concat(i?"/profile":"login"),onClick:function(){return m("navbar","click to see user page",{label:"user-icon"})},children:Object(p.jsx)(xe.a,{})})]})]})},ke=c.a.memo(Ne),_e=function(){var e=Object(a.useState)(!0),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),j=r[0],m=r[1];return window.addEventListener("scroll",(function(){c(window.scrollY<150),document.documentElement.scrollTop>150&&y(".floating-card-wrapper")})),window.addEventListener("mouseover",(function(e){Object(l.isEmpty)(Object(l.intersection)(e.target.classList,["nav-bar","search-wrapper","home-content-wrapper","movie-list-wrapper","home-banner","movie-gallery","conditions-wrapper"]))||y()})),Object(a.useEffect)((function(){d()}),[]),Object(p.jsx)(ce,{children:Object(p.jsxs)(u.a,{children:[Object(p.jsx)(ke,{isTop:n,setSearchWord:m}),Object(p.jsxs)(b.d,{children:[Object(p.jsx)(b.b,{exact:!0,path:"/",component:J}),Object(p.jsx)(b.b,{exact:!0,path:"/search",render:function(e){return Object(p.jsx)(oe,Object(s.a)(Object(s.a)({},e),{},{searchWord:j}))}}),Object(p.jsx)(b.b,{exact:!0,path:"/browse",component:ge}),Object(p.jsx)(b.b,{exact:!0,path:"/login",component:ie}),Object(p.jsx)(b.b,{exact:!0,path:"/profile",component:re})]})]})})};n(430),n(431);r.a.render(Object(p.jsx)(_e,{}),document.getElementById("root"))}},[[432,1,2]]]);
//# sourceMappingURL=main.954af092.chunk.js.map