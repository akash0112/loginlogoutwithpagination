import { GET_TRANSACTIONS } from "../constants/ActionTypes";

const transactionReducer=(transactions=[],action)=>
{ 
    switch (action.type) {
        case GET_TRANSACTIONS:
            return action.tra
        default:
           return transactions;
    }
}
export default transactionReducer