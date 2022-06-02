import * as actionTypes from './actionTypes';
export const clientUpdateId = (clientID,clientName) => {
    return {
        type: actionTypes.UPDATE_CLIENT_DATA,
        payload: {
            clientId: clientID,
            clientName:clientName,
        },
    };
};
