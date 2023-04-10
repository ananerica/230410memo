const cluster = require('cluster');
const server = require('./api/app');

if (cluster.isMaster) {
    const api = server();

    const PORT = process.env.PORT || 3000;
    console.info(`Launch on ${PORT}`);

    api.listen(PORT).on('error', err => {
        console.error(err);
    });
}
