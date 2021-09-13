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

// These endponts will serve the proper user name or API key

app.get('/geoUser', function (req, res) {
    res.send(access.geoUser)
})
app.get('/WeatherAPIKey', function (req, res) {
    res.send(access.WeatherAPIKey)
})
app.get('/pixaBayAPIKey', function (req, res) {
    res.send(access.pixaBayAPIKey)
})

// We store the user names and API keys in an env file

const access = {
    geoUser: `${process.env.GEO_ID}`,
    WeatherAPIKey: `${process.env.WEATHER_KEY}`,
    pixaBayAPIKey: `${process.env.IMAGE_KEY}`
}

