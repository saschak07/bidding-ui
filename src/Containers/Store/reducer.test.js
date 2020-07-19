import reducer from './reducer'
import * as actionType from './action'

describe('reducer-test',() => {
    it('should load initial state', () => {
        expect(reducer(undefined,{})).toEqual({
            contractorDetails: null
        });
    });

    it('should set store',() => {
        expect(reducer({
                contractorDetails:null
        },{
            type: actionType.SET_NAME,
            details: {
                name: 'test-string',
                address: 'test-string',
                emailId: 'test-string'
            }
        })).toEqual({
            contractorDetails:{
                name: 'test-string',
                address: 'test-string',
                emailId: 'test-string'
            }
            
        })
    })
})