# vue-text-transition

The component to animate your text letter by letter. You can bind different classes to each letter using css selectors.

## Installation

```
npm install vue-text-transition
```

Import component and register it locally

```javascript
import VueTextTransition from 'vue-text-transition'
export default {
  components: {
    VueTextTransition
  }
}
```

Or register the component globally in your app entry point (main.js or as you called it)

```javascript
import Vue from 'vue'
import VueTextTransition from 'vue-text-transition'
Vue.component('vue-text-transition', VueTextTransition)
```

## Basic usage

Put the component into your template

```html
<VueTextTransition tag="h1" name="fade" :show="displayСonditions" :interval="40"
  >Text to animate</VueTextTransition
>
```

### Props

| Property         | Type    | Default | Description                                                                                                                                                                          |
| ---------------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **tag**          | string  | div     | Tag in which text will be wrapped                                                                                                                                                    |
| **name**         | string  | -       | Name of class that will be added to each letter. it will be transformed in v--vtt-fade (base class), v-vtt-fade_hidden (when show = false) and v-vtt-fade_visible (when show = true) |
| **show**         | boolean | false   | Condition for changing class from hidden to visible and back                                                                                                                         |
| **interval**     | number  | 100     | It will be set for transition-delay and animation-delay for each letter im ms                                                                                                        |
| **custom-class** | array   | null    | array of objects implementing following interface {selector: string, class: string}                                                                                                  |

```html
<VueTextTransition
  tag="h1"
  name="fade"
  :show="displayСonditions"
  :interval="40"
  :custom-class="[{selector: ':nth-child(odd)', class: 'odd-class'}]"
  >Text to animate</VueTextTransition
>
```

> :exclamation: every letter will be transitioned or animated, it can cause performance issues, do not use this package for large paragraphs of text to avoid lags

## LICENSE

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
