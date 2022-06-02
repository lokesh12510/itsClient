import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    token: null,
    user: {},
};

const authSetData = (state, action) => {
    return { ...state, ...action.payload };
};

const authLogout = (state, action) => {
    return { ...state, ...initialState };
};

const authUpdateUser = (state, action) => {
    return { ...state, ...action.payload };
};


// reducer
const reducer = ( state = initialState, action ) => {
    switch(action.type)
    {
        case actionTypes.AUTH_SET_DATA: return authSetData(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.AUTH_UPDATE_USER: return authUpdateUser(state, action);
        default: 
            return state;
    }
};

export default reducer;