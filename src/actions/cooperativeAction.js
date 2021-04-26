import axios from 'axios';
import * as actionTypes from './types';

const API_URL = 'http://localhost:3000/coop';

const loadingCooperative = () => {
  return {
    type: actionTypes.LOADING,
  };
};
const loggedIn = payload => {
  return {
    type: actionTypes.LOGGED_IN,
    payload
  };
};
const getCooperative = () => {
  return {
    type: actionTypes.GET_COOPERATIVE,
  };
};
const addCooperative = cooperative => {
  return {
    type: actionTypes.ADD_COOPERATIVE,
    payload: cooperative
  };
};
const getMyCooperative = (coopId) => {
  return {
    type: actionTypes.GET_MY_COOPERATIVE,
    payload: coopId
  };
};

const getCooperativeMembers = (coopId) => {
  return {
    type: actionTypes.GET_COOPERATIVE_MEMBERS,
    payload: coopId
  };
};
const addCooperativeMember = cooperativeMember => {
  return {
    type: actionTypes.ADD_COOPERATIVE_MEMBER,
    payload: cooperativeMember
  };
};
const failure = error => {
  return {
    type: actionTypes.FAILURE,
    payload: error
  };
};
const success = cooperative => {
  return {
    type: actionTypes.SUCCESS,
    payload: cooperative
  };
};
const loadingItem = payload => {
  return {
    type: actionTypes.LOADING_ITEM,
    payload
  };
};
const addNewItem = item => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: item
  };
};
const getACooperativeItem = () => {
  return {
    type: actionTypes.GET_A_COOPERATIVE_ITEM,
  };
};
const getAllCooperativeItem = () => {
  return {
    type: actionTypes.GET_ALL_COOPERATIVE_ITEM,
  };
};
const getASingleItem = id => {
  return {
    type: actionTypes.GET_A_SINGLE_ITEM,
    payload: id
  };
};
const editASingleItem = id => {
  return {
    type: actionTypes.EDIT_A_SINGLE_ITEM,
    payload: id
  };
};
const loading = payload => {
  return {
    type: actionTypes.LOADING_LOGIN,
    payload
  };
};

export const createCooperative = (coopName, email, agrementPath, slot, userId) => async dispatch => {
  dispatch(loadingCooperative(true));
  const headers = await {
    Authorization: localStorage.getItem('token')
  };
  try {
    const response = await axios.post(`${API_URL}/create`,
      { coopName, email, agrementPath, slot, userId },
      { headers });
    const cooperativeData = response.data;
    if (cooperativeData.length > 0) {
      localStorage.setItem('cooperative', true);
    }
    dispatch(addCooperative(cooperativeData));
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(failure(null));
    dispatch(loadingCooperative(false));
  }
};

export const setMyCooperative = () => async dispatch => {
  dispatch(loadingCooperative(true));
  const headers = await {
    Authorization: localStorage.getItem('token')
  };
  try {
    const response = await axios.get(`${API_URL}/coops`, { headers });
    dispatch(getMyCooperative(response.data));
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(failure(null));
    dispatch(loadingCooperative(false));
  }
};

export const setCooperative = (coopId) => async dispatch => {
  dispatch(loadingCooperative(true));
  const headers = await {
    Authorization: localStorage.getItem('token')
  };
  try {
    const response = await axios.get(`${API_URL}/${coopId}`, { headers });
    dispatch(getCooperative(response.data));
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(failure(null));
    dispatch(loadingCooperative(false));
  }
};

//Add and get all members of a cooperative

export const setCooperativeMembers = (coopId) => async dispatch => {
  dispatch(loadingCooperative(true));
  const headers = await {
    Authorization: localStorage.getItem('token')
  };
  try {
    const response = await axios.get(`${API_URL}/${coopId}/members`, { headers });
    dispatch(getCooperativeMembers(response.data));
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(failure(null));
    dispatch(loadingCooperative(false));
  }
};

export const addNewCooperativeMember = (userId) => async dispatch => {
  dispatch(loadingCooperative(true));
  const headers = await {
    Authorization: localStorage.getItem('token')
  };
  try {
    const response = await axios.put(`${API_URL}/:coopId/add_member`, { userId }, { headers });
    dispatch(addCooperativeMember(response.data));
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(failure(null));
    dispatch(loadingCooperative(false));
  }
};

//Cooperative Items

export const createItem = (userId, coopId, description, price, imagePath, ) => async dispatch => {
  dispatch(loadingItem(true));
  const headers = await {
    Authorization: localStorage.getItem('token')
  };
  try {
    const response = await axios.post(`${API_URL}/:coopId/add_item`,
      {
        userId,
        coopId,
        description,
        price,
        imagePath,
      },
      { headers });
    dispatch(addNewItem(response.data));
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(failure(null));
    dispatch(loadingItem(false));
  }
};

export const setCooperativeItems = (coopId) => async dispatch => {
  dispatch(loadingItem(true));
  const headers = await {
    Authorization: localStorage.getItem('token')
  };
  try {
    const response = await axios.get(`${API_URL}/${coopId}/items`, { headers });
    dispatch(getACooperativeItem(response.data));
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(failure(null));
    dispatch(loadingItem(false));
  }
};
export const setAllCooperativeItems = () => async dispatch => {
  dispatch(loadingItem(true));
  const headers = await {
    Authorization: localStorage.getItem('token')
  };
  try {
    const response = await axios.get(`${API_URL}/all_items`, { headers });
    dispatch(getAllCooperativeItem(response.data));
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(failure(null));
    dispatch(loadingItem(false));
  }
};
export const setSingleCooperativeItem = (itemId) => async dispatch => {
  dispatch(loadingItem(true));
  const headers = await {
    Authorization: localStorage.getItem('token')
  };
  try {
    const response = await axios.get(`${API_URL}/:coopId/${itemId}`, { headers });
    dispatch(getASingleItem(response.data));
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(failure(null));
    dispatch(loadingItem(false));
  }
};

export const editSingleItem = (userId, coopId, description, price, imagePath, history) => async dispatch => {
  dispatch(loadingCooperative(true));
  const headers = await {
    Authorization: localStorage.getItem('token')
  };
  try {
    const response = await axios.put(`${API_URL}/${coopId}/item/:itemId`,
      { userId, coopId, description, price, imagePath }, { headers });
    dispatch(editASingleItem(response.data));
    dispatch(getASingleItem());
  } catch (error) {
    dispatch(failure(error.message));
  } finally {
    dispatch(failure(null));
    dispatch(loadingCooperative(false));
  }
};