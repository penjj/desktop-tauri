import { createWebHashHistory, createRouter, RouterView } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

import 'virtual:uno.css'
import '@unocss/reset/sanitize/sanitize.css'

const router = createRouter({
  history: createWebHashHistory(),
  extendRoutes: routes => {
    /**
     * 自动 layout, 需要在页面 route 块中使用以下语法, 如果不设置，将使用 default
     * <route lang="yaml">
     * meta:
     *   layout: fullscreen
     * </route>
     */
    return setupLayouts(routes)
  },
})

createApp(RouterView).use(router).mount('#app')
