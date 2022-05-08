// import yaoarken dosyanın adını uzunca yazmamak için index.js diyoruz

import {createStore} from 'redux';
import {rootReducer } from '..reducers';

const store = createStore(rootReducer);

export default store;
