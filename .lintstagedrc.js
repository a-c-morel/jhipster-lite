export default {
  '{src/test/javascript,src/main/webapp}/**/*.{js,ts,tsx,vue}': ['eslint --fix'],
  'src/main/style/**/*.{css,scss}': ['stylelint --fix'],
  'src/main/style/**/*.pug': ['eslint --fix'],
  '{{src/**/,}*.{md,json,yml,html,vue,java,xml,feature},*.{js,ts},.github/**/*.yml,documentation/**/*.md,src/{main/webapp,main/glyph,test/javascript}/**/*.{css,scss}}':
    ['prettier --write'],
};
