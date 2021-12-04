import { GET_LOCATIONS } from "../constants/ActionTypes";

const locationReducer=(location=[],action)=>
{ 
    switch (action.type) {
        case GET_LOCATIONS:
            return action.loc
        default:
           return location;
    }
}
export default locationReducer