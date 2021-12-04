import { toast } from "react-toastify";
import { LOGIN, SIGNUP } from "../constants/ActionTypes";

const initialState = {
  token: "",
  email: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
        toast("Signup Successfull...", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          return {
            ...initialState,
            email: action.payload.email
          };
    case LOGIN:
      toast("Welcome...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        ...initialState,
        email: action.payload.email
      };
    default:
      return state;
  }
};

export default authReducer;
