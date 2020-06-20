import * as actionTypes from '../ActionTypes/actionTypes'
import { FlatList } from 'react-native-gesture-handler'

const commentReducer =(state={
COMMENTS:[],
LOADING:true,
ERR:null

},action)=>{


    switch(action.type)
    {

        case actionTypes.ADD_COMMENTS:
            
            return {...state,COMMENTS:action.payload,LOADING:false,ERR:null}


        case actionTypes.COMMENTS_LOADING:    
            return {...state,COMMENTS:[],LOADING:true,ERR:null}



        case actionTypes.COMMENTS_ERROR:    
            
            return {...state,COMMENTS:[],LOADING:false,ERR:action.payload}




         default:
             return state   
    }
}

export default commentReducer