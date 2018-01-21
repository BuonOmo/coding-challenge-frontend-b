import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchDepartures, updateSearch} from '../actions'
import ErrorMessage from '../components/errorMessage'
import SearchForm from '../components/searchForm'
import ResultList from '../components/resultList'

class App extends Component {
	// Linter seems to have issue with `static` writing
	static propTypes = { // eslint-disable-line no-undef
		dispatch: PropTypes.func.isRequired,
		departures: PropTypes.array.isRequired,
		from: PropTypes.string.isRequired,
		to: PropTypes.string.isRequired,
		isFetching: PropTypes.bool,
		isError: PropTypes.bool,
		error: PropTypes.string,
		date: PropTypes.instanceOf(Date)
	}

	componentWillReceiveProps(nextProps) {
		const {dispatch, from, to, date} = nextProps
		if (from !== this.props.from && to !== this.props.to && date !== this.props.date) {
			dispatch(fetchDepartures(from, to, date))
		}
	}

	handleChange(field, value) {
		this.props.dispatch(updateSearch(field, value))
	}

	handleSearchClick(e) {
		e.preventDefault()
		const {dispatch, from, to, date} = this.props
		dispatch(fetchDepartures(from, to, date))
	}

	render() {
		const {from, to, date, departures, isFetching, isError, error} = this.props
		const isEmpty = departures.length === 0
		return (
			<div>
				<SearchForm
					from={from}
					to={to}
					date={date}
					onChange={(field, value) => this.handleChange(field, value)}
					onSubmit={e => this.handleSearchClick(e)}
				/>
				{isFetching && 'loading...'}
				{isError && <ErrorMessage message={error}/>}
				{!(isError || isEmpty) && <ResultList departures={departures}/>}
			</div>
		)
	}
}

const mapStateToProps = state => {
	const {departures, from, to, date, isFetching, isError, error} = state

	return {
		departures,
		from,
		to,
		date,
		isFetching,
		isError,
		error
	}
}

export default connect(mapStateToProps)(App)
