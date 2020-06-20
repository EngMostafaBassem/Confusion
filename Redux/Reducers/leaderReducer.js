import * as actionTypes from '../ActionTypes/actionTypes'
import { FlatList } from 'react-native-gesture-handler'

const leaderReducer =(state={
LEADERS:[],
LOADING:true,
ERR:null

},action)=>{


    switch(action.type)
    {

        case actionTypes.ADD_LEADERS:

            return {...state,LEADERS:action.payload,LOADING:false,ERR:null}


        case actionTypes.LEADRES_LOADING:    
            return {...state,LEADERS:[],LOADING:true,ERR:null}



        case actionTypes.LEADERS_ERROR:    
            
            return {...state,LEADERS:[],LOADING:false,ERR:action.payload}



            default:
                return state     
    }
}

export default leaderReducer