import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme'
import { findByAttribute } from '../../Utils/util'
import ContactDetails from './ContractDetails'
import Adapter from 'enzyme-adapter-react-16'

const setUp = (props = {}) => {
    const component = shallow(<ContactDetails/>)
    return component;
}

Enzyme.configure({adapter: new Adapter()})

describe('Component-ContractorDetails',() => {

    let component;
    beforeEach(() => {
        component = setUp()
    });

    it('Should load contractordetails without error!', () => {
        const wrapper = findByAttribute(component,"ContractDetailsContainer");
        expect(wrapper.length).toBe(1)
    });

    it('Should load submit button without error!', () => {
        const wrapper = findByAttribute(component,"submit-proposal");
        expect(wrapper.length).toBe(1)
    });

})