import { GET_PRODUCTS } from "../constants/ActionTypes";

const productReducer = (products = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products.data;
      default:
        return products;
}
}
export default productReducer