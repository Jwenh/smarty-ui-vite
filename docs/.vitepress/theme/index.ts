import DefaultTheme from 'vitepress/theme'
import SmartyUI from '../../../src/entry'
import Demo from './Demo.vue'
import './custom.scss'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(SmartyUI)
    app.component('Demo', Demo)
  }
}