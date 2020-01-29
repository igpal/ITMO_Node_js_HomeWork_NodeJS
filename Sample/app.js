const http = require('http');

const app = http.createServer(handler);

app.listen(8080, function() {
    console.log('Сервак готов и слушает порт 8080');
});
const fs = require('fs');
let filename = 'index.html';

function handler(request, response) {
    fs.readFile(filename, 'utf8', (err, data) => {

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);

    });
}