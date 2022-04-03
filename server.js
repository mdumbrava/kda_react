const { time } = require('console');
const express = require('express');
const path = require('path');
const app = express();

// app.use(express.static(path.join(__dirname, 'build')));
app.use(logger)
app.use(express.static('build'));
app.use(express.urlencoded({ extended: true }))

app.get('/', logger, function (req, res) {
    res.render(('index.html'));
});

app.get('/api', logger, function (req, res) {
    res.send('API');
});

function logger(req, res, next) {
    // console.log('Test ' ,'Request is: ' ,req.originalUrl)
    // console.log(Date().valueOf())
    var today = new Date()
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    var dateTime = date+' '+time
    console.log(dateTime , '\t' ,req.originalUrl)
    // console.log('message')
    next()
}


app.listen(9000, () => console.log('Server is running on PORT: 9000'));