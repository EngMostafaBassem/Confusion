import {combineReducers} from 'redux'
import commentReducer from './Reducers/commentReducer'
import dishReducer from './Reducers/dishReducer'
import leaderReducer from './Reducers/leaderReducer'
import promotionReducer from './Reducers/promotionReducer'
import FavReducer from './Reducers/FavReducer'


import {persistCombineReducers} from 'redux-persist'
import {AsyncStorage} from 'react-native'
const rootReducer =persistCombineReducers({

key:'root',
storage:AsyncStorage,
debug:true

},
{
commentReducer,
dishReducer,
leaderReducer,
promotionReducer,
FavReducer

})

export default rootReducer