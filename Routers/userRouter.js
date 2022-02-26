const path = require('path')
const fs = require('fs')

const Router = require('../framework/Router')

const router = new Router()

router.get('/getUsers', (req, res) => {
  fs.readFile(path.join(__dirname, 'users.json'), 'utf-8', (err, data) => {
    if (err) {
      return console.log('Error: ', err)
    }
    res.writeHead(200, {
      "Content-Type": "application/json"
    })
    res.end(data)
  })
})

router.post('/addUser', (req, res) => {
  let newUser = ''
  req.on('data', chunk => {
    newUser += chunk
  })

  req.on('end', () => {
    fs.readFile(path.join(__dirname, 'users.json'), 'utf-8', (err, data) => {
      if (err) {
        return console.log('Error: ', err)
      }
      data = JSON.parse(data)
      data.push(JSON.parse(newUser))

      fs.writeFile(path.join(__dirname, 'users.json'), JSON.stringify(data), (err, updadedData) => {
        if (err) {
          return console.log('Error: ', err)
        }

        res.writeHead(200, {
          "Content-Type": "application/json"
        })
        res.end(updadedData)
      })
    })
  })
})


module.exports = router