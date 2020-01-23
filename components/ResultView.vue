<template>
<section id="resultview">
  <h2>計算結果</h2>

  <b-table :data="calcresult" :columns="columns"></b-table>

</section>
</template>
<script>
export default {
    data() {
        return {
            columns: [
                {
                    field: 'name',
                    label: '項目',
                },
                {
                    field: 'value',
                    label: '値',
                }
            ]
        };
    },
    props: [
        'calcresult'
    ],
    created() {
        this.$nuxt.$on('CALC_EVENT', data => {
            this.calcresult[0].value = data.length.toString();
            this.calcresult[1].value = data.angle.toString();
        });
        this.$nuxt.$on('RESET_EVENT', data => {
            this.calcresult[0].value = '--';
            this.calcresult[1].value = '--';
        });
    }
}
</script>
