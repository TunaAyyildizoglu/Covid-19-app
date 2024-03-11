// reducer.js

import { combineReducers } from 'redux';
import { SET_COVID_PROVINCE_STATISTICS, SET_LOADING, SET_ERROR } from './actions';

const initialState = {
  provinceStatistics: null,
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COVID_PROVINCE_STATISTICS:
      return {
        ...state,
        provinceStatistics: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({
  statistics: reducer
});
