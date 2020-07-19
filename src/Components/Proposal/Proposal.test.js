import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme'
import { findByAttribute } from '../../Utils/util'
import Proposal from './Proposal'
import Adapter from 'enzyme-adapter-react-16'

const setUp = (props) => {
    const component = shallow(<Proposal/>)
    return component;
}

Enzyme.configure({adapter: new Adapter()})

describe('components-Proposals', () => {

    let component;

    beforeEach(() => {
        component = setUp();
    })

    it('should load proposals successfully', () => {
        const wrapper = findByAttribute(component,'proposal-container')
        expect(wrapper.length).toBe(1)
    })
})