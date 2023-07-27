'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const{
    HOST,
    USER,
    PASSWORD,
    DATABASE
} = process.env;

assert(HOST, 'HOST is requried');

module.exports = {
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
}