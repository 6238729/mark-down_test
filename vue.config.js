const { NODE_ENV, BASE_URL = '/elfinos' } = process.env

module.exports = {
  publicPath: NODE_ENV === 'production' ? BASE_URL : '/elfinos'
}
