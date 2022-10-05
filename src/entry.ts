import { App } from 'vue'
import SFCButton from './button/SFCButton.vue'
import JSXButton from './button'
import 'uno.css'
// 支持按需引入
export { SFCButton, JSXButton }
// 全局引入
export default {
  install(app: App): void {
    app.component(SFCButton.name, SFCButton)
    app.component(JSXButton.name, JSXButton)
  },
}
