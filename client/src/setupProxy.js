const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:5000/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("https://api.upbit.com/v1", {
      target: "https://api.upbit.com/v1",
      changeOrigin: true,
    })
  );
};
