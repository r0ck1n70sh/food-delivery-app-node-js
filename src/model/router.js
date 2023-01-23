const express = require('express')
const router = express.Router()

const Restaurant = require('./Restaurant')

const sqlUtil = require('../db/sqlUtil')
const { table } = require('../db/constants.db')

router.get('/restaurant/:id', async (req, res) => {
	const { id } = req.params

	try {
		const [ obj ] = await sqlUtil.fetchObj(table.RESTAURANT, { id }) 

		if (!obj) throw new Error('no response found!')

		return res.json({ status: 'success', obj })
	} catch (err) {
		return res.status(400).json({ status: 'error', message: err.message })
	}
})

router.post('/restaurant', async (req, res) => {
	const obj = req.body

	try {
		const restaurantObj = new Restaurant(obj)
		restaurantObj.isValid()

		const { insertId } = await sqlUtil.createObj(table.RESTAURANT, restaurantObj)

		return res.json({ status: 'success', id: insertId })
	} catch (err) {
		return res.status(400).json({ status: 'failure', message: err.message })
	}
})

module.exports = router
