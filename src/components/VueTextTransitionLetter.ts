import { VNode, CreateElement } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class VueTextTransitionLetter extends Vue {
  @Prop({ default: false }) readonly show!: boolean
  @Prop({ default: 100 }) readonly interval!: number
  @Prop() readonly hidden!: string
  @Prop() readonly visible!: string
  @Prop() readonly regularClass!: string
  render(createElement: CreateElement): VNode {
    return createElement(
      'span',
      {
        style: {
          transitionDelay: `${this.$props.interval}ms`,
          animationDelay: `${this.$props.interval}ms`,
          display: this.$slots.default ? 'inline-block' : 'inline'
        },
        class: [
          this.$props.regularClass,
          this.$props.show ? this.$props.visible : this.$props.hidden
        ]
      },
      [this.$slots.default || ' ']
    )
  }
}
