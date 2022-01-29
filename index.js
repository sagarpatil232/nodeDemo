const express = require('express')
const app = express()
const port = 3000
var filetest = require('./routes/filetest')

app.use('/filetest', filetest)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})