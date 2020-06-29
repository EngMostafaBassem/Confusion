import * as actionTypes from '../ActionTypes/actionTypes'
import {AsyncStorage} from 'react-native'

const getState= async()=>{
 
  const data=await AsyncStorage.getItem('Key2')
  return data
}

const FavReducer=(state={
    favIDs:[]
},action)=>{


    switch(action.type)
    { 
    case  actionTypes.ADD_DISH_FAV: 
    
       
       return {...state,favIDs:[...state.favIDs,action.payload]}


     case actionTypes.DELETE_DISH_FAV:
          
         return {...state,favIDs:state.favIDs.filter(item=>item!=action.payload)}  

    default:
         return state

}
}

export default FavReducer