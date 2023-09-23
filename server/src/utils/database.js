
const mongoose = require("mongoose");

class database {
    constructor(url, options) {
        this.url = url;
        this.options = options;
        this.connection = null;
    }
    connect() {
        return new Promise((resolve, reject) => {
            this.connection = mongoose.connect(this.url, this.options);
            mongoose.connection.on('error', (err) => {
                console.log('Mongoose default connection error: ' + err);
                reject(err);
            });
            mongoose.connection.on('connected', () => {
                console.log('Mongoose Connection Established');
                resolve();
            });
            mongoose.connection.on('disconnected', () => {
                console.log('Mongoose default connection disconnected');
            });
            process.on('SIGINT', () => {
                mongoose.connection.close(() => {
                    console.log('Mongoose default connection disconnected through app termination');
                    process.exit(0);
                });
            });
        });
    }

}

module.exports = database;