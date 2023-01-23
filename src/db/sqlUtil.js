const sqlInstance = require('./sqlInstance')

const createObj = async (table, object) => {
	const query = `
		INSERT INTO ${table} (${Object.keys(object).join(', ')})
		VALUES (${Object.values(object).map(e => `'${e}'`).join(', ')});
	`

	return await sqlInstance(query)
}

const fetchObj = async (table, condition) => {

	const query = 
	`SELECT * from ${table} 
		${!!condition ? `
			WHERE ${
				Object.entries(condition)
					.map(([field, value]) => `${field} = ${value}`)
					.join(' AND ')
				}` : ''
			}
		;
	`

	return await sqlInstance(query)
}

const updateObj = () => {


}

const deleteObj = () => {


}


module.exports = {
	createObj,
	fetchObj,
	updateObj,
	deleteObj
}
