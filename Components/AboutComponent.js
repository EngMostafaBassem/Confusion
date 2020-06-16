import React from 'react'
import {Text,View,FlatList,ScrollView} from 'react-native'
import {Card,ListItem} from 'react-native-elements'
import {LEADERS} from './Shared/leaders'


const History=()=>(
    <Card title="Our History"> 
    <Text>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us</Text>

    <Text>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</Text>

  </Card>
)


const About=()=>{

    const renderItem=({item,index})=>(
            <ListItem
            key={index}
            title={item.name}
            subtitle={item.description}
            leftAvatar={{source: require('./Shared/images/alberto.png')}}

            
            />

            
    )
    return(
        <ScrollView>
     
        <History/>
      <Card title="Coporate Leadership">
         
       
         <FlatList
         keyExtractor={item=>item.id.toString()}
         data={LEADERS}
         renderItem={renderItem}
        
         />
        
      </Card>
      
      </ScrollView>
    )
    }
export default About