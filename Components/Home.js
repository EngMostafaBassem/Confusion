import React from 'react'
import {View,Text,ScrollView} from 'react-native'
import {DISHES} from './Shared/dishes'
import {LEADERS} from './Shared/leaders'
import {PROMOTIONS} from './Shared/promotions'
import {Card} from 'react-native-elements'

const RenderItem=({item})=>(
 <Card
 image={require('./Shared/images/uthappizza.png')}
 title={item.name} 
 >
     <Text>{item.description}</Text>
</Card>
)


const Home=()=>(


    <View >
        <ScrollView> 
            
        <RenderItem  item={DISHES.find(item=>item.featured)}/>
        <RenderItem  item={LEADERS.find(item=>item.featured)}/>
        <RenderItem  item={PROMOTIONS.find(item=>item.featured)}/>
     </ScrollView>
        
    </View>
)
export default Home