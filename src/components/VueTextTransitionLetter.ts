import { VNode, CreateElement } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CustomSelectorData } from 'vue-text-transition'

@Component
export default class VueTextTransitionLetter extends Vue {
  @Prop({ default: false }) readonly show!: boolean
  @Prop({ default: 100 }) readonly interval!: number
  @Prop({ required: true }) readonly className!: string
  @Prop({ default: null }) readonly customClass?: CustomSelectorData[] | null

  baseClass = ''

  created() {
    this.baseClass = this.$props.className
  }

  mounted() {
    if (this.$props.customClass) {
      for (const item of this.$props.customClass) {
        if (this.$el.matches(item.selector)) {
          this.baseClass = item.class
          break
        }
      }
    }
  }

  get visibleClass(): string {
    return `v--vtt-${this.baseClass}_visible`
  }

  get hiddenClass(): string {
    return `v--vtt-${this.baseClass}_hidden`
  }

  get regularClass(): string {
    return `v--vtt-${this.baseClass}`
  }

  render(h: CreateElement): VNode {
    const letter = h(
      'span',
      {
        style: {
          transitionDelay: `${this.$props.interval}ms`,
          animationDelay: `${this.$props.interval}ms`,
          display: this.$slots.default ? 'inline-block' : 'inline'
        },
        class: [
          this.regularClass,
          this.$props.show ? this.visibleClass : this.hiddenClass
        ]
      },
      [this.$slots.default || ' ']
    )
    return letter
  }
}
