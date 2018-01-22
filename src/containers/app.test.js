import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {App} from './app'

Enzyme.configure({adapter: new Adapter()})

jest.mock('../components/searchForm', () => 'div')

describe('App container', () => {
	it('renders without crashing', () => {
		const wrapper = mount(<App
			departures={[]}
			dispatch={jest.fn()}
			from="here"
			to="there"
		/>)
	})
})