(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e9b8b34e"],{2906:function(t,e,r){"use strict";r("51d4")},"480d":function(t,e,r){"use strict";r.r(e);var l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-scrollbar",[r("el-main",{staticClass:"app-container documentation-container",staticStyle:{margin:"10px"}},[r("el-col",{staticStyle:{display:"flex","margin-bottom":"10px",width:"800px"}},[r("el-input",{attrs:{placeholder:"黏贴网址"},model:{value:t.pastUrl,callback:function(e){t.pastUrl=e},expression:"pastUrl"}}),r("el-button",{attrs:{type:"primary"},on:{click:t.startBrk}},[t._v("提交")])],1),r("el-col",{staticStyle:{height:"calc(100vh - 200px)",background:"#00000059"}},[t.reload?r("iframe",{attrs:{width:"100%",height:"100%",allowtransparency:"true",frameborder:"0",scrolling:"no",allowfullscreen:"true",src:t.myUrl}}):t._e()])],1)],1)},n=[],a={name:"viplinebrk",data:function(){return{pastUrl:"",reload:!1,okjx:"https://okjx.cc/?url=",myUrl:""}},mounted:function(){this.reload=!0},methods:{goPage:function(t){this.myUrl=t+this.pastUrl,window.open(this.myUrl,"_blank")},startBrk:function(){return console.log(this.myUrl=this.okjx+this.pastUrl),this.myUrl=this.okjx+this.pastUrl}}},i=a,o=(r("c9f5"),r("2906"),r("2877")),s=Object(o["a"])(i,l,n,!1,null,"6f85bb6d",null);e["default"]=s.exports},"51d4":function(t,e,r){},c9f5:function(t,e,r){"use strict";r("e383")},e383:function(t,e,r){}}]);