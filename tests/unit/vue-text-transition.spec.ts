import { mount, Wrapper } from '@vue/test-utils'
import VueTextTransition from '@/components/VueTextTransition'
import { VNode } from 'vue/types/umd'

describe('Testing VueTextTransitiot.ts', () => {
  let cmp: Wrapper<VueTextTransition>

  beforeEach(() => {
    cmp = mount(VueTextTransition, {
      propsData: {
        tag: 'div',
        name: 'test-class',
        interval: 50
      },
      slots: {
        default: 'Some test text'
      }
    })
  })

  it('VueTextTransitiot should exist', () => {
    expect(cmp.exists()).toBeTruthy()
  })

  it('VueTextTransitiot should be VueInstance', () => {
    expect(cmp.isVueInstance()).toBeTruthy()
  })

  describe('Testing rendering', () => {
    it('VueTextTransitiot should have proper text', () => {
      expect(cmp.text()).toMatch('Some test text')
    })

    it('VueTextTransitiot should have span with class', () => {
      const elem = cmp.findAll('.v--vtt-test-class')
      expect(elem.exists()).toBeTruthy()
    })

    it('VueTextTransitiot should have span with class', () => {
      const elem = cmp.findAll('.v--vtt-test-class_hidden')
      expect(elem.exists()).toBeTruthy()
    })

    it('VueTextTransitiot should have span with class', () => {
      cmp = mount(VueTextTransition, {
        propsData: {
          tag: 'div',
          name: 'test-class',
          interval: 50,
          show: true
        },
        slots: {
          default: 'Some test text'
        }
      })
      const elem = cmp.find('.v--vtt-test-class_visible')
      expect(elem.exists()).toBeTruthy()
    })

    it('VueTextTransitiot should have span with class', done => {
      cmp = mount(VueTextTransition, {
        propsData: {
          tag: 'div',
          name: 'test-class',
          interval: 50,
          show: false,
          customClass: [
            { selector: ':nth-child(odd)', class: 'test-odd-class' }
          ]
        },
        slots: {
          default: 'Some test text'
        }
      })
      cmp.vm.$nextTick(() => {
        const elem = cmp.find('.v--vtt-test-odd-class')
        expect(elem.exists()).toBeTruthy()
        done()
      })
    })
  })
})
