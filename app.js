const path = require('path')
const fs = require('fs')

const userRouter = require('./Routers/userRouter')
const Application = require('./framework/Application')

const port = process.env.PORT || 3000

const app = new Application()
app.addRouter(userRouter)

app.listen(port, () => console.log(`Server was running on port ${port}`))
