import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFamilies } from '../../redux/actions'
const Family = () => {
    const families = useSelector(state => state.families)
    const dispatch = useDispatch()
    useEffect(() => {
     dispatch(getFamilies())
    }, [dispatch])
    return (
        <div>
            <h1>Family</h1>
            {families?families.map((c)=><h1 key={c.id}>{c.name}</h1>):"not found"}
        </div>
    )
}

export default Family
