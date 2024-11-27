import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

try {
  createApp(App).mount('#app')
} catch (error) {
  console.error('Failed to mount Vue app:', error)
}