import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme'
import { findByAttribute } from '../../Utils/util'
import Disclaimer from './Disclaimer'
import Adapter from 'enzyme-adapter-react-16'

const setUp = (props) => {
    const component = shallow(<Disclaimer/>)
    return component;
}

Enzyme.configure({adapter: new Adapter()})

describe('components-Disclaimer',() => {
    let component;

    beforeEach(() => {
        component = setUp();
    })

    it('should load disclaimer successfully',() => {
        const wrappper = findByAttribute(component,"disclaimer-container")
        expect(wrappper.length).toBe(1)
    })
})