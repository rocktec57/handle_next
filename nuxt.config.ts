export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/content',
    "@nuxt/image"
  ],
  plugins: [
    { src: '~/plugins/aos.js', mode: 'client' }
  ],
  css: [ 'aos/dist/aos.css',"~/assets/css/main.css"],
  colorMode: {
    classSuffix: '',
  },
  tailwindcss: {
    configPath: 'tailwind.config.js'
  },
  build: {
    transpile: [],
    
  },
  components: true,
  i18n: {
    locales: [
      { code: "en", name: 'English', iso: "en", dir: "ltr", file: "en.json" },
      { code: "ar", name: 'Arabic', iso: "ar", dir: "rtl", file: "ar.json" },
    ],
    defaultLocale: 'en',
    strategy: "prefix_and_default",
    lazy: true,
    langDir: "lang",
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
  },
  app: {
    head: {
      title: 'Handle It',
      bodyAttrs: {
        class: 'bg-bodyWhite text-black_222 dark:bg-navyBlue dark:text-bodyWhite',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'HandleIt HandleIt HandleIt' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          hid: 'dark-mode',
          innerHTML: `
              (function() {
                const savedMode = localStorage.getItem('darkMode');
                if (savedMode === 'true') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.add('light');
                }
              })()
            `,
          type: 'text/javascript',
        }
      ],
    },


  }
})