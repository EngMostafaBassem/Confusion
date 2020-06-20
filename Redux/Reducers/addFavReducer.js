import * as actionTypes from '../ActionTypes/actionTypes'
const addFavReducer=(state={
    favIDs:[]
},action)=>{


    switch(action.type)
    { 
    case  actionTypes.ADD_DISH_FAV: 
    
       
       return {...state,favIDs:[...state.favIDs,action.payload]}
    default:
         return state    

  }

}

export default addFavReducer