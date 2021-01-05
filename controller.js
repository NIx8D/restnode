'use strict';

const response = require('./res');
const connection = require('./connection');

exports.index = (req, res) => {
	response.ok("Aplikasi rest api node js berjalan !");
};
