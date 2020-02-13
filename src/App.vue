<template>
  <div id="app">
    <VueTextTransition tag="div" name="test" :show="show" interval="10"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nisl ac
      magna ultricies rhoncus. Aliquam libero nunc, placerat eget massa nec,
      aliquam gravida dui. Nulla semper mi accumsan erat sodales pharetra. Duis
      at facilisis dui. Suspendisse semper id urna id bibendum. Proin id risus
      non ex ultricies fringilla. Mauris non mauris at nulla volutpat
      condimentum. Ut ac dictum turpis, eget pellentesque diam. Vestibulum
      pellentesque sit amet lacus vel posuere. Nam fermentum, risus vitae
      egestas imperdiet, nisi eros accumsan est, vestibulum bibendum massa lacus
      eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
      fermentum nulla id tellus placerat aliquam. Cras metus leo, suscipit eu
      nunc quis, lacinia pulvinar odio. Sed ut nibh facilisis, faucibus risus
      quis, dictum ante. Aenean congue sed dolor a rhoncus. Donec metus erat,
      cursus id dui eget, fringilla porta ex. Fusce finibus interdum posuere.
      Curabitur nisl libero, ullamcorper id suscipit vitae, pulvinar eu quam.
      Fusce libero neque, vestibulum in blandit non, porttitor in odio. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. In hac habitasse platea dictumst. Sed quis urna urna. Quisque
      ut quam ut velit posuere facilisis. Proin auctor quam nec erat accumsan,
      sit amet faucibus sapien bibendum. Phasellus ullamcorper arcu vitae mauris
      ultrices lacinia. Fusce eget sem mi. Morbi lobortis felis vitae luctus
      iaculis. Sed auctor ex at orci volutpat tristique. Integer vitae sodales
      ligula. Sed tincidunt mollis erat sit amet laoreet. Aenean venenatis purus
      at libero facilisis, non iaculis lectus blandit. Nullam egestas quam quam,
      nec ornare libero fermentum a. Vivamus hendrerit interdum egestas.
      Phasellus ex est, tempor quis eros et, blandit tempor ex. Aliquam viverra
      scelerisque pellentesque. Praesent ultricies lacus eget ornare semper.
      Nullam ipsum felis, aliquam venenatis dictum in, porttitor sed sem. Fusce
      vel pharetra diam, faucibus laoreet lacus. Curabitur tincidunt neque quis
      placerat tempus. Fusce aliquet posuere tellus. Vestibulum vel consectetur
      est. Morbi eros tortor, pulvinar at mollis quis, semper a nibh. Vestibulum
      ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
      Curae; Nam neque lacus, consequat ac metus eu, vulputate posuere velit.
      Integer id magna tincidunt, ultricies elit rutrum, consectetur urna. Morbi
      facilisis urna vel vulputate euismod. Aenean mollis blandit vehicula.
      Nulla eu condimentum massa. Maecenas sit amet libero nulla. Phasellus
      malesuada mauris id eleifend facilisis. Quisque gravida purus nibh, ac
      consequat diam suscipit non.</VueTextTransition
    >
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

.v--test {
  will-change: transform, opacity;
  transition: opacity 0.3s ease-in-out, transform 1s ease-in-out;
}

.v--test_visible {
  opacity: 1;
  transform: translateY(0);
}

.v--test_hidden {
  opacity: 0;
  transform: translateY(20px);
}
</style>
