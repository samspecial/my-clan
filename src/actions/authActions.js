import axios from 'axios';
import * as actionTypes from './types';

const API_URL = "http://localhost:3000/auth/";
const loading = payload => {
  return {
    type: actionTypes.LOADING,
    payload
  };
};
const loggedIn = payload => {
  return {
    type: actionTypes.LOGGED_IN,
    payload
  };
};

const getCooperatives = payload => {
  return {
    type: actionTypes.GET_COOPERATIVES,
    payload
  };
};

const failure = payload => {
  return {
    type: actionTypes.FAILURE,
    payload
  };
};

export const authLogin = (email, password, history) => async dispatch => {
  dispatch(loading(true));
  try {
    const result = await axios.post(`${API_URL}`, { email, password });
    const { user } = result.data
    await dispatch(loggedIn(result.data.token));
    localStorage.setItem('token', result.data.token);
    if (user.length > 0) {
      localStorage.setItem('user', true)
    }
    history.push('/dashboard');

    dispatch(loading(false));
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(failure(null));
    dispatch(loading(false));
  }
}

export const authSignUp = (firstName, lastName, email, password, history) => async dispatch => {
  dispatch(loading(true));
  try {
    const result = await axios.post(`${API_URL}/signup`, { firstname, lastName, email, password });
    const { cooperative } = result.data;
    await dispatch(loggedIn(result.data.token))
    localStorage.setItem('token', result.data.token);
    dispatch(getCooperatives(cooperative));
    history.push('/dashboard');
    dispatch(loading(false));

  } catch (error) {
    dispatch(failure(error.message))
  } finally {
    dispatch(failure(null))
    dispatch(loading(false))
  }
}