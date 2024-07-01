// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,

//   pluginOptions: {
//     vuetify: {
// 			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
// 		}
//   }
// })
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('pdf')
      .test(/\.(pdf)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]' // Adjust the output filename as needed
      });
  },
  pluginOptions: {
    vuetify: {
      // Your Vuetify options here
     // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  }
});
