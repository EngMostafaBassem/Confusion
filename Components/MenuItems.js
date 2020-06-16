import React from 'react'
import {View,Text,FlatList} from 'react-native'

import {ListItem} from 'react-native-elements'
import  {DISHES} from './Shared/dishes'


const Menu =(props)=>{





    const MenuItemRendering=({item,index})=>(

        <ListItem
        
        key={index}
        title={item.name}
        subtitle={item.description}
        leftAvatar={{source:require('./Shared/images/uthappizza.png')}}
        onPress={()=>props.navigation.navigate('DishData',{dishID:item.id})}
        
        
        />
    )


    return (

        
        <View >
          
      <FlatList
        data={DISHES}
        renderItem={MenuItemRendering}
        keyExtractor={(item)=>item.id.toString()}
           
        />
        </View>
    )
    }

export default Menu