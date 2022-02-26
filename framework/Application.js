const http = require('http')
const Emitter = require('events')

class Application {
  constructor() {
    this.emitter = new Emitter()
    this.server = this.createServer()
  }
  createServer() {
    return http.createServer((req, res) => {
      const mask = `${req.url}:${req.method}`
      this.emitter.emit(mask, req, res)
    })
  }
  addRouter(router) {
    router.getTypes().forEach(type => {
      this.emitter.on(router.getMaskRequest(type), router.getHandler(type))
    })
  }
  listen(port) {
    this.server.listen(port,
      () => console.log(`Server was running on ${port}`))
  }

}

module.exports = Application