import VueTextTransitionLetter from './VueTextTransitionLetter'
import { VNode, CreateElement } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class VueTextTransition extends Vue {
  @Prop({ default: 'div' }) readonly tag!: HTMLElementTagNameMap
  @Prop({ default: false }) readonly show!: boolean
  @Prop({ default: 100 }) readonly interval!: number
  @Prop() readonly name!: string
  render(h: CreateElement): VNode {
    const text = this.$slots?.default?.[0].text || ''
    const letters = text.split('').map((letter: string, index: number) =>
      h(
        VueTextTransitionLetter,
        {
          props: {
            show: this.$props.show,
            interval: index * this.$props.interval,
            hidden: `v--${this.$props.name}_hidden`,
            visible: `v--${this.$props.name}_visible`,
            regularClass: `v--${this.$props.name}`
          }
        },
        [letter]
      )
    )
    return h(this.$props.tag, {}, letters)
  }
}
