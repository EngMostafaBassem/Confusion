import React,{useEffect,useState} from 'react'
import NavComponent from './NavComponent'
import {useDispatch} from 'react-redux'
import {fetchDishes} from '../Redux/Actions/dishActions'
import {fetchComments} from '../Redux/Actions/commentActions'
import {fetchLeaders} from '../Redux/Actions/leaderActions'
import {fetchPormotion} from '../Redux/Actions/pormotionAction'
import {ToastAndroid} from 'react-native'
import NetInfo from '@react-native-community/netinfo';
import { View } from 'react-native-animatable'

const Main=()=>{
    const dispatch=useDispatch()
    const[isConnected,setIsConnected]=useState(true)
   
    const unsubscribe = NetInfo.addEventListener(state => {
      
        setIsConnected(state.isConnected)
      });
    useEffect(()=>{

        dispatch(fetchDishes())
        dispatch(fetchLeaders())
        dispatch(fetchPormotion())
        dispatch(fetchComments())
        //getCurrentCon()
        unsubscribe()
        
       

    },[])

    if(isConnected) return <NavComponent/>
    else return <View><Text>No access to internet</Text></View>

}

export default Main
