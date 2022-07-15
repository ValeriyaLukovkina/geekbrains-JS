const http = require('http');
const fs = require('fs');

// request - хранятся все данные о нашем запросе
// response - то, что отдадим нашему клиенту
const server = http.createServer((req, res) => {
    console.log(req.url)
    const body = fs.readFileSync('./public/index.html')
    res.end(body);
});

server.listen(3000);
console.log('Server started!');
