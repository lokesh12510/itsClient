import * as actionTypes from './actionTypes';
import * as userService from '../../../components/services/userService';

export const authSetData = (token, user) => {
    localStorage.setItem('token', token);
    return {
        type: actionTypes.AUTH_SET_DATA,
        payload: {
            isLoggedIn: true,
            token: token,
            user: user,
        },
    };
};

export const authLogout = () => {
    localStorage.clear();
    return {
        type: actionTypes.AUTH_LOGOUT,
    };
};

export const authUpdateUser = (user) => {
    return {
        type: actionTypes.AUTH_UPDATE_USER,
        payload: {
            user: user,
        },
    };
};

export const authCheckState = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if(token && token !== null)
        {
            dispatch(authSetData(token, {}));
            try
            {
                const response = await userService.getProfile();
                //console.log(response.data);
                dispatch(authUpdateUser(response.data.user));
            }
            catch(e)
            {
                dispatch(authLogout());
            }
        }
        else
        {
            dispatch(authLogout());
        }
    };
};

export const authGrantPermission = (requestedRoles, user) => {
    if(user)
    {
        const permittedRoles = user.role;
        if(permittedRoles && permittedRoles != '')
        {
            if(requestedRoles.includes(permittedRoles))
            {
                return true;
            }
        }
    }
    return false;
};

