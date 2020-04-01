<template>
  <div id="app">
    <VueTextTransition
      tag="div"
      name="test"
      :show="show"
      interval="10"
      :custom-class="[{ selector: ':nth-child(odd)', class: 'test_odd' }]"
      @last-letter-transitionend="transitionEndHandler"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nisl ac
      magna ultricies rhoncus.
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
  },

  methods: {
    transitionEndHandler(e) {
      console.log(e)
      console.log('last letter is transitioned!')
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

.v--vtt-test,
.v--vtt-test_odd {
  will-change: transform, opacity;
  transition: opacity 0.3s ease-in-out, transform 1s ease-in-out;
}

.v--vtt-test_visible,
.v--vtt-test_odd {
  opacity: 1;
  transform: translateY(0);
}

.v--vtt-test_hidden {
  opacity: 0;
  transform: translateY(20px);
}

.v--vtt-test_odd_hidden {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
