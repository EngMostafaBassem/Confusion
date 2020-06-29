import * as actionTypes from '../ActionTypes/actionTypes'

import axios from 'axios'
import {baseUrl} from '../../json-server/baseUrl'
export const fetchDishes=()=>dispatch=>{

    dispatch(dishesLoading())
    

    
    axios.get(baseUrl+'dishes').
    then(res=> dispatch(addDishes(res.data))). 
    catch(err=>dispatch(dishError(err)))
     

}

export const addDishes=(dishes)=>({
    type:actionTypes.ADD_DISHS,
    payload:dishes
})

export const dishesLoading=()=>({
    type:actionTypes.DISHES_LOADING
})

export const dishError=(err)=>({
    type:actionTypes.DISHES_ERROR,
    payload:err
})



export const postFavDish=(id)=>dispatch=>{

    setTimeout(() => {
      
        dispatch(addFavDish(id))
    }, 800);
}


export const addFavDish=(id)=>({
    type:actionTypes.ADD_DISH_FAV,
    payload:id
})

export const deleteFavDish=(id)=>({
    type:actionTypes.DELETE_DISH_FAV,
    payload:id
})