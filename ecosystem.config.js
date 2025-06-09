// eslint-disable-next-line no-undef
module.exports = {
  apps: [
    {
      name: 'user-service',
      script: 'dist/index.js',
      env: {
        NODE_ENV: 'development' // Riêng NODE_ENV thì có thể dùng process.env.NODE_ENV hoặc process.NODE_ENV, còn lại thì chỉ được dùng process.env.TEN_BIEN
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
