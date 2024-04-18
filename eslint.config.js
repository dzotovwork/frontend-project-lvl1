import stylisticJs from '@stylistic/eslint-plugin-js'

export default [{
  plugins: {
    '@stylistic/js': stylisticJs,
  },
  rules: {
    "no-console": "off",
    '@stylistic/js/indent': ['error', 2],
  },
}, ];