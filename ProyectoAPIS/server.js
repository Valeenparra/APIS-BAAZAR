const express = require('express');

const app = express();

app.use(express.static('public'));

//app.get('/', function (req, res) {
//  res.send('Main page!');
//});

//app.get('/hello', function (req, res) {
 // res.send('Hello!' + req.query.name);
 // console.log(req.params)
//});

 // Start server
 app.listen(3000, () => console.log('Listening on port 3000'));  

