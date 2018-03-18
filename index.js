module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/fieldwork',
  ].map(require.resolve),
  rules: {}
}
