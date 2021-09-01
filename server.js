const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('client'))


app.listen(8000, function () {
    console.log('server is listening on port 8000');
})

let data = [];

app.get('/getData', function (req, res) {
    res.send(data)
})

app.post('/postData', postData )

function postData (req, res){
    console.log(req.body)
    data.push(req.body)
 }