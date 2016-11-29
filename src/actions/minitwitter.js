import {
  LOGIN_TWITTER,
  TWITT_TWITTER,
  SET_INPUT_TWITTER,
  LIKE_TWITTER,
  COMMENT_TWITTER,
  LOGOUT_TWITTER
} from './const';

export const login = (payload) => {
  return { type: LOGIN_TWITTER, payload };
};

export const logout = (payload) => {
  return { type: LOGOUT_TWITTER, payload };
};

export const twitt = (payload) => {
  return { type: TWITT_TWITTER, payload };
};

export const inputText = (payload) => {
  return { type: SET_INPUT_TWITTER, payload };
};

export const like = (payload) => {
  return { type: LIKE_TWITTER, payload };
};

export const reply = (payload) => {
  return { type: COMMENT_TWITTER, payload }
};
