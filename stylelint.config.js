/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    '@dreamsicle.io/stylelint-config-tailwindcss',
    'stylelint-config-recess-order',
  ],
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  reportUnscopedDisables: true,
}
