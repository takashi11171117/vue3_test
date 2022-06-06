import { createApp } from 'vue'
import App from './App.vue'
import SampleComponent from './components/SampleComponents.vue'

createApp(App).component('SampleComponent', SampleComponent).mount('#app')
