const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/product', (request, response) => {
  db.getProducts()
})

app.post('/product', (request, response) => {
  db.createTransaction()
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})