const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb://admin:admin123@ds253804.mlab.com:53804/nofood'
    }
}
module.exports = variables;