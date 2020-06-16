
import React ,{Component}from 'react'
import {View,Text} from 'react-native'
import {DISHES} from './Shared/dishes'

import Menu from './MenuItems'
import DishDetailsComponent from './DishDetailsComponent'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import Home from './Home'

const MenuNavigator=createStackNavigator({

    Menu:{
        screen:Menu,    
    
    },
    DishData:{
        screen:DishDetailsComponent,
        navigationOptions:{
          title:'Details Of Dish'
      }
    
        
    }

   },
     {
       initialRouteKey:'Home',
    
 })

 const HomeNavigator=createStackNavigator({
     Home:{
         screen:Home,
         navigationOptions:{
             title:'Home'
         }
     }
 })




const DrawerNavigator=createDrawerNavigator({

    Home:HomeNavigator,
    Menu:MenuNavigator,
    


}
,{
    initialRouteName:'Menu'
}


)



const  MainComponent=createAppContainer(DrawerNavigator)





export default MainComponent