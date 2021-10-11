module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'background': 'url(https://hus3yin.xyz/assets/images/background.png)'
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
