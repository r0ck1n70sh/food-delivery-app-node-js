const mysql = require('mysql')
const config = require('./db_config.json')


const tables = {
	RESTAURANT: `
		CREATE TABLE RESTAURANT (
			id int NOT NULL AUTO_INCREMENT,
			restaurant_name varchar(255),
			contact_name varchar(255),
			pincode int,
			address varchar(255),
			website varchar(255),
			phone varchar(255),
			avg_daily_tx float,
			PRIMARY KEY (id)
		)`
}

const connection = mysql.createConnection(config)

connection.connect()

//connection.query('CREATE DATABASE aws_jan_23_db', (err) => {
//	if (err) throw err
//
//	console.log('created database aws_jan_23_db')
//})


for (const [table, query] of Object.entries(tables)) {
connection.query(query, (err) => {
		if (err) {
			console.error(err.message)
			return
		}

		console.log(`created ${table} table`)
})


//for (const [table] of Object.entries(tables)) {
//connection.query(`DROP TABLE ${table};`, (err) => {
//		if (err) {
//			console.error(err.message)
//			return
//		}
//
//		console.log(`deleted ${table} table`)
//})


}

connection.end()
