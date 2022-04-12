import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'primevue/button': 'primevue/button/sfc',
      'primevue/inputtext': 'primevue/inputtext/sfc',
      'primevue/chip': 'primevue/chip/sfc'
    }
  }
})
