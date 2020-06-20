import * as actionTypes from '../ActionTypes/actionTypes'

import axios from 'axios'
import {baseUrl} from '../../json-server/baseUrl'
export const fetchPormotion=()=>dispatch=>{

    dispatch(pormotionsLoading())
    
    axios.get(baseUrl+'promotions').
    then(res=>dispatch(addPormotions(res.data))).
    catch(err=>dispatch(pormotionError(err)))
     

}

export const addPormotions=(pormotions)=>({
    type:actionTypes.ADD_PORMOTIONS,
    payload:pormotions
})

export const pormotionsLoading=()=>({
    type:actionTypes.PORMOTIONS_LOADING
})

export const pormotionError=(err)=>({
    type:actionTypes.PORMOTIONS_ERROR,
    payload:err
})