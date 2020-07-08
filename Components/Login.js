import {View,StyleSheet, ImagePropTypes} from 'react-native'
import {Input,CheckBox,Button, Icon} from 'react-native-elements'
import React,{useState,useEffect} from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createAppContainer} from 'react-navigation'
import Register from './Register'
import * as SecureStore from 'expo-secure-store';
import {createStackNavigator} from 'react-navigation-stack'
const LoginScreen=(props)=>{
    const [name,setName]=useState()
    const [password,setPassword]=useState()
    const[rememberMe,setRememberMe]=useState(false)

    const handleSubmit=()=>{
        const obj={name,password,rememberMe}
       
        if(rememberMe===true)
         SecureStore.setItemAsync('userInfo',JSON.stringify(obj)).then((data)=>console.log(data))
        else
        SecureStore.deleteItemAsync('userInfo').then(data=>console.log('delete data successfully'))
          

    }


    useEffect(()=>{

          SecureStore.getItemAsync('userInfo').then(data=>{

           const obj=JSON.parse(data)
            setName(obj.name)
            setPassword(obj.password)
            setRememberMe(obj.rememberMe)
            
         }).catch(err=>console.log(err))
    },[])

    return (
        <View style={styles.formContainer}>
            <View style={styles.formGroup}>
                <Input
                placeholder="Enter Your Name"
                leftIcon={{type:'font-awesome',name:'user'}}
                onChangeText={(text)=>setName(text)}
                value={name}
                />
            </View>

            <View style={styles.formGroup}>
                <Input
                placeholder="Enter Your Password"
                leftIcon={{type:'font-awesome',name:'key'}}
                onChangeText={(text)=>setPassword(text)}
                value={password}
                />
            </View>


            <View>
               <CheckBox
               title="Rember Me?"
               checked={rememberMe}
               onPress={()=>setRememberMe(!rememberMe)}
               
               />
            </View>

            <View  style={styles.formGroup}>
                <Button
                title="Login"
                onPress={()=>handleSubmit()}
                icon={
                    <Icon
                    name='sign-in'
                    type='font-awesome'
                    />
                }
                    
                
                
                
                />
            </View>
            <View  style={styles.formGroup}>
                <Button
                title="Register"
                onPress={()=>props.navigation.navigate('Register')}

                icon={
                    <Icon
                    name='user-plus'
                    type='font-awesome'
                    />
                }
                />
            </View>

        </View>
    )
}




const LoginNavigator=createBottomTabNavigator({
    Login:{
        screen:LoginScreen,
        navigationOptions:{
            tabBarIcon:()=>
            <Icon
            name='sign-in'
            type='font-awesome'
            />
        }
    },

    
    Register:{
        screen:Register,
        navigationOptions:{
          
            tabBarIcon:()=>
            <Icon
            name='user-plus'
            type='font-awesome'
            />
        }
    },


},{
    tabBarOptions:{
        activeBackgroundColor: '#9575CD',
        inactiveBackgroundColor: '#D1C4E9',
        activeTintColor: '#ffffff',
        inactiveTintColor: 'gray'
    }
})

const Login=createAppContainer(LoginNavigator)


export default Login

const styles=StyleSheet.create({

    formContainer:{
        margin:15,
        justifyContent:'center'
    },
    formGroup:{
        margin:5
    }

})