(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/feedback/feedback"],{"03db":function(e,t,n){},"09af":function(e,t,n){"use strict";(function(e){n("ebd1");a(n("66fd"));var t=a(n("7c8f"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"52cf":function(e,t,n){"use strict";var a=n("03db"),u=n.n(a);u.a},"5ab5":function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=c(n("a34a"));function c(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,a,u,c,i){try{var o=e[c](i),r=o.value}catch(s){return void n(s)}o.done?t(r):Promise.resolve(r).then(a,u)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(a,u){var c=e.apply(t,n);function o(e){i(c,a,u,o,r,"next",e)}function r(e){i(c,a,u,o,r,"throw",e)}o(void 0)}))}}var r={data:function(){return{content:"",imageLists:[]}},methods:{del:function(e){this.imageLists.splice(e,1)},addImage:function(){var t=this,n=5-this.imageLists.length;e.chooseImage({count:n,success:function(e){var a=e.tempFilePaths;a.forEach((function(e,a){a<n&&t.imageLists.push({url:e})})),console.log(e)}})},submit:function(){var t=this;return o(u.default.mark((function n(){var a,c,i;return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=[],e.showLoading(),c=0;case 3:if(!(c<t.imageLists.length)){n.next=12;break}return i=t.imageLists[c].url,n.next=7,t.uploadFiles(i);case 7:i=n.sent,a.push(i);case 9:c++,n.next=3;break;case 12:t.updateFeedback({content:t.content,feedbackImages:a});case 13:case"end":return n.stop()}}),n)})))()},uploadFiles:function(e){return o(u.default.mark((function t(){var n;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.uploadFile({filePath:e,cloudPath:"我的.jpg"});case 2:return n=t.sent,console.log(n),t.abrupt("return",n.fileID);case 5:case"end":return t.stop()}}),t)})))()},updateFeedback:function(t){var n=t.content,a=t.feedbackImages;this.$api.update_feedback({content:n,feedbackImages:a}).then((function(t){e.hideLoading(),e.showToast({title:"反馈提交成功",icon:"none"}),setTimeout((function(){e.switchTab({url:"/pages/tabbar/my/my"})}),2e3)})).catch((function(){e.hideLoading(),e.showToast({title:"反馈提交失败 ",icon:"none"}),setTimeout((function(){e.switchTab({url:"/pages/tabbar/my/my"})}),2e3)}))}}};t.default=r}).call(this,n("543d")["default"],n("a9ff")["default"])},"7c8f":function(e,t,n){"use strict";n.r(t);var a=n("8364"),u=n("9159");for(var c in u)"default"!==c&&function(e){n.d(t,e,(function(){return u[e]}))}(c);n("52cf");var i,o=n("f0c5"),r=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);t["default"]=r.exports},8364:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return a}));var a={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"5570"))}},u=function(){var e=this,t=e.$createElement;e._self._c},c=[]},9159:function(e,t,n){"use strict";n.r(t);var a=n("5ab5"),u=n.n(a);for(var c in a)"default"!==c&&function(e){n.d(t,e,(function(){return a[e]}))}(c);t["default"]=u.a}},[["09af","common/runtime","common/vendor"]]]);