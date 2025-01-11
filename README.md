二次封装测试包
```aiignore
npm install hl-xx-ui
```

```aiignore
// main.ts
import { createApp } from 'vue'
import hlxxui from 'hl-xx-ui'
import 'hl-xx-ui/dist/hl-xx-ui.css'
import App from './App.vue'

const app = createApp(App)

app.use(hlxxui)
app.mount('#app')
```

使用
```aiignore
<hl-button fuck>按钮</hl-button>

```
