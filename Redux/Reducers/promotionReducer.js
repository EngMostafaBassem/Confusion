import * as actionTypes from '../ActionTypes/actionTypes'
import { FlatList } from 'react-native-gesture-handler'

const pormotionReducer =(state={
PROMOTIONS:[],
LOADING:true,
ERR:null

},action)=>{


    switch(action.type)
    {

        case actionTypes.ADD_PORMOTIONS:
            
            return {...state,PROMOTIONS:action.payload,LOADING:false,ERR:null}


        case actionTypes.PORMOTIONS_LOADING:    
            return {...state,PROMOTIONS:[],LOADING:true,ERR:null}



        case actionTypes.PORMOTIONS_ERROR:    
            
            return {...state,PROMOTIONS:[],LOADING:false,ERR:action.payload}




            default:
                return state  
    }
}

export default pormotionReducer