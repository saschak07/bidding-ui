import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme'
import { findByAttribute } from '../../Utils/util'
import ProjectForm from './ProjectForm'
import Adapter from 'enzyme-adapter-react-16'

const setUp = (props) => {
    const component = shallow(<ProjectForm projectDetails={props.projectDetails}/>)
    return component;
}

Enzyme.configure({adapter: new Adapter()})

describe('components-Projectform',() => {
    let component
    const props = {
        projectDetails:{

    approxValue: "test_string",
    assignmentName: "test_string",
    associateConsultant: "test_string",
    associationTime: "test_string",
    clientName: "test_string",
    completionDate: "test_string",
    country: "test_string",
    duration: "test_string",
    location: "test_string",
    noOfStaff: "test_string",
    project_desc: "test_string",
    service_desc: "test_string",
    snr_staff: "test_string",
    staff: "test_string",
    startDate: "test_string"
        }
    }
    beforeEach(() => {
        component = setUp(props)
    })

    it('should load ProjectForm successfully',()=>{
        const wrapper = findByAttribute(component,'project-form')
        expect(wrapper.length).toBe(1);
    })
})