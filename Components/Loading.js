import React from 'react'
import {ActivityIndicator,StyleSheet,View} from 'react-native'
const Loading=()=>{

    return(
        <View style={styles.indicatorStyle}>
            
<  ActivityIndicator size="large" color='gray'/>
</View>
    )
}

export default Loading

const styles=StyleSheet.create({

    indicatorStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }


})