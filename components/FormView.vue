<template>
<section id="formview">
<ValidationObserver ref="observer" v-slot="{ passes }">
  <h2>パラメータ入力</h2>
  <ValidationProvider rules="required|numeric|between:1,999" name="身長" v-slot="{ errors }">
  <b-field label="身長(cm)"
    :type="{'is-danger':errors[0]}"
    :message="errors"
  >
    <b-input type="number" v-model="tallofme"></b-input>
  </b-field>
  </ValidationProvider>

  <ValidationProvider rules="required|numeric|between:1,999" name="頭頂部～目の距離" v-slot="{ errors }">
  <b-field label="頭頂部～目の距離(cm)"
    :type="{'is-danger':errors[0]}"
    :message="errors"
  >
    <b-input type="number" v-model="betweenheadandeye"></b-input>
  </b-field>
  </ValidationProvider>

  <ValidationProvider rules="required|numeric|between:0,999" name="対象の高さ" v-slot="{ errors }">
  <b-field label="対象の高さ(cm)"
    :type="{'is-danger':errors[0]}"
    :message="errors"
  >
    <b-input type="number" v-model="talloftgt"></b-input>
  </b-field>
  </ValidationProvider>

  <ValidationProvider rules="required|numeric|between:0,999" name="対象との水平距離" v-slot="{ errors }">
  <b-field label="対象との水平距離(cm)"
    :type="{'is-danger':errors[0]}"
    :message="errors"
  >
    <b-input type="number" v-model="distance"></b-input>
  </b-field>
  </ValidationProvider>

  <div class="buttons" style="float:right">
    <b-button type="is-primary" @click="passes(calcuration)">Calcurate!!</b-button>
    <b-button type="is-success" outlined @click="reseting">Clear</b-button>
  </div>
  <br clear="both"/>
  </ValidationObserver>

</section>
</template>
<script>
export default {
    methods: {
        //計算する
        calcuration: function() {
            var height = this.tallofme - this.betweenheadandeye - this.talloftgt;
            var distance = this.distance;
            var res = this.$calcFukaku(distance, height);
            this.$nuxt.$emit('CALC_EVENT', res);
        },

        //クリアする
        reseting: function() {
            //this.tallofmeErr = this.betweenheadandeyeErr = this.talloftgtErr = this.distanceErr = false;
            this.tallofme = this.betweenheadandeye = this.talloftgt = this.distance = '';
            this.$refs.observer.reset();
            this.$nuxt.$emit('RESET_EVENT', {});
        }
    }
}
</script>
