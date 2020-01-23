<template>
<section id="formview">
  <h2>パラメータ入力</h2>
  <b-field label="身長(cm)"
    :type="{'is-danger':tallofmeErr}"
    :message="[
        {'数値を入力してください。':tallofmeErr}
    ]"
  >
    <b-input type="number" v-model="tallofme"></b-input>
  </b-field>
  <b-field label="頭頂部～目の距離(cm)"
    :type="{'is-danger':betweenheadandeyeErr}"
    :message="[
        {'数値を入力してください。':betweenheadandeyeErr}
    ]"
  >
    <b-input type="number" v-model="betweenheadandeye"></b-input>
  </b-field>
  <b-field label="対象の高さ(cm)"
    :type="{'is-danger':talloftgtErr}"
    :message="[
        {'数値を入力してください。':talloftgtErr}
    ]"
  >
    <b-input type="number" v-model="talloftgt"></b-input>
  </b-field>
  <b-field label="対象との水平距離(cm)"
    :type="{'is-danger':distanceErr}"
    :message="[
        {'数値を入力してください。':distanceErr}
    ]"
  >
    <b-input type="number" v-model="distance"></b-input>
  </b-field>

  <div class="buttons" style="float:right">
    <b-button type="is-primary" @click="calcuration">Calcurate!!</b-button>
    <b-button type="is-success" outlined @click="reseting">Clear</b-button>
  </div>
  <br clear="both"/>

</section>
</template>
<script>
export default {
    data: function() {
        return {
            tallofmeErr: false,
            betweenheadandeyeErr: false,
            talloftgtErr: false,
            distanceErr: false
        };
    },

    methods: {
        //計算する
        //todo: 入力チェックとアラート
        calcuration: function() {
            var isErr = false;
            this.tallofmeErr = this.betweenheadandeyeErr = this.talloftgtErr = this.distanceErr = false;

            if (!this.tallofme) {
                this.tallofmeErr = true;
                isErr = true;
            }
            if (!this.betweenheadandeye) {
                this.betweenheadandeyeErr = true;
                isErr = true;
            }
            if (!this.talloftgt) {
                this.talloftgtErr = true;
                isErr = true;
            }
            if (!this.distance) {
                this.distanceErr = true;
                isErr = true;
            }

            if (isErr) {
                return;
            }

            var height = this.tallofme - this.betweenheadandeye - this.talloftgt;
            var distance = this.distance;
            var res = this.$calcFukaku(distance, height);
            this.$nuxt.$emit('CALC_EVENT', res);
        },

        //クリアする
        reseting: function() {
            this.tallofmeErr = this.betweenheadandeyeErr = this.talloftgtErr = this.distanceErr = false;
            this.tallofme = this.betweenheadandeye = this.talloftgt = this.distance = '';
            this.$nuxt.$emit('RESET_EVENT', {});
        }
    }
}
</script>
