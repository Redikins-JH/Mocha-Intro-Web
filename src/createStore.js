import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import { routerReducer} from 'react-router-redux';

import * as Reducers from './Reducers';

export default function createStore(){
    return reduxCreateStore(
        combineReducers({
            ...Reducers,
            router: routerReducer,
        }),
        applyMiddleware(
            logger
        )
    )
}
