var express = require('express')
,http = require('http')
,path = require('path');
const PORT = process.env.PORT || 9070;

var app = express();

app.set('title','OpenFin POC');
app.use(express.static(path.join(__dirname, 'src')));

// servers main page

app.get('/', function (req, res){
  res.sendFile("src/Main page.html",{"root": __dirname});
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
