module.exports = function(api) {
  api.cache(true)

  const presets = [
    [
      "babel-preset-gatsby",
      {
        reactRuntime: 'automatic'
      },
    ],
  ]

  const plugins = []

  return {
    presets,
    plugins,
  }
}
