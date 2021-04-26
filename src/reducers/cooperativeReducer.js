import * as types from '../actions/types';

const initialState = {
  loading: false,
  loadingCooperative: false,
  loadingItem: false,
  cooperative: [],
  errorMessage: null
}

const cooperativeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case types.LOADING_COOPERATIVE:
      return {
        ...state,
        loadingCooperative: action.payload
      };
    case types.GET_COOPERATIVES:
      return {
        ...state,
        loadingCooperative: true
      };
    case types.GET_COOPERATIVE:
      return {
        ...state,
        loadingCooperative: true
      };
    case types.GET_MY_COOPERATIVE:
      return {
        ...state,
        loadingCooperative: true
      };
    case types.ADD_COOPERATIVE:
      return [action.payload, ...state];
    case types.FAILURE:
      return {
        loading: false,
        errorMessage: action.payload
      };
    case types.SUCCESS:
      return {
        loading: false,
        cooperative: action.payload,
      };
    default:
      return state;

  }
}

export default cooperativeReducer;