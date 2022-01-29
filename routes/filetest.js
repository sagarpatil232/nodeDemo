var express = require('express')
var router = express.Router()
const fs = require('fs');

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
// define the home page route
    router.get('/', function (req, res) {
    res.send('Birds home page')
})

  // define the about route
router.get('/files', function (req, res) {
    fs.readdir('./', (err, files) => {
        if (err){
            console.log(err);
            res.send(err)
        }else {
            console.log(files)
            res.send(files)
        }
    })
})
  
module.exports = router
