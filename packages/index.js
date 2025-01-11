import { ElButton } from 'element-plus'; // 引入 Element Plus 组件
import 'element-plus/dist/index.css'
import HlButton from './hl-button/index.vue';
const components = {
    HlButton
};
export default {
    install(app) {
        // 全局注册 Element Plus 组件
        app.component(ElButton.name, ElButton);
        // 全局注册业务组件
        for (const [key, component] of Object.entries(components)) {
            app.component(key, component);
        }
    }
};
// 按需导出组件
export { HlButton };
//# sourceMappingURL=index.js.map