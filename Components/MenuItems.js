import React from 'react'
import {View,Text,FlatList} from 'react-native'

import {ListItem} from 'react-native-elements'
import {useSelector} from 'react-redux'
import Loading from './Loading'
import { baseUrl } from '../json-server/baseUrl'

const Menu =(props)=>{

    const dishData=useSelector(state=>state.dishReducer)
    const MenuItemRendering=({item,index})=>(

        <ListItem
        
        key={index}
        title={item.name}
        subtitle={item.description}
        leftAvatar={{source:{uri:baseUrl+item.image}}}
        onPress={()=>props.navigation.navigate('DishData',{dishID:item.id})}
        
        
        />
    )

    return (
        
        <View  style={{flex:1}} >
       
          
          {
             
             dishData.LOADING===true?<Loading/>:
             <FlatList
             data={dishData.DISHES}
             renderItem={MenuItemRendering}
             keyExtractor={(item)=>item.id.toString()}
                
             />

              
          }
          
     
        </View>
    )
    }

export default Menu