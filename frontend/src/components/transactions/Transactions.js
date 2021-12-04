import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTransactions } from '../../redux/actions';

const Transactions = () => {
    const transactions = useSelector(state => state.transactions)
    console.log(transactions);
    const dispatch = useDispatch()
    useEffect(() => {
     dispatch(getTransactions())  
    }, [])
    return (
        <div>
            <h1>Transactions</h1>
            {transactions?transactions.map((c)=><h1 key={c.id}>Product id:- {c.productId} quantity:- {c.quantity}</h1>):"not found"}
        </div>
    )
}

export default Transactions
