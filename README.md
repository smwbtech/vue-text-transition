# vue-text-transition

[![vue](https://img.shields.io/badge/Vue-2.x-green.svg)](https://vuejs.org/index.html)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/smwbtech/vue-text-transition/blob/master/LICENSE.md)
[![Build Status](https://travis-ci.org/smwbtech/vue-text-transition.svg?branch=master)](https://travis-ci.org/smwbtech/vue-text-transition)
[![Coverage Status](https://coveralls.io/repos/github/smwbtech/vue-text-transition/badge.svg?branch=master)](https://coveralls.io/github/smwbtech/vue-text-transition?branch=master)
[![Size](https://badgen.net/bundlephobia/minzip/vue-text-transition)](https://bundlephobia.com/result?p=vue-text-transition@1.0.6)

![Gif Image](https://raw.githubusercontent.com/smwbtech/vue-text-transition/master/public/vue-text-transition.gif)

The component to animate your text letter by letter. You can bind different classes to each letter using css selectors.

####[Live demo](https://codesandbox.io/s/headless-voice-h18hg?fontsize=14&hidenavigation=1&theme=dark)

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

Add some styles

```css
.v--vtt-fade {
  will-change: transform, opacity;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.v--vtt-fade_visible {
  opacity: 1;
  transform: translateY(0);
}

.v--vtt-fade_hidden {
  opacity: 0;
  transform: translateY(20px);
}
```

### Props

| Property         | Type    | Default | Description                                                                                                                                                                            |
| ---------------- | ------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **tag**          | string  | div     | Tag in which text will be wrapped                                                                                                                                                      |
| **name**         | string  | -       | Name of class that will be added to each letter. it will be transformed in v--vtt-fade (base class), v--vtt-fade_hidden (when show = false) and v--vtt-fade_visible (when show = true) |
| **show**         | boolean | false   | Condition for changing class from hidden to visible and back                                                                                                                           |
| **interval**     | number  | 100     | It will be set for transition-delay and animation-delay for each letter im ms                                                                                                          |
| **custom-class** | array   | null    | array of objects implementing following interface {selector: string, class: string}                                                                                                    |

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

```css
.v--vtt-fade,
.v--vtt-odd-class {
  will-change: transform, opacity;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.v--vtt-fade_visible,
.v--vtt-odd-class_visible {
  opacity: 1;
  transform: translateY(0);
}

.v--vtt-fade_hidden {
  opacity: 0;
  transform: translateY(20px);
}

.v--vtt-odd-class_hidden {
  opacity: 0;
  transform: translateY(-20px);
}
```

> :exclamation: every letter will be transitioned or animated, it can cause performance issues, do not use this package for large paragraphs of text to avoid lags

## LICENSE

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
