import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// استايل Vuetify
import 'vuetify/styles'

// استيراد مكتبة الأيقونات
import '@mdi/font/css/materialdesignicons.css'

// Vuetify setup
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
