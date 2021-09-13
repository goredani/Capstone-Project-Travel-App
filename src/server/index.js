const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

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



app.get('/geoUser', function (req, res) {
    res.send(access.geoUser)
})
app.get('/WeatherAPIKey', function (req, res) {
    res.send(access.WeatherAPIKey)
})
app.get('/pixaBayAPIKey', function (req, res) {
    res.send(access.pixaBayAPIKey)
})

const access = {
    geoUser: `${process.env.GEO_ID}`,
    WeatherAPIKey: `${process.env.WEATHER_KEY}`,
    pixaBayAPIKey: `${process.env.IMAGE_KEY}`
}




// app.post('/postData', postData )

// function postData (req, res){
//     console.log(req.body)
//     data.push(req.body)
//  }
