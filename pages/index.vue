<template>
  <section class="main-content columns">
     <div class="container column is-12">
       <section class="section">
         <form-view />
         <hr />
         <result-view :calcresult="calcresult"/>
       </section>
     </div>
  </section>
</template>

<script>
import formView from '~/components/FormView.vue';
import resultView from '~/components/ResultView.vue';
export default {
    components: {
        formView,
        resultView
    },
    data: function() {
        return {
            calcresult: [
                {
                    name: '対象との直線距離(cm)',
                    value: '--'
                },
                {
                    name: '俯角(°)',
                    value: '--'
                }
            ]
        };
    }
}
</script>
