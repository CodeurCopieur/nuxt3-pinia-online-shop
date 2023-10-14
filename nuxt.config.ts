// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt','nuxt-icon', '@pinia/nuxt'],
  ssr: false, // Désactivez le mode de rendu universel en développement
  unocss: {
    uno: true,
    preflight: true,
    shortcuts: {
      // shortcuts to multiple utilities

      'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
      'btn-green': 'text-white bg-green-500 hover:bg-green-700',
      // single utility alias
      
      'red': 'text-red-100'
    },
    theme: {
      // ...
      colors: {
        "weather-primary": "#0ea5e9",
        "weather-secondary": "#004E71",
        "weather-tertiary": "#f43f5e",
      },
      fontFamily: {
        Roboto: ['Roboto']
      }
    }
  },
  css:['@fortawesome/fontawesome-free/css/all.css'],
  devtools: { enabled: true }
})
