(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{151:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{tallofmeErr:!1,betweenheadandeyeErr:!1,talloftgtErr:!1,distanceErr:!1}},methods:{calcuration:function(){var t=!1;if(this.tallofmeErr=this.betweenheadandeyeErr=this.talloftgtErr=this.distanceErr=!1,this.tallofme||(this.tallofmeErr=!0,t=!0),this.betweenheadandeye||(this.betweenheadandeyeErr=!0,t=!0),this.talloftgt||(this.talloftgtErr=!0,t=!0),this.distance||(this.distanceErr=!0,t=!0),!t){var e=this.tallofme-this.betweenheadandeye-this.talloftgt,l=this.distance,n=this.$calcFukaku(l,e);this.$nuxt.$emit("CALC_EVENT",n)}},reseting:function(){this.tallofmeErr=this.betweenheadandeyeErr=this.talloftgtErr=this.distanceErr=!1,this.tallofme=this.betweenheadandeye=this.talloftgt=this.distance="",this.$nuxt.$emit("RESET_EVENT",{})}}},r=l(23),c=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{attrs:{id:"formview"}},[l("h2",[t._v("パラメータ入力")]),t._v(" "),l("b-field",{attrs:{label:"身長(cm)",type:{"is-danger":t.tallofmeErr},message:[{"数値を入力してください。":t.tallofmeErr}]}},[l("b-input",{attrs:{type:"number"},model:{value:t.tallofme,callback:function(e){t.tallofme=e},expression:"tallofme"}})],1),t._v(" "),l("b-field",{attrs:{label:"頭頂部～目の距離(cm)",type:{"is-danger":t.betweenheadandeyeErr},message:[{"数値を入力してください。":t.betweenheadandeyeErr}]}},[l("b-input",{attrs:{type:"number"},model:{value:t.betweenheadandeye,callback:function(e){t.betweenheadandeye=e},expression:"betweenheadandeye"}})],1),t._v(" "),l("b-field",{attrs:{label:"対象の高さ(cm)",type:{"is-danger":t.talloftgtErr},message:[{"数値を入力してください。":t.talloftgtErr}]}},[l("b-input",{attrs:{type:"number"},model:{value:t.talloftgt,callback:function(e){t.talloftgt=e},expression:"talloftgt"}})],1),t._v(" "),l("b-field",{attrs:{label:"対象との水平距離(cm)",type:{"is-danger":t.distanceErr},message:[{"数値を入力してください。":t.distanceErr}]}},[l("b-input",{attrs:{type:"number"},model:{value:t.distance,callback:function(e){t.distance=e},expression:"distance"}})],1),t._v(" "),l("div",{staticClass:"buttons",staticStyle:{float:"right"}},[l("b-button",{attrs:{type:"is-primary"},on:{click:t.calcuration}},[t._v("Calcurate!!")]),t._v(" "),l("b-button",{attrs:{type:"is-success",outlined:""},on:{click:t.reseting}},[t._v("Clear")])],1),t._v(" "),l("br",{attrs:{clear:"both"}})],1)}),[],!1,null,null,null).exports,o=(l(68),l(69),l(15),{data:function(){return{columns:[{field:"name",label:"項目"},{field:"value",label:"値"}]}},props:["calcresult"],created:function(){var t=this;this.$nuxt.$on("CALC_EVENT",(function(data){t.calcresult[0].value=data.length.toString(),t.calcresult[1].value=data.angle.toString()})),this.$nuxt.$on("RESET_EVENT",(function(data){t.calcresult[0].value="--",t.calcresult[1].value="--"}))}}),d={components:{formView:c,resultView:Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"resultview"}},[e("h2",[this._v("計算結果")]),this._v(" "),e("b-table",{attrs:{data:this.calcresult,columns:this.columns}})],1)}),[],!1,null,null,null).exports},data:function(){return{calcresult:[{name:"対象との直線距離(cm)",value:"--"},{name:"俯角(°)",value:"--"}]}}},h=Object(r.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"main-content columns"},[e("div",{staticClass:"container column is-12"},[e("section",{staticClass:"section"},[e("form-view"),this._v(" "),e("hr"),this._v(" "),e("result-view",{attrs:{calcresult:this.calcresult}})],1)])])}),[],!1,null,null,null);e.default=h.exports}}]);