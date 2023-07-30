const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Чтение файла index.html
  fs.readFile('index.html', (err, data) => {
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
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});