(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1674820a"],{"480d":function(t,r,l){"use strict";l.r(r);var a=function(){var t=this,r=t.$createElement,l=t._self._c||r;return l("el-scrollbar",[l("el-main",{staticClass:"app-container documentation-container",staticStyle:{margin:"10px"}},[l("el-col",{staticStyle:{display:"flex","margin-bottom":"10px",width:"800px"}},[l("el-input",{attrs:{placeholder:"黏贴网址"},model:{value:t.pastUrl,callback:function(r){t.pastUrl=r},expression:"pastUrl"}}),l("el-button",{attrs:{type:"primary"},on:{click:t.startBrk}},[t._v("提交")])],1),l("el-col",{staticStyle:{height:"calc(100vh - 200px)",background:"#00000059"}},[t.reload?l("iframe",{attrs:{width:"100%",height:"100%",allowtransparency:"true",frameborder:"0",scrolling:"no",allowfullscreen:"true",src:t.myUrl}}):t._e()])],1)],1)},n=[],e={name:"viplinebrk",data:function(){return{pastUrl:"",reload:!1,okjx:"https://okjx.cc/?url=",myUrl:""}},mounted:function(){this.reload=!0},methods:{goPage:function(t){this.myUrl=t+this.pastUrl,window.open(this.myUrl,"_blank")},startBrk:function(){return console.log(this.myUrl=this.okjx+this.pastUrl),this.myUrl=this.okjx+this.pastUrl}}},i=e,o=(l("65a5"),l("54bc"),l("2877")),s=Object(o["a"])(i,a,n,!1,null,"6f85bb6d",null);r["default"]=s.exports},"54bc":function(t,r,l){"use strict";l("a519")},"65a5":function(t,r,l){"use strict";l("6882")},6882:function(t,r,l){},a519:function(t,r,l){}}]);