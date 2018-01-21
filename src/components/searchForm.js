import React from 'react'
import {Button, Col, ControlLabel, Form, FormGroup, FormControl} from 'react-bootstrap'

const SearchForm = ({from, to, date, onChange, onSubmit}) => (
	<Form horizontal>
		<FormGroup controlId="fromInput">
			<Col componentClass={ControlLabel} sm={2}>From</Col>
			<Col sm={10}><FormControl
				type="text"
				value={from}
				onChange={e => onChange('from', e.target.value)}
			/></Col>
		</FormGroup>
		<FormGroup controlId="toInput">
			<Col componentClass={ControlLabel} sm={2}>To</Col>
			<Col sm={10}><FormControl
				type="text"
				value={to}
				onChange={e => onChange('to', e.target.value)}
			/></Col>
		</FormGroup>
		<FormGroup controlId="dateInput">
			<Col componentClass={ControlLabel} sm={2}>When</Col>
			<Col sm={10}><FormControl
				type="text"
				value={new Date(date).toLocaleDateString('en-CA')}
				onChange={e => onChange('date', new Date(e.target.value))}
			/></Col>
		</FormGroup>
		<FormGroup>
			<Col smOffset={2} sm={10}>
				<Button type="submit" onClick={onSubmit}>Search</Button>
			</Col>
		</FormGroup>
	</Form>
)

export default SearchForm
