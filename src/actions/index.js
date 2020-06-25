import { SET_USER, SET_USER_SUCCESS } from '../reducers/user';

// user actions
const setUser = () => ({ type: SET_USER });
const setUserSuccess = (userData) => ({ type: SET_USER_SUCCESS, payload: { userData }});
// const setUserFailed = () => ({ type: SET_USER_FAILED });

export const authenticate = () => dispatch => {
   dispatch(setUser());
   setTimeout(() => {
      dispatch(setUserSuccess({
         name: "John",
         email: "john@test.com",
         gender: "Male"
      }));
   }, 3000);
};