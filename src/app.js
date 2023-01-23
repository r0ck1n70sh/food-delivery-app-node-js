const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

const router = require('./model/router.js')

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "..", "client", "dist")))

app.use('/api/v1/', router) 

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"))
})


module.exports = app
