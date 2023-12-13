import {
  defineConfig,
  presetHe,
  presetUno,
  presetAttributify,
  presetIcons,
} from '@hg/build-scripts/unocss'

export default defineConfig({
  presets: [presetHe(), presetUno(), presetAttributify(), presetIcons()],
})
