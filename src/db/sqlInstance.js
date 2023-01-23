const mysql = require('mysql')
const config = require('./db_config.json')

const pool = mysql.createPool(config)

const sqlInstance = (query) => new Promise((resolve, reject) => {
	pool.getConnection((err, connection) => {
		if (err) reject(err)

		connection.query(query, (error, rows, fields) => {
			connection.release()

			if (err) reject(err)
			resolve(rows)
		})
	})
})


module.exports = sqlInstance
