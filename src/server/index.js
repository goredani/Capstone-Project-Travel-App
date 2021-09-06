const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('dist'))


app.listen(8088, function () {
    console.log('server is listening on port 8088');
})

app.get('/',function (req, res) {
    res.sendFile('/dist/index.html')
})

const geoUser = "ovdaldk";
const WeatherAPIKey = "a7b7cbe48f60468390559450561794fc";
const pixaBayAPIKey = "22453719-d2ea24c0db6da3bbfeb9ff901&q=";

app.get('/geoUser', function (req, res) {
    res.send(geoUser)
})
app.get('/WeatherAPIKey', function (req, res) {
    res.send(WeatherAPIKey)
})
app.get('/pixaBayAPIKey', function (req, res) {
    res.send(pixaBayAPIKey)
})


// app.post('/postData', postData )

// function postData (req, res){
//     console.log(req.body)
//     data.push(req.body)
//  }
