(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/add/add"],{"12ab":function(e,t,n){"use strict";n.r(t);var i=n("cb3c"),a=n("352c");for(var c in a)"default"!==c&&function(e){n.d(t,e,(function(){return a[e]}))}(c);var u,o=n("f0c5"),d=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);t["default"]=d.exports},"17f8":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("ac87"),a={data:function(){return{bendi:!1,index:-1,picker:["春节在家未出行","自驾出行","大巴汽车","铁路火车","飞机出行"],index2:-1,picker2:["租户","业主"],shequ_id:""}},onLoad:function(t){var n=o.qrCode,a=n.split("?id=")[1];this.shequ_id=a,e.getStorage({key:"pid",success:function(t){null===t.data&&e.login({success:function(t){(0,i.post)(that.ali_app+"sys_auth",{code:t.code}).then((function(t){e.setStorageSync("pid",t.data.pid)}))}})},fail:function(){(0,i.showModal)("异常提示","缓存内容读取失败，请重新打开再试")}})},methods:{formSubmit:function(t){var n=t.detail.value;n.shenfen=this.picker2[this.index2],n.chuxing=this.picker[this.index],n.pid=e.getStorageSync("pid"),n.shequ_id=this.shequ_id,(0,i.post)(that.ali_app+"member_add",n).then((function(t){1===t.code?e.reLaunch({url:"../pass/pass"}):(0,i.showModal)("温馨提示","登记失败，请重试")})),console.log(n)},PickerChange:function(e){this.index=e.detail.value},PickerChange2:function(e){this.index2=e.detail.value}}};t.default=a}).call(this,n("543d")["default"])},"352c":function(e,t,n){"use strict";n.r(t);var i=n("17f8"),a=n.n(i);for(var c in i)"default"!==c&&function(e){n.d(t,e,(function(){return i[e]}))}(c);t["default"]=a.a},cab5:function(e,t,n){"use strict";(function(e){n("4ab3");i(n("66fd"));var t=i(n("12ab"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},cb3c:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement;e._self._c},c=[]}},[["cab5","common/runtime","common/vendor"]]]);