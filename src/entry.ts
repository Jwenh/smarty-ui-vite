import { App } from 'vue'
import MyButton from './button'
import SFCButton from './button/SFCButton.vue'
import JSXButton from './button/JSXButton'
import 'uno.css'
// 支持按需引入
export {
  MyButton,
  SFCButton,
  JSXButton
}
// 全局引入
export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  }
}