const express = require('express')
const app = express()
const port = 3000
//const cors = require("cors");
// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

var filetest = require('./routes/filetest')
var tutorial = require('./routes/tutorial')

app.use('/filetest', filetest)
app.use('/tutorial', tutorial)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})