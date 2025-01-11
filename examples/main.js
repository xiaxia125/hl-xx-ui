import { createApp } from 'vue'
import './style.css'

// import ElementPlus from 'element-plus'

// import 'element-plus/dist/index.css'
import hlxxui from 'hl-xx-ui'
import 'hl-xx-ui/dist/hl-xx-ui.css'

import App from './App.vue'

createApp(App).use(hlxxui).mount('#app')
