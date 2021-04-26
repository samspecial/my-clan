import * as typeReducer from '../actions/types';
const initialState = {
  loading: false,
  loadingLogin: false,
  token: null,
  cooperative: [],
  login: !!localStorage.getItem('token'),
  logout: false,
  errorMessage: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeReducer.LOADING:
      return {
        ...state,
        loadingLogin: action.payload
      };
    case typeReducer.LOGGED_IN:
      return {
        ...state,
        login: true
      };
    case typeReducer.GET_COOPERATIVES:
      return {
        ...state,
        cooperative: action.payload
      };
    // case types.ACTS:
    //   return {
    //     ...state,
    //     acts: action.payload
    //   };

    case typeReducer.FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case typeReducer.LOGOUT:
      return {
        ...state,
        logout: action.payload
      };

    default:
      return state;
  }
};

export default authReducer;
