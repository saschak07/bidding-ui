import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme'
import { findByAttribute } from '../../Utils/util'
import { BidDownloader } from './BidDownloader'
import Adapter from 'enzyme-adapter-react-16'

const setUp = (props) => {
    const component = shallow(<BidDownloader details = {{
        name: 'test-string',
        address: 'test-string',
        emailId: 'test-string',
        contractorId: 'test_string'
    }}
    match = {{ params: {
        org: 'test-string'
    }}}/>)
    return component;
}

Enzyme.configure({adapter: new Adapter()})

describe('containers-biddownloader', () => {

    let component;

    beforeEach( () => {
        component = setUp()
    })

    it('should load biddownloader successfully', () => {
        const wrapper = findByAttribute(component,'biddowlnloader')
        expect(wrapper.length).toBe(1)
    })
})