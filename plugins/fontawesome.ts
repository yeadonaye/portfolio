import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
// @ts-ignore
const defineNuxtPlugin = (plugin: any) => plugin

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faSun, faMoon, faGithub)

export default defineNuxtPlugin((nuxtApp: any) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
