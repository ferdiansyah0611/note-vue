module.exports = {
  content: [
    'index.html', './**/*.vue', './**/**/*.vue'
  ],
  theme: {
    extend: {},
  },
  mode: 'jit',
  plugins: [
    require('@tailwindcss/forms')
  ],
}
