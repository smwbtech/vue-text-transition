<template>
  <div id="app">
    <VueTextTransition
      tag="div"
      name="test"
      :show="show"
      interval="10"
      :custom-class="[{ selector: ':nth-child(odd)', class: 'test_odd' }]"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nisl ac
      magna ultricies rhoncus. Aliquam libero nunc, placerat eget massa nec,
      aliquam gravida dui. Nulla semper mi accumsan erat sodales pharetra. Duis
      at facilisis dui. Suspendisse semper id urna id bibendum. Proin id risus
      non ex ultricies fringilla. Mauris non mauris at nulla volutpat
      condimentum. Ut ac dictum turpis, eget pellentesque diam. Vestibulum
      pellentesque sit amet lacus vel posuere. Nam fermentum, risus vitae
      egestas imperdiet, nisi eros accumsan est, vestibulum bibendum massa lacus
      eu dolor.
    </VueTextTransition>
    <button @click="show = !show">Toggle show</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VueTextTransition from '@/components/VueTextTransition'

@Component({
  components: {
    VueTextTransition
  },

  data() {
    return {
      show: false
    }
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div {
  overflow: hidden;
}

.v--test,
.v--test_odd {
  will-change: transform, opacity;
  transition: opacity 0.3s ease-in-out, transform 1s ease-in-out;
}

.v--test_visible,
.v--test_odd_visible {
  opacity: 1;
  transform: translateY(0);
}

.v--test_hidden {
  opacity: 0;
  transform: translateY(20px);
}

.v--test_odd_hidden {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
