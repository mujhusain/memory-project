import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    // ..login first thn navigate to home page
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    // ..login part

    navigate("/");
  } catch (err) {
    console.log(err);
  }
};
