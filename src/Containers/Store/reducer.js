import * as  actionType from './action'
const initialState = {
    contractorDetails:null
}

const reducer = (state = initialState,action) => {
    switch(action.type){
         case actionType.SET_NAME: 
            return {
                contractorDetails:action.details,
            }
        default: 
        return state
    }
}
export default reducer