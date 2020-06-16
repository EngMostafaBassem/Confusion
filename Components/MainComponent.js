
import React ,{Component}from 'react'
import {View,Text} from 'react-native'
import {DISHES} from './Shared/dishes'

import Menu from './MenuItems'
import DishDetailsComponent from './DishDetailsComponent'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import Contact from './ContactComponent'
import Home from './Home'
import About from './AboutComponent'

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

 const ContactNavigator=createStackNavigator({
     Contact:{
         screen:Contact,
         navigationOptions:{
             title:"Contact Us"
         }
     }

 })





 const AboutNavigator=createStackNavigator({
    Contact:{
        screen:About,
        navigationOptions:{
            title:"About Us"
        }
    }

})





const DrawerNavigator=createDrawerNavigator({

    Home:HomeNavigator,
    Menu:MenuNavigator,
    Contact:ContactNavigator,
    About:AboutNavigator

    


}
,{
    initialRouteName:'Menu'
}


)



const  MainComponent=createAppContainer(DrawerNavigator)





export default MainComponent