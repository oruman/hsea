(function(t){function e(e){for(var n,r,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==i[s]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},i={app:0},o=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ad2c0b5b","chunk-2c7cd145":"31d6a885","chunk-2d2371bd":"6342383f","chunk-2f3db70e":"b0d63188"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-2c7cd145":1,"chunk-2f3db70e":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-2c7cd145":"0b94f07b","chunk-2d2371bd":"31d6cfe0","chunk-2f3db70e":"0b94f07b"}[t]+".css",i=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===i))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===n||l===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[t],h.parentNode.removeChild(h),a(o)},h.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){r[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(h);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",f.name="ChunkLoadError",f.type=n,f.request=r,a[1](f)}i[t]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var h=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"0284":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return c}));a("4de4");var n,r=a("b85c"),i=a("d4ec"),o=a("bee2");(function(t){t[t["GRADES_LOAD"]=0]="GRADES_LOAD",t[t["FILES_LOAD"]=1]="FILES_LOAD",t[t["STATE_LOAD"]=2]="STATE_LOAD",t[t["LESSONS_LOAD"]=3]="LESSONS_LOAD",t[t["STUDENTS_LOAD"]=4]="STUDENTS_LOAD",t[t["GROUPS_LOAD"]=5]="GROUPS_LOAD"})(n||(n={}));var s=function(){function t(){Object(i["a"])(this,t),this.subscribers={}}return Object(o["a"])(t,[{key:"publish",value:function(t,e){var a=this.subscribers[t];if(!a)return!1;var n,i=Object(r["a"])(a);try{for(i.s();!(n=i.n()).done;){var o=n.value;o(e)}}catch(s){i.e(s)}finally{i.f()}return!0}},{key:"subscribe",value:function(t,e){var a;return this.subscribers[t]||(this.subscribers[t]=[]),null===(a=this.subscribers[t])||void 0===a||a.push(e),e}},{key:"unsubscribe",value:function(t,e){var a,n=this.subscribers[t];n&&(this.subscribers[t]=e?null===(a=this.subscribers[t])||void 0===a?void 0:a.filter((function(t){return t!==e})):void 0)}}]),t}(),c=new s},"12c2":function(t,e,a){},1381:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a("d4ec"),r=a("bee2"),i=a("5f54"),o=a("0284"),s=function(){function t(){Object(n["a"])(this,t),this.data={},this.loadData()}return Object(r["a"])(t,[{key:"loadData",value:function(){var t=this;Object(i["a"])("https://oruman.github.io/hsea/json/grades.json").then(i["c"]).then((function(t){return t.json()})).then(i["b"]).then((function(e){t.data=e[0],o["b"].publish(o["a"].GRADES_LOAD,null)}))}},{key:"curriculum",get:function(){var t;return null===(t=this.data)||void 0===t?void 0:t.curriculum}},{key:"tol",get:function(){var t;return null===(t=this.data)||void 0===t?void 0:t.tol}},{key:"rol",get:function(){var t;return null===(t=this.data)||void 0===t?void 0:t.rol}},{key:"rolDelayWeeks",get:function(){return this.data.rol_delay_weeks||0}}]),t}(),c=new s},4088:function(t,e,a){"use strict";var n=a("12c2"),r=a.n(n);r.a},4234:function(t,e,a){"use strict";var n=a("fde1"),r=a.n(n);r.a},"50ab":function(t,e,a){"use strict";var n=a("99df"),r=a.n(n);r.a},"5f54":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return i}));a("c975"),a("d3b7");function n(t){return t+=t.indexOf("?")>-1?"&":"?",t+="tm="+Date.now(),fetch(t)}function r(t){return t.status>=200&&t.status<300?Promise.resolve(t):Promise.reject(t)}function i(t){return t.error?Promise.reject(t.eror):Promise.resolve(t)}},8282:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));a("07ac");var n=a("b85c"),r=a("d4ec"),i=a("bee2"),o=a("5f54"),s=a("0284"),c=function(){function t(){Object(r["a"])(this,t),this._marks=[],this._tests=[],this._tols=[],this.loadData()}return Object(i["a"])(t,[{key:"loadData",value:function(){var t=this;Object(o["a"])("https://oruman.github.io/hsea/json/lessons.json").then(o["c"]).then((function(t){return t.json()})).then(o["b"]).then((function(e){var a=[],r=[];e.sort((function(t,e){return t.date-e.date}));var i,o=Object(n["a"])(e);try{for(o.s();!(i=o.n()).done;){var c=i.value,u=parseInt(c.date,10),l=Object.values(c.marks);if(a.push({date:u,aspect:c.aspect,mark:l.length>0?l[0]:""}),c.is_test){var f=Object.values(c.test_marks);r.push({date:u,aspect:c.aspect,score:f.length>0?f[0]:0})}}}catch(h){o.e(h)}finally{o.f()}t._marks=a,t._tests=r,s["b"].publish(s["a"].LESSONS_LOAD,null)}))}},{key:"marks",get:function(){return this._marks}},{key:"tests",get:function(){return this._tests}}]),t}(),u=new c},"99df":function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("TopToolbar"),a("v-main",[a("router-view")],1),a("BottomNav")],1)},i=[],o=a("d4ec"),s=a("262e"),c=a("2caf"),u=a("9ab4"),l=a("60a3"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{attrs:{app:"",fixed:""},model:{value:t.showMenu,callback:function(e){t.showMenu=e},expression:"showMenu"}},[a("v-list",{attrs:{dense:""}},[t._l(t.itemsMenu,(function(e,n){return[e.divider?a("v-divider",{key:n+"_div"}):a("v-list-item",{key:n+"_item",on:{click:e.click}},[a("v-list-item-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.name))])],1)],1)]}))],2)],1),a("v-app-bar",{attrs:{app:"",fixed:"",dark:"",color:"primary"}},[a("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.toggleMenu(e)}}}),a("v-toolbar-title",[t._v(t._s(t.$route.name))])],1)],1)},h=[],d=a("bee2"),b=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.showMenu=!1,t.itemsMenu=[{icon:"mdi-microphone-variant",name:"Think Out Loud",click:function(){t.routeTo("/tol")}},{icon:"mdi-book-open-variant",name:"Read Out Loud",click:function(){t.routeTo("/rol")}},{icon:"mdi-headphones",name:"Monthly Speaking",click:function(){t.routeTo("/monspeaking")}},{icon:"mdi-seal-variant",name:"Hall Of Fame",click:function(){t.routeTo("/hall-of-fame")}},{divider:!0},{icon:"mdi-exit-to-app",name:"Exit",click:function(){t.doNothing()}}],t}return Object(d["a"])(a,[{key:"toggleMenu",value:function(){this.showMenu=!this.showMenu}},{key:"doNothing",value:function(){}},{key:"routeTo",value:function(t){this.$router.push(t)}}]),a}(l["d"]);b=Object(u["a"])([l["a"]],b);var v=b,p=v,m=a("2877"),y=a("6544"),O=a.n(y),k=a("40dc"),_=a("5bc1"),g=a("ce7e"),j=a("132d"),w=a("8860"),T=a("da13"),D=a("1800"),L=a("5d23"),S=a("f774"),V=a("2a7f"),x=Object(m["a"])(p,f,h,!1,null,null,null),A=x.exports;O()(x,{VAppBar:k["a"],VAppBarNavIcon:_["a"],VDivider:g["a"],VIcon:j["a"],VList:w["a"],VListItem:T["a"],VListItemAction:D["a"],VListItemContent:L["a"],VListItemTitle:L["c"],VNavigationDrawer:S["a"],VToolbarTitle:V["a"]});var C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-bottom-navigation",{attrs:{app:"",fixed:"",grow:"",color:"primary"},model:{value:t.activeItem,callback:function(e){t.activeItem=e},expression:"activeItem"}},t._l(t.items,(function(e){return a("v-btn",{key:e.name,attrs:{value:e.id,to:{path:"/"+e.path}}},[a("span",[t._v(t._s(e.name))]),a("v-icon",[t._v(t._s(e.icon))])],1)})),1)},E=[],F=(a("ac1f"),a("1276"),function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.activeItem="",t.items=[{id:"overview",name:"Overview",icon:"mdi-face",path:""},{id:"curriculum",name:"Curriculum",icon:"mdi-calendar-text",path:"curriculum"},{id:"materials",name:"Materials",icon:"mdi-file-document-multiple-outline",path:"materials"}],t}return Object(d["a"])(a,[{key:"mounted",value:function(){for(var t=this.$route.path.split("/"),e=t.length>1?t[1]:"",a=0;a<this.items.length;a++)if(e==this.items[a].path){this.activeItem=this.items[a].id;break}!this.activeItem&&this.items.length&&(this.activeItem=this.items[0].id)}}]),a}(l["d"]));F=Object(u["a"])([l["a"]],F);var N=F,P=N,I=a("b81c"),M=a("8336"),$=Object(m["a"])(P,C,E,!1,null,null,null),R=$.exports;O()($,{VBottomNavigation:I["a"],VBtn:M["a"],VIcon:j["a"]});var B=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(o["a"])(this,a),e.apply(this,arguments)}return a}(l["d"]);B=Object(u["a"])([Object(l["a"])({components:{TopToolbar:A,BottomNav:R}})],B);var G=B,H=G,U=a("7496"),K=a("f6c4"),W=Object(m["a"])(H,r,i,!1,null,null,null),q=W.exports;O()(W,{VApp:U["a"],VMain:K["a"]});a("d3b7");var J=a("8c4f"),Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"block-height"},[a("h6",{staticClass:"title"},[t._v("Exam")]),a("TestTable"),a("h6",{staticClass:"title"},[t._v("Attendance")]),a("MarkTable",{staticClass:"block-height-child"})],1)},z=[],Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-simple-table",{attrs:{"fixed-header":""},scopedSlots:t._u([t.$vuetify.breakpoint.mdAndDown?{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-center"},[t._v("Week")]),t._l(t.aspectsView,(function(e){return a("th",{key:e,staticClass:"text-center"},[t._v(" "+t._s(t.getNameForAspect(e))+" ")])}))],2)]),a("tbody",t._l(t.weeks,(function(e,n){return a("tr",{key:n},[a("td",{staticClass:"text-left"},[t._v(t._s(e))]),t._l(t.aspectsView,(function(e){return a("td",{key:e+"-"+n,staticClass:"text-center",class:t.colorClassForMark(t.dataForView[e][n])},[a("b",[t._v(t._s(t.dataForView[e][n]))])])}))],2)})),0)]},proxy:!0}:{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Week")]),t._l(t.weeks,(function(e,n){return a("th",{key:n,staticClass:"text-center"},[t._v(" "+t._s(e)+" ")])}))],2)]),a("tbody",t._l(t.aspectsView,(function(e){return a("tr",{key:e},[a("th",[t._v(t._s(t.getNameForAspect(e)))]),t._l(t.weeks,(function(n,r){return a("td",{key:e+"-"+r,staticClass:"text-center",class:t.colorClassForMark(t.dataForView[e][r])},[a("b",[t._v(t._s(t.dataForView[e][r]))])])}))],2)})),0)]},proxy:!0}],null,!0)})},X=[],Z=a("b85c"),tt=a("0284"),et=a("8282"),at={1:"Grammar",2:"Listening",3:"Speaking"},nt=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.aspects=[],t.dataForView={},t.maxLength=0,t.colors={"+":"success","+/-":"warning","-":"error",H:"info"},t}return Object(d["a"])(a,[{key:"mounted",value:function(){this.loadData(),tt["b"].subscribe(tt["a"].LESSONS_LOAD,this.loadData)}},{key:"beforeDestroy",value:function(){tt["b"].unsubscribe(tt["a"].LESSONS_LOAD,this.loadData)}},{key:"loadData",value:function(){var t,e=0,a=[],n={},r=et["a"].marks,i=Object(Z["a"])(r);try{for(i.s();!(t=i.n()).done;){var o=t.value,s=o.aspect;Object.prototype.hasOwnProperty.call(n,s)||(n[s]=[],a.push(s)),n[s].push(o.mark)}}catch(u){i.e(u)}finally{i.f()}for(var c=0;c<a.length;c++)e=Math.max(e,n[a[c]].length);this.maxLength=e,this.aspects=a,this.dataForView=n}},{key:"colorClassForMark",value:function(t){return Object.prototype.hasOwnProperty.call(this.colors,t)?this.colors[t]:""}},{key:"getNameForAspect",value:function(t){return Object.prototype.hasOwnProperty.call(at,t)?at[t]:""}},{key:"weeks",get:function(){for(var t=[],e=1;e<=this.maxLength;e++)t.push("#"+e);return t}},{key:"aspectsView",get:function(){return this.aspects||[]}}]),a}(l["d"]);nt=Object(u["a"])([l["a"]],nt);var rt=nt,it=rt,ot=(a("50ab"),a("1f4f")),st=Object(m["a"])(it,Q,X,!1,null,"abd1281c",null),ct=st.exports;O()(st,{VSimpleTable:ot["a"]});var ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",[t._v("Test")]),t._l(t.dataForView.total,(function(e,n){return a("th",{key:n,staticClass:"text-center"},[t._v(" #"+t._s(n+1)+" ")])}))],2)]),a("tbody",[t._l(t.aspectsView,(function(e){return a("tr",{key:e},[a("th",[t._v(t._s(t.getNameForAspect(e)))]),t._l(t.dataForView.total,(function(n,r){return a("td",{key:e+"-"+r,staticClass:"text-center"},[t._v(" "+t._s(t.formatValue(t.dataForView[e][r]))+" ")])}))],2)})),a("tr",[a("th",[t._v("Total")]),t._l(t.dataForView.total,(function(e,n){return a("td",{key:""+n,staticClass:"text-center"},[t._v(" "+t._s(t.formatValue(e))+" ")])}))],2)],2)]},proxy:!0}])})},lt=[],ft=(a("b680"),function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.aspects=[],t.dataForView={},t.maxLength=0,t}return Object(d["a"])(a,[{key:"mounted",value:function(){this.loadData(),tt["b"].subscribe(tt["a"].LESSONS_LOAD,this.loadData)}},{key:"beforeDestroy",value:function(){tt["b"].unsubscribe(tt["a"].LESSONS_LOAD,this.loadData)}},{key:"loadData",value:function(){var t,e=0,a=[],n={},r=et["a"].tests,i=Object(Z["a"])(r);try{for(i.s();!(t=i.n()).done;){var o=t.value,s=o.aspect;Object.prototype.hasOwnProperty.call(n,s)||(n[s]=[],a.push(s)),n[s].push(o.score)}}catch(d){i.e(d)}finally{i.f()}for(var c=0;c<a.length;c++)e=Math.max(e,n[a[c]].length);n.total=[];for(var u=0;u<e;u++){for(var l=0,f=0,h=0;h<a.length;h++)n[a[h]][u]&&(l++,f+=n[a[h]][u]);l>0&&(f/=l),n.total.push(f)}this.maxLength=e,this.aspects=a,this.dataForView=n}},{key:"getNameForAspect",value:function(t){return Object.prototype.hasOwnProperty.call(at,t)?at[t]:""}},{key:"formatValue",value:function(t){return t.toFixed(1)}},{key:"aspectsView",get:function(){return this.aspects||[]}}]),a}(l["d"]));ft=Object(u["a"])([l["a"]],ft);var ht=ft,dt=ht,bt=Object(m["a"])(dt,ut,lt,!1,null,null,null),vt=bt.exports;O()(bt,{VSimpleTable:ot["a"]});var pt=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(o["a"])(this,a),e.apply(this,arguments)}return a}(l["d"]);pt=Object(u["a"])([Object(l["a"])({components:{TestTable:vt,MarkTable:ct}})],pt);var mt=pt,yt=mt,Ot=(a("4234"),a("a523")),kt=Object(m["a"])(yt,Y,z,!1,null,"02d1706e",null),_t=kt.exports;O()(kt,{VContainer:Ot["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","grid-list-xl":""}},[a("Tabs",{on:{"emit-change-tab":t.changeTab}}),a("v-row",t._l(t.curriculum,(function(e,n){return a("v-col",{key:n,attrs:{cols:"12"}},[a("v-card",[a("v-list",[a("v-subheader",{key:n},[t._v(" Week #"+t._s(n+1)+" "),a("v-spacer"),t._v(" "+t._s(t.getDate(n))+" ")],1),t._l(e,(function(e,r){return[a("v-divider",{key:["d",n,r].join("_")}),a("v-list-item",{key:["i",n,r].join("_")},[a("v-list-item-content",[e.title?a("v-list-item-title",{domProps:{innerHTML:t._s(e.title)}}):t._e(),t._l(e.items,(function(e,i){return[e.link?a("v-list-item-subtitle",{key:["l",n,r,i].join("_"),staticClass:"wrap-normal"},[a("a",{attrs:{href:e.link,target:"_blank"},domProps:{innerHTML:t._s(e.text)}})]):a("v-list-item-subtitle",{key:["c",n,r,i].join("_"),staticClass:"wrap-normal",domProps:{innerHTML:t._s(e.text)}})]}))],2)],1)]}))],2)],1)],1)})),1)],1)},jt=[],wt=(a("4de4"),a("b0c0"),a("9911"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-tabs",{attrs:{"fixed-tabs":""}},t._l(t.tabs,(function(e){return a("v-tab",{key:e.id,on:{click:function(a){return t.changeTab(e.id)}},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[t._v(t._s(e.name))])})),1)}),Tt=[],Dt=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.tabs=[],t.activeTab=0,t}return Object(d["a"])(a,[{key:"mounted",value:function(){for(var t in at)Object.prototype.hasOwnProperty.call(at,t)&&this.tabs.push({id:t,name:at[t]})}},{key:"changeTab",value:function(t){this.activeTab=t,this.emitChangeTab()}},{key:"emitChangeTab",value:function(){return this.activeTab}}]),a}(l["d"]);Object(u["a"])([Object(l["b"])()],Dt.prototype,"emitChangeTab",null),Dt=Object(u["a"])([l["a"]],Dt);var Lt=Dt,St=Lt,Vt=a("71a3"),xt=a("fe57"),At=Object(m["a"])(St,wt,Tt,!1,null,null,null),Ct=At.exports;O()(At,{VTab:Vt["a"],VTabs:xt["a"]});var Et=a("1381"),Ft=a("eb59"),Nt=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.activeTab=1,t.data=[],t.lessonsDate={},t}return Object(d["a"])(a,[{key:"mounted",value:function(){this.loadCurriculum(),this.loadLessons(),tt["b"].subscribe(tt["a"].GRADES_LOAD,this.loadCurriculum),tt["b"].subscribe(tt["a"].LESSONS_LOAD,this.loadLessons)}},{key:"beforeDestroy",value:function(){tt["b"].unsubscribe(tt["a"].GRADES_LOAD,this.loadCurriculum),tt["b"].unsubscribe(tt["a"].LESSONS_LOAD,this.loadLessons)}},{key:"changeTab",value:function(t){this.activeTab=t}},{key:"getDate",value:function(t){return!Object.prototype.hasOwnProperty.call(this.lessonsDate,this.activeTab)||t<0||t>=this.lessonsDate[this.activeTab].length||!this.lessonsDate[this.activeTab][t]?"":Object(Ft["a"])(this.lessonsDate[this.activeTab][t])}},{key:"loadLessons",value:function(){var t,e=et["a"].marks,a={},n=Object(Z["a"])(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;Object.prototype.hasOwnProperty.call(a,r.aspect)||(a[r.aspect]=[]),a[r.aspect].push(r.date)}}catch(i){n.e(i)}finally{n.f()}this.lessonsDate=a}},{key:"loadCurriculum",value:function(){var t=Et["a"].curriculum;t&&this.convertData(t)}},{key:"convertData",value:function(t){if(t.header&&t.body){var e=[];for(var a in t.header)if(Object.prototype.hasOwnProperty.call(t.header,a))for(var n in t.header[a])Object.prototype.hasOwnProperty.call(t.header[a],n)&&e.push({tabId:a,name:t.header[a][n]});var r=[];for(var i in t.body)if(Object.prototype.hasOwnProperty.call(t.body,i)){var o=[];for(var s in t.body[i])if(Object.prototype.hasOwnProperty.call(t.body[i],s)){var c=parseInt(s,10);if(!isNaN(c)){var u,l={title:e[c].name,tabId:e[c].tabId},f=[],h=Object(Z["a"])(t.body[i][s]);try{for(h.s();!(u=h.n()).done;){var d=u.value,b={text:d.title};if(d.link)b.link=d.link;else if(!d.title.replaceAll("_",""))continue;f.push(b)}}catch(v){h.e(v)}finally{h.f()}f.length&&(l["items"]=f,o.push(l))}}r.push(o)}this.data=r}else this.data=[]}},{key:"curriculum",get:function(){var t,e=this,a=[],n=Object(Z["a"])(this.data);try{for(n.s();!(t=n.n()).done;){var r=t.value;a.push(r.filter((function(t){return t.tabId==e.activeTab})))}}catch(i){n.e(i)}finally{n.f()}return a}}]),a}(l["d"]);Nt=Object(u["a"])([Object(l["a"])({components:{Tabs:Ct}})],Nt);var Pt=Nt,It=Pt,Mt=(a("4088"),a("b0af")),$t=a("62ad"),Rt=a("0fd9"),Bt=a("2fa4"),Gt=a("e0c7"),Ht=Object(m["a"])(It,gt,jt,!1,null,"8a95f516",null),Ut=Ht.exports;O()(Ht,{VCard:Mt["a"],VCol:$t["a"],VContainer:Ot["a"],VDivider:g["a"],VList:w["a"],VListItem:T["a"],VListItemContent:L["a"],VListItemSubtitle:L["b"],VListItemTitle:L["c"],VRow:Rt["a"],VSpacer:Bt["a"],VSubheader:Gt["a"]});var Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","grid-list-xl":""}},[a("Tabs",{on:{"emit-change-tab":t.changeTab}}),a("v-row",t._l(t.materials,(function(e,n){return a("v-col",{key:n,attrs:{cols:"12"}},[a("v-card",[a("v-card-title",[a("a",{attrs:{href:e.link,target:"_blank"},domProps:{textContent:t._s(e.name)}})])],1)],1)})),1)],1)},Wt=[],qt=a("5f54"),Jt=function(){function t(){Object(o["a"])(this,t),this.data=[],this.loadData()}return Object(d["a"])(t,[{key:"loadData",value:function(){var t=this;Object(qt["a"])("https://oruman.github.io/hsea/json/files.json").then(qt["c"]).then((function(t){return t.json()})).then(qt["b"]).then((function(e){t.data=t.convertData(e),tt["b"].publish(tt["a"].FILES_LOAD,null)}))}},{key:"convertData",value:function(t){var e,a=[],n=Object(Z["a"])(t);try{for(n.s();!(e=n.n()).done;){var r,i,o=e.value,s={id:o.id,name:o.name};s.link="https://my.hotspot.school/a/file/"+o.id+"/view/"+encodeURIComponent(o.name),s.fileKey=null===(r=o.metadata)||void 0===r||null===(i=r.gradeInfo)||void 0===i?void 0:i.filesKey,a.push(s)}}catch(c){n.e(c)}finally{n.f()}return a}},{key:"files",get:function(){return this.data}}]),t}(),Yt=new Jt,zt=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.activeTab=101,t.data=[],t}return Object(d["a"])(a,[{key:"mounted",value:function(){this.loadData(),tt["b"].subscribe(tt["a"].FILES_LOAD,this.loadData)}},{key:"beforeDestroy",value:function(){tt["b"].unsubscribe(tt["a"].FILES_LOAD,this.loadData)}},{key:"changeTab",value:function(t){this.activeTab=100*t+1}},{key:"loadData",value:function(){this.data=Yt.files}},{key:"materials",get:function(){var t=this;return this.data.filter((function(e){return e.fileKey==t.activeTab}))}}]),a}(l["d"]);zt=Object(u["a"])([Object(l["a"])({components:{Tabs:Ct}})],zt);var Qt=zt,Xt=Qt,Zt=a("99d9"),te=Object(m["a"])(Xt,Kt,Wt,!1,null,null,null),ee=te.exports;O()(te,{VCard:Mt["a"],VCardTitle:Zt["c"],VCol:$t["a"],VContainer:Ot["a"],VRow:Rt["a"]}),n["a"].use(J["a"]);var ae=[{path:"/",name:"Overview",component:_t},{path:"/curriculum",name:"Curriculum",component:Ut},{path:"/materials",name:"Materials",component:ee},{path:"/monspeaking",name:"Month Speaking",component:function(){return a.e("about").then(a.bind(null,"cdd1"))}},{path:"/hall-of-fame",name:"Hall of Fame",component:function(){return a.e("chunk-2c7cd145").then(a.bind(null,"3119"))}},{path:"/rol",name:"Read Out Loud",component:function(){return a.e("chunk-2d2371bd").then(a.bind(null,"fa5a"))}},{path:"/tol",name:"Think Out Loud",component:function(){return a.e("chunk-2f3db70e").then(a.bind(null,"e0e7"))}}],ne=new J["a"]({routes:ae}),re=ne,ie=a("2f62");n["a"].use(ie["a"]);var oe=new ie["a"].Store({state:{},mutations:{},actions:{},modules:{}}),se=a("f309");n["a"].use(se["a"]);var ce=new se["a"]({theme:{themes:{light:{primary:"#C0151E",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});a("d5e8"),a("5363");n["a"].config.productionTip=!1,new n["a"]({router:re,store:oe,vuetify:ce,render:function(t){return t(q)}}).$mount("#app")},eb59:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return i}));a("a15b"),a("d81d"),a("d3b7"),a("ac1f"),a("25f0"),a("5319");function n(t){var e=new Date(t);if(isNaN(e.getTime()))return"";var a=[];return a.push(e.getHours().toString(10)),a.push(e.getMinutes().toString(10)),a.map((function(t){return t.length<2?"0"+t:t})).join(":")}function r(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=new Date(t);if(isNaN(a.getTime()))return"";var r=[];return r.push(a.getFullYear().toString(10)),r.push((a.getMonth()+1).toString(10)),r.push(a.getDate().toString(10)),r.map((function(t){return t.length<2?"0"+t:t})).join("-")+(e?" "+n(t):"")}function i(t){return t.replace(/(https?:\/\/[^\s]+)/g,'<a target="_blank" href="$1">$1</a>')}},fde1:function(t,e,a){}});