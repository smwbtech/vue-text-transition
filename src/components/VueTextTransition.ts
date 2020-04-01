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
    const letters = text
      .split('')
      .map((letter: string, index: number, arr: string[]) =>
        h(
          VueTextTransitionLetter,
          {
            props: {
              show: this.$props.show,
              className: this.$props.name,
              interval: index * this.$props.interval,
              customClass: this.$props.customClass,
              isLast: arr.length - 1 === index
            },
            on: {
              'last-letter-transitionend': /* istanbul ignore next */ (
                e: Event
              ) => this.$emit('last-letter-transitionend', e),

              'last-letter-animationend': /* istanbul ignore next */ (
                e: Event
              ) => this.$emit('last-letter-animationend', e)
            }
          },
          [letter]
        )
      )
    return h(this.$props.tag, {}, letters)
  }
}
