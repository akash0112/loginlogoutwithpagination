// import axios from 'axios'
export const setHeaders = () => {
  let user = localStorage.getItem("token");
    const headers = {
      headers: {
        "Authorization": 'Bearer ' + user
      },
    };  
    return headers;
  };
//   export function authHeader() {
//     // return authorization header with jwt token
//     let user = JSON.parse(localStorage.getItem("token"));
// console.log(user);
//     if ( user.token) {
//         return { 'Authorization': 'Bearer ' + user.token };
//     } else {
//         return {};
//     }
// }
// const client = axios.create({
//   baseURL: "http://localhost:8000/",
// });

// export default client;