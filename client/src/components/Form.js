import React from 'react'
import styled from 'styled-components'

import fields from '../resources/fields.json'

const Form = (props) => {
	const { disabled = false, data = {}, message, submitData } = props

	const handleSubmit = (event) => {
		event.preventDefault()

		const res = {}
		const len = event.target.length
		
		for(let idx=0; idx<len; idx++) {
			const name = event.target[idx].name
			const value = event.target[idx].value

			if (!name) continue

			Object.assign(res, { [name]: value })
		}

		submitData(res)
	}

	const renderFields = () => fields.map(({field, label, placeholder, showOnly}) => {
		if ((showOnly && !disabled) || (disabled && !data[field])) return null

		return (
			<FieldWrapper>
				<Label for={field}>
					{label}
				</Label>

				<Input
					type='text'
					name={field}
					disabled={disabled}
					placeholder={data[field] || placeholder}
				/>
			</FieldWrapper>
		)
	})

	return (
		<Wrapper>
			<MainPanel onSubmit={handleSubmit}>
				<h2>{ message || 'Restaurant Info Form' }</h2>

				{renderFields()}

			{!disabled &&
					<FieldWrapper>
						<Submit
							type='submit'
							value='Submit'
						/>
					</FieldWrapper>
			}

			</MainPanel>
		</Wrapper>
	)
}

export default Form


const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 99vh;
	width: 99vw;

	color: #333333;
`

const MainPanel = styled.form`
	height: 80vh;
	width: 500px;

	display: flex;
	flex-direction: column;
	gap: 16px;

	padding: 16px;

	background-color: #ecebeb;
	border-radius: 8px;

	h2 {
		text-align: center;

		margin: 0;
		padding: 0;
	}
`

const FieldWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	width: 100%;
`

const Label = styled.label`
	font-weight: 600;
`

const Input = styled.input`
	padding: 4px;

	border: none;
`

const Submit = styled.input`
	padding: 16px 0;

	color: #fff;
	background-color: #4c8bf5;

	font-weight: 600;
	font-size: 18px;

	border: none;
	border-radius: 8px;
`
