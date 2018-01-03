var express = require('express');
var app = express();
var apiRouter = require('./api-router');
var morgan = require('morgan');
const path = require('path');

app.use(express.static('./public'))
app.use(morgan('dev'))
app.use('/api', apiRouter) //REST service router
app.get(['/', '/locations/:id'], (req, res) => {
    res.sendFile(path.resolve( __dirname, './public/index.html'))
})
app.get('/locations', (req, res) => {
    res.redirect('/')
})

var port = process.env.port || 3001;
app.listen(port);
console.log('Server listening at port ' + port);