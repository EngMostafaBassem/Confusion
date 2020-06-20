import React,{useEffect} from 'react'
import NavComponent from './NavComponent'
import {useDispatch} from 'react-redux'
import {fetchDishes} from '../Redux/Actions/dishActions'
import {fetchComments} from '../Redux/Actions/commentActions'
import {fetchLeaders} from '../Redux/Actions/leaderActions'
import {fetchPormotion} from '../Redux/Actions/pormotionAction'
const Main=()=>{
    const dispatch=useDispatch()


    useEffect(()=>{

        dispatch(fetchDishes())
        dispatch(fetchLeaders())
        dispatch(fetchPormotion())
        dispatch(fetchComments())

    },[])

    return <NavComponent/>

}

export default Main
