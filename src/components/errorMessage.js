import React from 'react'
import {Alert} from 'react-bootstrap'

const ErrorMessage = ({message}) => (
	<Alert bsStyle="warning">
		<strong>Error!</strong> {message}
	</Alert>
)

export default ErrorMessage
