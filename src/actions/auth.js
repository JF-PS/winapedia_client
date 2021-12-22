import { AUTH, LOGOUT } from "../constants/actionTypes";
import userService from "../services/UserServices.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await userService.signIn(formData);
    console.log("=======================");
    console.log(data);

    dispatch({ type: AUTH, data });
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const logout = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT });
    router.push("/map");
  } catch (error) {
    console.log(error);
  }
};
