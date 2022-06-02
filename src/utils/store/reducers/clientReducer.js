import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
   clientId:'',
   clientName:'',
};


const clientUpdateId = (state, action) => {
    return { ...state, ...action.payload };
   
};


// reducer
const reducer = ( state = initialState, action ) => {
    switch(action.type)
    {
        case actionTypes.UPDATE_CLIENT_DATA: return clientUpdateId(state, action);
    
        default: 
            return state;
    }
};

export default reducer;