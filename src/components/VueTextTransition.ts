import VueTextTransitionLetter from './VueTextTransitionLetter'
import { VNode, CreateElement } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CustomSelectorData } from 'vue-text-transition'

@Component
export default class VueTextTransition extends Vue {
  @Prop({ default: 'div' }) readonly tag!: string
  @Prop({ default: false }) readonly show!: boolean
  @Prop({ default: 100 }) readonly interval!: number
  @Prop({ default: null }) readonly customClass?: CustomSelectorData[] | null
  @Prop() readonly name!: string
  render(h: CreateElement): VNode {
    const text = this.$slots?.default?.[0].text || ''
    const letters = text.split('').map((letter: string, index: number) =>
      h(
        VueTextTransitionLetter,
        {
          props: {
            show: this.$props.show,
            className: this.$props.name,
            interval: index * this.$props.interval,
            customClass: this.$props.customClass
          }
        },
        [letter]
      )
    )
    return h(this.$props.tag, {}, letters)
  }
}
