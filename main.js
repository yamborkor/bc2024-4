// Імпорт модулів
const { program } = require('commander');
const http = require('http');

// Налаштування параметрів командного рядка з Commander.js
program
  .requiredOption('-h, --host <host>', 'адреса сервера')
  .requiredOption('-p, --port <port>', 'порт сервера')
  .requiredOption('-c, --cache <cachePath>', 'шлях до директорії для кешу');

program.parse(process.argv);

// Отримання переданих параметрів
const options = program.opts();
const host = options.host;
const port = options.port;
const cachePath = options.cache;

// Перевірка наявності всіх обов’язкових параметрів
if (!host || !port || !cachePath) {
  console.error('Помилка: Всі обов’язкові параметри мають бути вказані!');
  process.exit(1);
}

// Створення веб-сервера з використанням http
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

// Запуск сервера на вказаних хості та порту
server.listen(port, host, () => {
  console.log(`Сервер запущено за адресою http://${host}:${port}/`);
});