import React from 'react'
import {View,Text} from 'react-native'
import {Card} from 'react-native-elements'
const DishDetailsComponent=({dish})=>{

    return (
       <View>


              {
                  (dish!=null)&&
                  (
                  <Card featuredTitle={dish.name} image={require('./Shared/images/uthappizza.png')}>
                  <Text>{dish.description}</Text>
   
              </Card>)
              }
          

       </View>
    )
}

export default DishDetailsComponent