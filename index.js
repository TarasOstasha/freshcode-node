const http = require('http');
const app = require('./app');

const server = http.createServer(app);

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'localhost'


server.listen(PORT, HOST, () => {
    console.log(`Server is running on port http://${HOST}:${PORT}`);
});