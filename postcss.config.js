import postcssPxToRem from "postcss-pxtorem";

export default ({ env }) => {
  const isProd = env === 'production'
  const plugins = []

  if (isProd) {
    plugins.push(
      postcssPxToRem({
        propList: ['*'], // обрабатываем все свойства
        mediaQuery: true, // дополнительно обрабатываем диапазоны медиакуери
      })
    )
  }

  return {
    plugins
  }
}