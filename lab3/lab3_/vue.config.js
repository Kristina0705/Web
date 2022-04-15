const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      auth: {
        target: "https://64906022-f386-4db9-82b9-94eeea7c35bd.mock.pstmn.io",
        // target: "https://dd66cd9a-07e3-4038-b463-43009cb5a482.mock.pstmn.io",
        ws: true,
        changeOrigin: true,
      },
      register: {
        target: "https://64906022-f386-4db9-82b9-94eeea7c35bd.mock.pstmn.io",
        // target: "https://dd66cd9a-07e3-4038-b463-43009cb5a482.mock.pstmn.io",
        ws: true,
        changeOrigin: true,
      },
    },
  },
});
