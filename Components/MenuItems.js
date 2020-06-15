import React from 'react'
import {View,Text,FlatList} from 'react-native'

import {ListItem} from 'react-native-elements'


const MenuItemRendering=({item,index})=>(

    <ListItem
    
    key={index}
    title={item.name}
    subtitle={item.description}
    leftAvatar={{source:require('./Shared/images/uthappizza.png')}}
    
    />
)

const MenuItem=({dishData})=>{

    return (
        <FlatList
        data={dishData}
        renderItem={MenuItemRendering}
        keyExtractor={(item)=>item.id.toString()}
        
        />
    )

}

export default MenuItem