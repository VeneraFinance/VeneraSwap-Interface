const express = require('express');
const path = require('path');
var cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'public')))


app.use(express.static(path.join(__dirname, '')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
});

app.get('/',()=>{
    console.log("check all")
})

const port = 8093;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));