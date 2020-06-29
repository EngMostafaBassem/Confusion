import React, { useEffect, useState } from 'react'
import {View,Text,FlatList,AsyncStorage} from 'react-native'
import {useDispatch,useSelector} from 'react-redux'
import {ListItem} from 'react-native-elements'
import {baseUrl} from '../json-server/baseUrl'
import Swipeout from 'react-native-swipeout';
import {deleteFavDish,addFavDish} from '../Redux/Actions/dishActions'
import Loading from './Loading'
const Fav=(props)=>{

    const dispatch=useDispatch()
    const DISHES=useSelector(state=>state.dishReducer.DISHES)
    const FAV_DATA=useSelector(state=>state.FavReducer.favIDs)
    const [favDISHES,setFavDishes]=useState([])
    const [val,setVal]=useState("")
    const [loading,setLoading]=useState(true)


    
    
   

    useEffect(()=>{

        setFavDishes(DISHES.filter(item=>FAV_DATA.some(favItem=>item.id===favItem)))
      
       
           

      
    },[FAV_DATA])




    const renderList=({item,index})=>{

        var swipeoutBtns = [
            {
              text: 'Delete',
              type:'delete',
              onPress:()=>{dispatch(deleteFavDish(item.id))}
             
            
            }
          ]
        return (
            
            <Swipeout right={swipeoutBtns} autoClose>
               

            <ListItem
        
            key={index}
            title={item.name}
            subtitle={item.description}
            leftAvatar={{source:{uri:baseUrl+item.image}}}
            onPress={()=>props.navigation.navigate('DishData',{dishID:item.id})}
            
            
            />
        </Swipeout>
        )
    }
    return (
        <View>
       
        
        <FlatList    
        data={favDISHES}
        renderItem={renderList}
        keyExtractor={(item)=>item.id.toString()}
        />
      
        </View>
       
    )
}

export default Fav