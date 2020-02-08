let express = require('express');
let app = express();
let route = require('./routes/postForm.js');

app.use(express.static('public'));

app.post('/task3', route);

app.listen(8080);