// webpack.config.js
module.exports = {
    // ...outras configurações
    devServer: {
      setupMiddlewares: (middlewares, devServer) => {
        if (!devServer) {
          throw new Error('webpack-dev-server is not defined');
        }
        
        // Adicione suas configurações de middleware aqui
        // ...
  
        return middlewares;
      },
    },
  };
  