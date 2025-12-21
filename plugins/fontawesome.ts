import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun, faMoon, faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
// @ts-ignore
const defineNuxtPlugin = (plugin: any) => plugin

config.autoAddCss = false

library.add(faSun, faMoon, faGithub, faCode)

export default defineNuxtPlugin((nuxtApp: any) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
