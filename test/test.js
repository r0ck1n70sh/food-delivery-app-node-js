const assert = require('assert')

const sqlUtil = require('../src/db/sqlUtil')

describe('sql', () => {

	describe('#insert()', () => {
		it('should insert an entry into table -> RESTAURANT', async () => {
			const result = await sqlUtil.createObj('RESTAURANT', {
				restaurant_name: 'test restaurant name',
				contact_name: 'test contact name',
				pincode: '560033',
				address: 'test address, test city',
				phone: '9876543210',
				avg_daily_tx: '100.5'
			})

			console.log('result', result)
			assert.ok(!!result)
		})
	})

	describe('#fetch()', () => {
		it('should fetch all entries from table -> RESTAURANT', async () => {
			const result = await sqlUtil.fetchObj('RESTAURANT', null)

			console.log('result', result)
			assert.ok(!!result)
		})
	})

})
