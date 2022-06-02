import { combineReducers } from 'redux';

import auth from './auth';
import loginAttempts from './loginAttempts';
import breadcrumbsReducers from './breadcrumb';
import clientReducer from './clientReducer';

// combined reducers
export const rootReducer = combineReducers({
    auth: auth,
    loginAttempts: loginAttempts,
    breadcrumbs : breadcrumbsReducers,
    clientReducer :clientReducer,
});