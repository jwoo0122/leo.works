if (window.matchMedia && window.matchMedia('(prefers-color-scheme: Dark)').matches) {
  require('prism-themes/themes/prism-atom-dark.css')
} else {
  require('prism-themes/themes/prism-duotone-light.css')
}