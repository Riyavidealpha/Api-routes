const config = {
    host: 'localhost',
    user: 'root',
    password: 'india',
    database: 'api',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    Promise: require('bluebird') // Use bluebird for promises
};

module.exports = config;