class Router {
  constructor() {
    this.maskRequest = {}
    this.handler = {}
    this.types = []
  }
  getTypes() {
    return this.types
  }
  getMaskRequest(typeRequest) {
    return this.maskRequest[typeRequest]
  }
  getHandler(typeRequest) {
    return this.handler[typeRequest]
  }
  get(url, handler) {
    this.maskRequest['GET'] = `${url}:GET`
    this.handler['GET'] = handler
    this.types.push('GET')
  }
  post(url, handler) {
    this.maskRequest['POST'] = `${url}:POST`
    this.handler['POST'] = handler
    this.types.push('POST')
  }
}

module.exports = Router