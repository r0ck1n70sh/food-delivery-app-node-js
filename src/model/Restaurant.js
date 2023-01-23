class Restaurant {
	constructor({
		restaurant_name,
		contact_name,
		pincode,
		first_line_address,
		second_line_address,
		city,
		state,
		website,
		phone,
		avg_daily_tx
	}) {
		this.restaurant_name = restaurant_name
		this.contact_name = contact_name
		this.pincode = pincode
		this.website = website,
		this.phone = phone,
		this.avg_daily_tx = avg_daily_tx

		this.populateAddress({ first_line_address, second_line_address, city, state, pincode })
	}

	populateAddress({ first_line_address, second_line_address, city, state, pincode }) {
		this.address = `${[ first_line_address, second_line_address, city, state ].filter(e => !!e).join(', ')} - ${pincode}`
	}

	isValid() {
		const regex = /^([a-zA-Z0-9 ._-]+)$/

		if (!regex.test(this.restaurant_name)) {
			throw new Error('invalid restaurant name')
		}

		if (!regex.test(this.contact_name)) {
			throw new Error('invalid contact name')
		}

		if (!this.address.split(',').filter(e => !!e).reduce((prev, next) => prev && regex.test(next), true)) {
			throw new Error('invalid address')
		}

		if (isNaN(this.pincode) || this.pincode.length !== 6) {
			throw new Error('invalid pincode')
		}

		if (isNaN(this.avg_daily_tx)) {
			throw new Error('invalid avg. daily transcation')
		}

		const urlRegex = /^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/

		if (urlRegex.test(this.website)) {
			throw new Error('invalid website')
		}
	}
}


module.exports = Restaurant
