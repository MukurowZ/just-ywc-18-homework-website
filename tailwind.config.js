/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    aspectRatio: { // defaults to {}
      '2/3': [2, 3],
      '3/4': [3, 4],
      '5/6': [5, 6],
      '3/2': [3, 2],
      '16/9': [16, 9],
    },
    extend: {
      fontFamily: {
        sans: 'DB Moment X, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      colors: {
        'sacict-yellow': '#F2C200',
        'sacict-red': '#FD6055',
        'sacict-gray-lightest': '#F7F7F7',
        'sacict-gray-light': '#F4F5F5',
        'sacict-gray': '#B4B4B4',
        'sacict-gray-dark': '#404142',
        'sacict-blend': 'rgba(128, 128, 128, 0.95)',
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-aspect-ratio'),
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
