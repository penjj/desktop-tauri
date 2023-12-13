import { createVueConfig } from '@hg/build-scripts'
import Layout from 'vite-plugin-vue-layouts'

export default createVueConfig({
  plugins: [
    Layout({
      layoutsDirs: 'src/layouts',
      pagesDirs: 'src/views',
      defaultLayout: 'default',
      importMode: name => {
        console.log(name)
        return 'async'
      },
    }),
  ],
  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
  },
})
