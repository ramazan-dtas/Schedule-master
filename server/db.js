const mysql = require('mysql2');
const config = require('./config');

const db = mysql.createConnection(config);//firebase.initializeApp(config.firebaseConfig);

module.exports = db;