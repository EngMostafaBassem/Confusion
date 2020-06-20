import * as actionTypes from '../ActionTypes/actionTypes'

import axios from 'axios'
import {baseUrl} from '../../json-server/baseUrl'
export const fetchLeaders=()=>dispatch=>{

    dispatch(leadersLoading())
    
    axios.get(baseUrl+'leaders').
    then(res=>dispatch(addLeaders(res.data))).
    catch(err=>dispatch(leaderError(err)))
     

}

export const addLeaders=(leaders)=>({
    type:actionTypes.ADD_LEADERS,
    payload:leaders
})

export const leadersLoading=()=>({
    type:actionTypes.LEADRES_LOADING
})

export const leaderError=(err)=>({
    type:actionTypes.LEADERS_ERROR,
    payload:err
})