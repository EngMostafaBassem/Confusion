import React,{useEffect,useState} from 'react'
import {View,Text} from 'react-native'
import {Card} from 'react-native-elements'
import {DISHES} from './Shared/dishes'
const DishDetailsComponent=(props)=>{


    
   const [dish,setDish]=useState(null)
    useEffect(()=>{
  
        const filterdDishID=props.navigation.getParam('dishID')

        const filterdDish=DISHES.find(item=>item.id==filterdDishID)
        setDish(filterdDish)
      
          

    },[])
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