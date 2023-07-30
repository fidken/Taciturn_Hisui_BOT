const http = require("http");
const fs = requre("fs");

const host = 'localhost';
const port = 8010;

const requestListener = function (req, res) {
    fs.readFile('Untitled-1.html', (err, data) => {
        if (err) {
          // Ошибка чтения файла
          res.writeHead(404);
          res.write('File not found!');
        } else {
          // Отправка HTML-страницы
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
        }
        res.end();
      });
    }

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
