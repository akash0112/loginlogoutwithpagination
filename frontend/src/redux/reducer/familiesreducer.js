import { GET_FAMILIES } from "../constants/ActionTypes";

const familyReducer = (families = [], action) => {
  switch (action.type) {
    case GET_FAMILIES:
      return action.families.data;
      default:
        return families;
}
}
export default familyReducer