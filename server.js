var express = require('express')
var app = express()
var auth = require('./auth.js')
var upload = require('./itemupload.js')

app.get('/auth', function (req, res) {
    console.log(req)
    auth.authToken(req.rawHeaders[7], req.rawHeaders[9])
        .then(function (data) {
            res.send(data)
    })
})


app.put('/upload', function (req, res) {
    console.log(req)
    auth.authToken(req.rawHeaders[7], req.rawHeaders[9])
        .then(function (data, itemid, itemdetails) {
            res.send(data, itemid, itemdetails)
        })
})

app.listen(3000, function () {
    console.log('==========INITIALIZED ON PORT 3000==========')
})
