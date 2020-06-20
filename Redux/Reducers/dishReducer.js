import * as actionTypes from '../ActionTypes/actionTypes'
import { FlatList } from 'react-native-gesture-handler'

const dishReducer =(state={
DISHES:[],
LOADING:true,
ERR:null

},action)=>{


    switch(action.type)
    {

        case actionTypes.ADD_DISHS:
         
            return {...state,DISHES:action.payload,LOADING:false,ERR:null}


        case actionTypes.DISHES_LOADING:    
            return {...state,DISHES:[],LOADING:true,ERR:null}



        case actionTypes.DISHES_ERROR:    
     
            return {...state,DISHES:[],LOADING:false,ERR:action.payload}



            default:
                return state       
    }
}

export default dishReducer