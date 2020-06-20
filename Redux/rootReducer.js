import {combineReducers} from 'redux'
import commentReducer from './Reducers/commentReducer'
import dishReducer from './Reducers/dishReducer'
import leaderReducer from './Reducers/leaderReducer'
import promotionReducer from './Reducers/promotionReducer'
import addFavReducer from './Reducers/addFavReducer'
const rootReducer=combineReducers({
commentReducer,
dishReducer,
leaderReducer,
promotionReducer,
addFavReducer

})

export default rootReducer