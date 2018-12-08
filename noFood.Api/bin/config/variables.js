'use strict'

const variables = {
    Api: {
        port: process.env.port || 3000,
    },
    Database: {
        connection: process.env.connection | 'mongodb://admin:nofood123@ds129454.mlab.com:29454/nofood',
    }
};

module.exports = variables;