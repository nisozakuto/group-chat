const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static('public'));

app.get('/', function(req,res){
    res.render('index.ejs')
})

const server = http.listen(8080, function(){
    console.log("This comes up in the terminal --> listening port:8080")
})