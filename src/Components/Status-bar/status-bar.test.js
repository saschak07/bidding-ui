import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme'
import { findByAttribute } from '../../Utils/util'
import Statusbar from './Status-bar'
import Adapter from 'enzyme-adapter-react-16'

const setUp = (props) => {
    const component = shallow(<Statusbar/>)
    return component;
}

Enzyme.configure({adapter: new Adapter()})

describe('components-status-bar',() => {
    let component
    beforeEach(()=>{
        component = setUp()
    })

    it('should not load status-bar without props',() => {
        const wrapper = findByAttribute(component,'status-bar')
        expect(wrapper.length).toBe(1)
    })

    it('should load status with profile highlighted in yellow', () => {
        const component_with_props = shallow(<Statusbar page='profile'/>)
        const wrapper = findByAttribute(component_with_props,'profile-submission').prop('style')
        expect(wrapper).toHaveProperty('color','yellow')
    })
})