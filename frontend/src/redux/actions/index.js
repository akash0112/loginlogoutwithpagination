import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { setHeaders } from "../api/api";
import { GET_FAMILIES, GET_LOCATIONS, GET_PRODUCTS, GET_TRANSACTIONS, LOGIN, SIGNUP } from "../constants/ActionTypes";
export const register = (user) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API}/register`, user)
      .then((token) => {
        console.log("-----")
        // console.log("register",token.data.access_token);
        localStorage.setItem("token", token.data.access_token);
      const user=  jwtDecode(token.data.access_token)
        dispatch({
          type: SIGNUP,
          payload: user,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        console.clear();
      });
  };
};

export const login = (user) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API}/login`, user)
      .then((token) => {
        localStorage.setItem("token", token.data.access_token);
        // console.log("login",token.data.access_token);
      const user=  jwtDecode(token.data.access_token)
      // console.log(JSON.stringify(user));
      // console.log(user);
        dispatch({
          type: LOGIN,
          payload: user,
        });
        
      })
      .catch((error) => {
        toast.error(error.response?.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
       
      });
  };
};

export const getProducts = () => {
  // console.log(authHeader());
  // console.log(${process.env.REACT_APP_API_PRODUCTS});
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_PRODUCTS}products`, setHeaders())
      .then((products) => {
        // console.log(products);
        dispatch({
          type: GET_PRODUCTS,
          products,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


export const getFamilies = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_PRODUCTS}families`, setHeaders())
      .then((families) => {
        dispatch({
          type: GET_FAMILIES,
          families,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const getLocations = () => (dispatch)=>{
    axios
      .get(`${process.env.REACT_APP_API_PRODUCTS}locations`, setHeaders())
      .then((locations) => {
       const loc=locations.data
        dispatch({
          type: GET_LOCATIONS,
          loc,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  export const getTransactions = () => (dispatch)=>{
    axios
      .get(`${process.env.REACT_APP_API_PRODUCTS}transactions`, setHeaders())
      .then((transactions) => {
       const tra=transactions.data
        dispatch({
          type: GET_TRANSACTIONS,
        tra,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };