(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{158:function(t,e,l){"use strict";l.r(e);var n={methods:{calcuration:function(){var t=this.tallofme-this.betweenheadandeye-this.talloftgt,e=this.distance,l=this.$calcFukaku(e,t);this.$nuxt.$emit("CALC_EVENT",l)},reseting:function(){this.tallofme=this.betweenheadandeye=this.talloftgt=this.distance="",this.$refs.observer.reset(),this.$nuxt.$emit("RESET_EVENT",{})}}},r=l(28),c=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{attrs:{id:"formview"}},[l("h2",[t._v("パラメータ入力")]),t._v(" "),l("ValidationObserver",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var n=e.passes;return[l("div",{staticClass:"columns"},[l("div",{staticClass:"column is-half"},[l("ValidationProvider",{attrs:{rules:"required|numeric|between:1,999",name:"身長"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[l("b-field",{attrs:{label:"身長(cm)",type:{"is-danger":n[0]},message:n}},[l("b-input",{attrs:{type:"number"},model:{value:t.tallofme,callback:function(e){t.tallofme=e},expression:"tallofme"}})],1)]}}],null,!0)})],1),t._v(" "),l("div",{staticClass:"column is-half"},[l("ValidationProvider",{attrs:{rules:"required|numeric|between:1,999",name:"頭頂部～目の距離"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[l("b-field",{attrs:{label:"頭頂部～目の距離(cm)",type:{"is-danger":n[0]},message:n}},[l("b-input",{attrs:{type:"number"},model:{value:t.betweenheadandeye,callback:function(e){t.betweenheadandeye=e},expression:"betweenheadandeye"}})],1)]}}],null,!0)})],1)]),t._v(" "),l("div",{staticClass:"columns"},[l("div",{staticClass:"column is-half"},[l("ValidationProvider",{attrs:{rules:"required|numeric|between:0,999",name:"対象の高さ"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[l("b-field",{attrs:{label:"対象の高さ(cm)",type:{"is-danger":n[0]},message:n}},[l("b-input",{attrs:{type:"number"},model:{value:t.talloftgt,callback:function(e){t.talloftgt=e},expression:"talloftgt"}})],1)]}}],null,!0)})],1),t._v(" "),l("div",{staticClass:"column is-half"},[l("ValidationProvider",{attrs:{rules:"required|numeric|between:0,999",name:"対象との水平距離"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[l("b-field",{attrs:{label:"対象との水平距離(cm)",type:{"is-danger":n[0]},message:n}},[l("b-input",{attrs:{type:"number"},model:{value:t.distance,callback:function(e){t.distance=e},expression:"distance"}})],1)]}}],null,!0)})],1)]),t._v(" "),l("div",{staticClass:"buttons",staticStyle:{float:"right"}},[l("b-button",{attrs:{type:"is-primary"},on:{click:function(e){return n(t.calcuration)}}},[t._v("Calcurate!!")]),t._v(" "),l("b-button",{attrs:{type:"is-success",outlined:""},on:{click:t.reseting}},[t._v("Clear")])],1),t._v(" "),l("br",{attrs:{clear:"both"}})]}}])})],1)}),[],!1,null,null,null).exports,o=(l(72),l(73),l(14),{data:function(){return{columns:[{field:"name",label:"項目"},{field:"value",label:"値"}]}},props:["calcresult"],created:function(){var t=this;this.$nuxt.$on("CALC_EVENT",(function(data){t.calcresult[0].value=data.length.toString(),t.calcresult[1].value=data.angle.toString()})),this.$nuxt.$on("RESET_EVENT",(function(data){t.calcresult[0].value="--",t.calcresult[1].value="--"}))}}),d={components:{formView:c,resultView:Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"resultview"}},[e("h2",[this._v("計算結果")]),this._v(" "),e("b-table",{attrs:{data:this.calcresult,columns:this.columns}})],1)}),[],!1,null,null,null).exports},data:function(){return{calcresult:[{name:"対象との直線距離(cm)",value:"--"},{name:"俯角(°)",value:"--"}]}}},f=Object(r.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"main-content columns"},[e("div",{staticClass:"container column is-12"},[e("section",{staticClass:"section"},[e("form-view"),this._v(" "),e("hr"),this._v(" "),e("result-view",{attrs:{calcresult:this.calcresult}})],1)])])}),[],!1,null,null,null);e.default=f.exports}}]);