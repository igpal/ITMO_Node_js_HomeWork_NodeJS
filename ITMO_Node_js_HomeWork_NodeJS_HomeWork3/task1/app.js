const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

http.createServer(function(req, res) {
    let urlObj = url.parse(req.url);
    let obj = {};

    if (urlObj.query) {
        obj = querystring.parse(urlObj.query);
    }

    if (obj.forAjax) {
        fs.readFile('ajax.html', 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 404;
                return res.end();
            }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(data);
        });
    } else {
        fs.readFile('index.html', 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 404;
                return res.end();
            }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(data);
        });
    }

}).listen(8080);