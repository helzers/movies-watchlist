(this.webpackJsonpmovielist=this.webpackJsonpmovielist||[]).push([[0],{53:function(e,t,a){e.exports=a(75)},58:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},71:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(6),i=a.n(s),r=(a(58),a(17)),l=a.n(r),o=a(22),u=a(13),m=a(29),v=a(4),h=(a(60),a(47)),d=(a(61),a(38));a(62);var f=function(e){var t=e.watchListMovie.watched;return n.a.createElement("div",{className:"list-item-container ".concat(t?"watched":"")},n.a.createElement("img",{src:e.watchListMovie.image,alt:""}),n.a.createElement("div",{className:"movieDetails"},n.a.createElement("h2",null,e.watchListMovie.title),n.a.createElement("p",null,e.watchListMovie.desc)),n.a.createElement("div",{className:"movieButtons"},n.a.createElement("button",{onClick:function(){e.setWatchListMovies(e.watchListMovies.map((function(t){return t.id===e.watchListMovie.id?Object(d.a)(Object(d.a)({},t),{},{watched:!t.watched}):t})))},className:"watched-btn"},"Watched"),n.a.createElement("button",{onClick:function(){e.setWatchListMovies(e.watchListMovies.filter((function(t){return t.id!==e.watchListMovie.id})))},className:"delete-btn"},"Delete")))};var b=function(e){var t=e.watchListMovies,a=e.setWatchListMovies,s=e.setListFilter,i=e.filteredMovies,r=[{value:"all",label:"All"},{value:"watched",label:"Watched"},{value:"unwatched",label:"Unwatched"}];Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]);var l=Object(c.useState)("all"),o=Object(u.a)(l,2),m=o[0],v=o[1];return n.a.createElement("div",{className:"watch-list-container"},n.a.createElement("div",{className:"title-select"},n.a.createElement("span",{className:"placeholder-span"}," "),n.a.createElement("h1",null,"My Watch List"),n.a.createElement("div",{className:"select"},n.a.createElement(h.a,{className:"list-filter-select",value:m,options:r,defaultValue:r[0].label,onChange:function(e){v(e),s(e.value)}}))),n.a.createElement("div",{className:"my-movies"},i.map((function(e){return n.a.createElement(f,{key:e.id,movieTitle:e.title,watchListMovies:t,watchListMovie:e,setWatchListMovies:a})}))))},E=(a(65),a(48));a(66);var p=function(e){var t=!1,a=!1;return e.title.length>20&&(e.title.length>38?a=!0:t=!0),n.a.createElement("div",{className:"movieContainer"},n.a.createElement("img",{src:e.image,alt:"Movie Poster"}),n.a.createElement("div",{className:"searchMovieDetails ".concat(t?"long":""," ").concat(a?"very":"")},n.a.createElement("h1",null,e.title),n.a.createElement("p",null,e.desc)),n.a.createElement("div",{className:"movieAddButton"},n.a.createElement("button",{onClick:function(t){e.setWatchListMovies([].concat(Object(E.a)(e.watchListMovies),[{title:e.title,image:e.image,desc:e.desc,watched:!1,id:e.id}])),e.snackbarOpenHandler()}},"Add +")))};a(67);var w=function(e){return n.a.createElement("div",{className:"search-bar-container"},n.a.createElement("form",{onSubmit:e.getSearch,className:"searchForm"},n.a.createElement("input",{className:"searchBar",type:"text",value:e.search,onChange:e.updateSearch,placeholder:" Enter Movie Title Here"}),n.a.createElement("button",{className:"searchBtn",type:"submit"},"Search")))},g=a(95),O=a(96),j=a(46),M=a.n(j);var L=function(e){var t="4e3b5358480cc4b8602cf4144f0e7d42",a=Object(c.useState)([]),s=Object(u.a)(a,2),i=s[0],r=s[1],m=Object(c.useState)(""),v=Object(u.a)(m,2),h=v[0],d=v[1],f=Object(c.useState)(""),b=Object(u.a)(f,2),E=b[0],j=b[1],L=Object(c.useState)(""),N=Object(u.a)(L,2),k=N[0],S=N[1],y=Object(c.useState)(!1),x=Object(u.a)(y,2),C=x[0],W=x[1],A=Object(c.useCallback)(Object(o.a)(l.a.mark((function e(){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat(t,"&language=en-US&sort_by=popularity.desc"));case 2:return a=e.sent,e.next=5,a.json();case 5:c=e.sent,console.log(c),r(c.results);case 8:case"end":return e.stop()}}),e)}))),[t]),B=Object(c.useCallback)(Object(o.a)(l.a.mark((function e(){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(t,"&query=").concat(E));case 2:return a=e.sent,e.next=5,a.json();case 5:c=e.sent,console.log(c),r(c.results);case 8:case"end":return e.stop()}}),e)}))),[t,E]),I=Object(c.useCallback)(Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==Object.keys(E).length){e.next=5;break}return e.next=3,A();case 3:e.next=7;break;case 5:return e.next=7,B();case 7:case"end":return e.stop()}}),e)}))),[E,A,B]),T=Object(c.useCallback)((function(){E.length>0&&S("Search Results For: ".concat(E))}),[E]),_=function(){W(!0)},D=function(e,t){"clickaway"!==t&&W(!1)};return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(c.useEffect)((function(){I(),T()}),[E,I,T]),n.a.createElement("div",{className:"search-page"},n.a.createElement(w,{getSearch:function(e){e.preventDefault(),j(h),d("")},search:h,updateSearch:function(e){d(e.target.value)}}),n.a.createElement("h2",null,k),n.a.createElement("div",{className:"movieResults"},i.map((function(t){return n.a.createElement(p,{key:t.id,id:t.id,title:t.title,desc:t.overview,image:e.imageURL+t.poster_path,setWatchListMovies:e.setWatchListMovies,watchListMovies:e.watchListMovies,addedAlert:e.addedAlert,snackbarOpenHandler:_})}))),n.a.createElement("div",{className:"snackbar-alert"},n.a.createElement(g.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:C,autoHideDuration:3e3,onClose:D,message:"Movie added to your watch list",action:n.a.createElement(c.Fragment,null,n.a.createElement(O.a,{size:"small",onClick:D},n.a.createElement(M.a,{fontSize:"small"})))})))};a(71);var N=function(){return n.a.createElement("header",null,n.a.createElement("div",{className:"navbar"},n.a.createElement("nav",{className:"nav-items"},n.a.createElement(m.b,{className:"nav-bar-search",activeClassName:"active",exact:!0,to:"/"},"Search"),n.a.createElement("h1",{className:"nav-bar-title"},"MOVIE WATCHLIST"),n.a.createElement(m.b,{className:"nav-bar-list",activeClassName:"active",to:"/list"},"My List"))))};a(74);var k=function(){return n.a.createElement("div",{className:"footer-container"},n.a.createElement("div",{className:"footer-details"},n.a.createElement("p",null,"Made by Helen Murphy"),n.a.createElement("p",null,"API by The Movie DB")),n.a.createElement("img",{src:"./TMBLogo.svg",alt:"Logo"}))};var S=function(){var e="4e3b5358480cc4b8602cf4144f0e7d42",t=Object(c.useState)([]),a=Object(u.a)(t,2),s=a[0],i=a[1],r=Object(c.useState)([]),h=Object(u.a)(r,2),d=h[0],f=h[1],E=Object(c.useState)("all"),p=Object(u.a)(E,2),w=p[0],g=p[1],O=Object(c.useState)([]),j=Object(u.a)(O,2),M=j[0],S=j[1],y=Object(c.useCallback)(Object(o.a)(l.a.mark((function t(){var a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/configuration?api_key=".concat(e));case 2:return a=t.sent,t.next=5,a.json();case 5:c=t.sent,console.log(c),i(c.images.secure_base_url+c.images.poster_sizes[6]);case 8:case"end":return t.stop()}}),t)}))),[e]),x=Object(c.useCallback)((function(){localStorage.setItem("watchListMovies",JSON.stringify(d))}),[d]),C=Object(c.useCallback)((function(){switch(w){case"watched":S(d.filter((function(e){return!0===e.watched})));break;case"unwatched":S(d.filter((function(e){return!1===e.watched})));break;default:S(d)}}),[S,d,w]);return Object(c.useEffect)((function(){y(),function(){if(null===localStorage.getItem("watchListMovies"))localStorage.setItem("watchListMovies",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("watchListMovies"));f(e)}}()}),[y]),Object(c.useEffect)((function(){x()}),[d,x]),Object(c.useEffect)((function(){C()}),[d,w,C]),n.a.createElement(m.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(N,null),n.a.createElement("div",{className:"main-container"},n.a.createElement(v.c,null,n.a.createElement(v.a,{path:"/list",exact:!0},n.a.createElement(b,{watchListMovies:d,setWatchListMovies:f,setListFilter:g,filteredMovies:M})),n.a.createElement(v.a,{path:"/",exact:!0},n.a.createElement(L,{imageURL:s,setWatchListMovies:f,watchListMovies:d})))),n.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.d7508692.chunk.js.map