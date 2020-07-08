import React,{useState} from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import {Input,Button} from 'react-native-elements'

import * as  Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from "expo-image-manipulator";
import {baseUrl} from '../json-server/baseUrl'
const Register=()=>{
    const [fName,setFName]=useState("")
    const [lName,setLName]=useState("")
    const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const [imgUrl,setImgUrl]=useState( baseUrl + "images/alberto.png" )
    const [email,setEmail]=useState("")


    const handleSubmit=()=>{
        
        const obj={fName,lName,userName,password,imgUrl}
        console.log(obj)
    }

    const processImage = async (imageUri) => {
        let processedImage = await ImageManipulator.manipulateAsync(
            imageUri, 
            [
                {resize: {width: 400}}
            ],
            {format: 'png'}
        );
        console.log(processedImage);
       // this.setState({imageUrl: processedImage.uri });
       setImgUrl(processedImage.uri)

    }
    const getImageFromGallery= async()=>{
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRollPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (cameraPermission.status === 'granted' && cameraRollPermission.status === 'granted') {
        let capturedImage = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });
        if (!capturedImage.cancelled) {
            console.log(capturedImage);
            processImage(capturedImage.uri)
        }
    }
   }

   const getImageFromCamera = async () => {
        const cameraPermission =     await Permissions.askAsync(Permissions.CAMERA);
        const cameraRollPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);

        if (cameraPermission.status === 'granted' && cameraRollPermission.status === 'granted') {
            let capturedImage = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [4, 3],
            });
            if (!capturedImage.cancelled) {
                console.log(capturedImage);
                processImage(capturedImage.uri)
            }
        }

    }
    return(
        <View style={styles.formContainer}>

       
            <View style={styles.imgContainer}> 
                <Image
                style={styles.imgStyle}
                
                source={{uri:imgUrl}}
               
                />

            </View>
            <View style={styles.btnsContainer} >
               
                    <Button
                    title="Take Picture"
                    onPress={()=>getImageFromCamera()}
                    containerStyle={styles.btnStyle}
                    />

                     <Button
                    title="Open Gallary"
                    onPress={()=>getImageFromGallery()}
                    containerStyle={styles.btnStyle}
                    />


            </View>
            <View style={styles.groupContainer}>
                <Input
                placeholder="First Name"
                value={fName} 
                onChangeText={(text)=>setFName(text)} 
                leftIcon={{type:'font-awesome',name:'user'}}   
                
                />
            </View>
            <View  style={styles.groupContainer}>
                <Input
                placeholder="Last Name"
                value={lName}     
                onChangeText={(text)=>setLName(text)}
                leftIcon={{type:'font-awesome',name:'user'}}
                
                />
            </View>


            <View  style={styles.groupContainer}>
                <Input
                placeholder="User Name"
                value={userName}     
                onChangeText={(text)=>setUserName(text)}
                leftIcon={{type:'font-awesome',name:'user'}}
                
                />
            </View>

            <View  style={styles.groupContainer}>
                <Input
                placeholder="Password"
                value={password}     
                onChangeText={(text)=>setPassword(text)}
                leftIcon={{type:'font-awesome',name:'key'}}
                
                />
            </View>


            <View  style={styles.groupContainer}>
                <Input
                placeholder="Email"
                value={email}     
                onChangeText={(text)=>setEmail(text)}
                leftIcon={{type:'font-awesome',name:'envelope-square'}}
                
                
                />
            </View>

            <View  style={styles.groupContainer}>
                <Button
                title="Register"
                    onPress={handleSubmit}        
                />
            </View>
            
         

        </View>
    )
}
export default Register

const styles=StyleSheet.create({
  
    formContainer:{
        justifyContent:'center',
        margin:5
    },
    groupContainer:{
        margin:5
    },
    btnsContainer:{
       
        flexDirection:'row',
        justifyContent:'space-between'

    },
    btnStyle:{
        flex:1,
        marginRight:2,
    },
    imgContainer:{
      flexDirection:'row',
      justifyContent:'center',
      margin:14
    },
    imgStyle:{
        height:80,
        width:80,
        borderRadius:40
    }

})
