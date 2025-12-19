import {
  SET_AUTHENTICATION,
  SET_CART_COUNT,
  SET_IS_PROFILE,
  SET_LOADING,
  SET_LOGOUT,
  SET_PROFILE_DATA,
} from './actionTypes';
import {initialState} from './globalContext';

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_PROFILE_DATA:
      return {
        ...state,
        profile: action.payload,
        isProfile: true,
      };
    case SET_CART_COUNT:
      return {
        ...state,
        cartCount: action.payload,
      };
    case SET_IS_PROFILE:
      return {
        ...state,
        isProfile: action.payload,
      };
    case SET_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        profile: null,
        isProfile: false,
      };

    default:
      return state;
  }
};
