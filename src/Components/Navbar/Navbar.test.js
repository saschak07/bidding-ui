import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme'
import { findByAttribute } from '../../Utils/util'
import Navbar from './Navbar'
import Adapter from 'enzyme-adapter-react-16'

const setUp = (props) => {
    const component = shallow(<Navbar/>)
    return component;
}

Enzyme.configure({adapter: new Adapter()})

describe('components-Navbar',() => {
    let component;
    beforeEach(() => {
        component = setUp()
    })

    it('should load navbar successfully',() =>{
        const wrapper = findByAttribute(component,'nav-bar')
        expect(wrapper.length).toBe(1)
    })
})