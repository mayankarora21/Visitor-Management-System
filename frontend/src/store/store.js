import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import promiseMiddleware from 'redux-promise';


const createStoreWithMiddleware=applyMiddleware(promiseMiddleware)(createStore);

const store=createStoreWithMiddleware(rootReducer);

export default store;