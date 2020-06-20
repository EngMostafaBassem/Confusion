import React, { useEffect } from 'react'
import {View,Text,ScrollView} from 'react-native'
import {Card} from 'react-native-elements'

import {useSelector} from 'react-redux'
import {baseUrl} from '../json-server/baseUrl'
const RenderItem=({item})=>(
 <Card
 image={{uri:baseUrl+ item.image}}
 title={item.name} 
 >
     <Text>{item.description}</Text>
</Card>
)


const Home=()=>{
    const dishData=useSelector(state=>state.dishReducer)
    const leaderData=useSelector(state=>state.leaderReducer)
    const promotionData=useSelector(state=>state.promotionReducer)


   
    return(
    <View >
        <ScrollView> 
            
        <RenderItem  item={dishData.DISHES.find(item=>item.featured)}/>
        <RenderItem  item={leaderData.LEADERS.find(item=>item.featured)}/>
        <RenderItem  item={promotionData.PROMOTIONS.find(item=>item.featured)}/>
     </ScrollView>
        
    </View>
    )
}
export default Home