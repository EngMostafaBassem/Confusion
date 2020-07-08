
import React ,{Component,useEffect}from 'react'
import {View,Text,StyleSheet,Image,SafeAreaView,ScrollView} from 'react-native'
import Menu from './MenuItems'
import DishDetailsComponent from './DishDetailsComponent'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation'
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer'
import Contact from './ContactComponent'
import Home from './Home'
import About from './AboutComponent'
import {Icon} from 'react-native-elements'
import { baseUrl } from '../json-server/baseUrl';
import { createNativeWrapper } from 'react-native-gesture-handler';
import Reverse from './ReserveComponent';
import Fav from './Fav'
import Login from './Login'
import Register from './Register'



const CustomDrawerContentComponent = (props) => (
    <ScrollView>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.drawerHeader}>
          <View style={{flex:1}}>
          <Image source={{uri:baseUrl+"images/logo.png"}} style={styles.drawerImage} />
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
          </View>
        </View>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );


const ReverseNavigator=createStackNavigator({

  Reverse:{
    screen:Reverse,
    navigationOptions:({navigation})=>({

      title:'Reverse Table',
      headerLeft:()=><Icon name="menu" size={24} color='black' onPress={()=>navigation.toggleDrawer()}/>

    })
  }
})

const LoginNavigator=createStackNavigator({

  Login:{
    screen:Login,
    navigationOptions:({navigation})=>({
      headerLeft:()=><Icon name="menu" size={24} color='black' onPress={()=>navigation.toggleDrawer()}/>,
     
    })
  }
})

const MenuNavigator=createStackNavigator({

    Menu:{
        screen:Menu,
        navigationOptions:(({navigation})=>({
            
            title:'Menu',
            headerLeft:()=><Icon name="menu" size={24} color='black' onPress={()=>navigation.toggleDrawer()}/>
        


    }))

    
    },
    DishData:{
        screen:DishDetailsComponent,
      
    
        
    }

   },
     {
       initialRouteKey:'Home',
    
 })

 const HomeNavigator=createStackNavigator({
     Home:{
         screen:Home,
         
         navigationOptions:(({navigation})=>({
            
                title:'Home',
                headerLeft:()=><Icon name="menu" size={24} color='black' onPress={()=>navigation.toggleDrawer()}/>
            


        }))

         

     }
 })

 const ContactNavigator=createStackNavigator({
     Contact:{
         screen:Contact,
         navigationOptions:(({navigation})=>({
            
            title:'Contacts',
            headerLeft:()=><Icon name="menu" size={24} color='black' onPress={()=>navigation.toggleDrawer()}/>
        


    }))

     }

 })





 const AboutNavigator=createStackNavigator({
    Contact:{
        screen:About,
        navigationOptions:(({navigation})=>({
            
            title:'About US',
            headerLeft:()=><Icon name="menu" size={24} color='black' onPress={()=>navigation.toggleDrawer()}/>
        


    }))

    }


})





const FavNavigator=createStackNavigator({
  Contact:{
      screen:Fav,
      navigationOptions:(({navigation})=>({
          
          title:'Favourits',
          headerLeft:()=><Icon name="menu" size={24} color='black' onPress={()=>navigation.toggleDrawer()}/>
      


  }))

  }

})






const DrawerNavigator=createDrawerNavigator({


  Login:{
    screen:LoginNavigator,
    navigationOptions:{
      drawerIcon:()=>  <Icon
      name='sign-in'
      type='font-awesome'            
      size={24}
      
    />
    }
  

  },
    Home:
    {
        screen:HomeNavigator, 
        navigationOptions:{
            drawerIcon:()=>  <Icon
            name='home'
            type='font-awesome'            
            size={24}
            
          />
        }
       

    },
   
    Menu:{
        screen:MenuNavigator,
        navigationOptions:{
            drawerIcon:()=> <Icon
            name='list'
            type='font-awesome'            
            size={24}
           
          />
           
          
        }
    },
    
    
   
    Contact:
    {
        screen: ContactNavigator,
        navigationOptions:{
            drawerIcon:()=><Icon
            name='address-card'
            type='font-awesome'            
            size={22}
           
          />,
         
        }
    },
    
   
    About:{
        screen:AboutNavigator,
        navigationOptions:{
            drawerIcon:()=>
            <Icon
            name='info-circle'
            type='font-awesome'            
            size={24}
            
          />
        }
    },

    Reverse:{
      screen:ReverseNavigator,
      navigationOptions:{
        title:'Reverse Table',
        drawerIcon:()=>
        <Icon
        name='book'
        type='font-awesome'            
        size={24}
        
      />

      }
    },


    Fav:{
      screen:FavNavigator,
      navigationOptions:{
        title:'My Favourites',
        drawerIcon:()=>
        <Icon
        name='heart'
        type='font-awesome'            
        size={24}
        
      />

      }
    }
    
    


}
,{
    initialRouteName:'Menu',
    contentComponent:CustomDrawerContentComponent
    
   
   
}


)



const  NavComponent=createAppContainer(DrawerNavigator)





export default NavComponent


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    drawerHeader: {
      backgroundColor: '#512DA8',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
    },
    drawerHeaderText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold'
    },
    drawerImage: {
      margin: 10,
      width: 80,
      height: 60
    }
  });
  