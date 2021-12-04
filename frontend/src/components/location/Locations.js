import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getLocations } from '../../redux/actions'
const Locations = () => {
    const locations = useSelector(state => state.location)
    const dispatch = useDispatch()
    useEffect(() => {
     dispatch(getLocations())
    }, [dispatch])
    return (
        <div>
            <h1>Locations</h1>
            {locations?locations.map((c)=><h1 key={c.id}>{c.name}</h1>):"not found"}
        </div>
    )
}

export default Locations
