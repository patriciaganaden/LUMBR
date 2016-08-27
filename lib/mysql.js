var mysql = require('mysql');
module.exports = mysql.createConnection({
	host: 'localhost',
	user: 'magandakami',
	password: 'magandakami',
	database: 'foresthackDB'
});
