import React, { useState } from 'react'
import apiClient from './helper/apiUtil'

import Form from './components/Form'

const App = () => {
	const [ message, setMessage ] = useState(null)
	const [ data, setData ] = useState({})
	const [ disabled, setDisabled ] = useState(false)

	const submitData = (data) => {
		setDisabled(true)
		setMessage('Loading...')

		apiClient.post('/restaurant', data)
			.then(res => res.data)
			.then(data => {
				setMessage(data.status)
				fetchData(data.id)
			})
			.catch(err => setMessage(`error: ${err.message}`))
	}

	const fetchData = (id) => {
		apiClient.get(`/restaurant/${id}`)
		.then(res => res.data)
		.then(data => setData(data.obj))
		.catch(err => console.error(err.message))
	}

	return (
		<Form 
			message={message}
			data={data}
			submitData={submitData}
			disabled={disabled}
		/>
	)
}

export default App
