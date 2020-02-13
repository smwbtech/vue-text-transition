<script lang="ts">
import { VNode, CreateElement } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class VueTextTransition extends Vue {
  @Prop({ default: 'div' }) readonly tag!: HTMLElementTagNameMap
  render(createElement: CreateElement): VNode {
    const text = this.$slots?.default?.[0].text || ''
    const letters = text.split('').map(letter => createElement('span', letter))
    return createElement(this.$props.tag, {}, letters)
  }
}
</script>
