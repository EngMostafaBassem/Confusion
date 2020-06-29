import React,{useState, useEffect} from 'react'
import {View,Text,Picker,Switch,Button,StyleSheet,Modal,Alert} from 'react-native' 
import DatePicker from 'react-native-datepicker'
import { TouchableHighlight,TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';


const Reverse=()=>{

    const [date,setDate]=useState('2020-01-01')
    const [smoking,setSmoking]=useState(false)
    const [guests,setGuests]=useState("1")
    const [visible,setVisible]=useState(false)

    const toggleSmoking=()=>{setSmoking(!smoking)}


    const handleSubmit=()=>{
       // const formData={guests,smoking,date}
      
       // setVisible(true)
        Alert.alert('Your Reservation OK ?',`Number of Guests:${guests}\nSmoking?${smoking}\nData and Time:${date}`,
        
        [
            {
                 text:'cancel',
                 style:'cancel'
            },
            {
                text:'ok',
                onPress:()=>{

                    setSmoking(false)
                    setGuests("1")
                    setDate("2020-01-01")
                }
            }


        ])
    }
    



    return(
       <Animatable.View  animation="zoomIn" duration={2000} easing="ease-out" >

        
               <Modal
                animationType="slide"
                transparent={true}
                visible={visible}

                
               
               >
                   <View style={styles.modalContainer}>
                      <View style={styles.modalCard}>
                          <View style={styles.modalTitleContainer}>
                           <Text style={styles.modalTitle}>Your Reservation</Text>
                          </View>

                               <View style={styles.modalContent}>          
                                   
                         <View>
                             <Text>Number of Guests is {guests}</Text>

                          </View>

                          
                          <View>
                             <Text>Smoking?  {smoking?'Smoking':'Not Smoking' }</Text>

                          </View>


                          
                          <View>
                             <Text>Date is  {date}</Text>

                          </View>
                         
                      </View>
                    

                       <View style={{justifyContent:'center',alignItems:'center'}}>
                           
                           
                           <Button title="Close" onPress={()=>setVisible(false)}/>
                          
                          </View>
                         
                   </View>
                   </View>
               
               </Modal>
           

           <View style={styles.formGroup}>

          
           <View style={styles.rowForm} >
              <View style={styles.colForm}>
                 <Text style={{paddingTop:10}}> Guests</Text>
              </View>

              <View  style={styles.colForm} >
                  <Picker  onValueChange={(itemValue,itemIndex)=>setGuests(itemValue)} selectedValue={guests} >
                      <Picker.Item  value="1" label="1" />
                      <Picker.Item  value="2" label="2" />
                      <Picker.Item  value="3" label="3" />
                      <Picker.Item  value="4" label="4" />
                  </Picker>
              </View>
              

</View>


</View>

<View style={styles.formGroup}>

              <View style={styles.rowForm}  >


              <View  style={styles.colForm}>
                 <Text>SmokingOrNot</Text>
              </View>

              <View  style={styles.colForm}>
               <Switch 
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={"#f4f3f4"}
                  value={smoking}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSmoking}
               />
              </View>

              </View>

 


<View style={styles.formGroup}>

              

<View  style={styles.rowForm}>
    <View style={{...styles.colForm,flexDirection:'row',justifyContent:'center'}} >



    <DatePicker
        style={{width: 200}}
        date={date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2020-01-01"
        maxDate="2020-12-30"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => setDate(date)}
      />


    </View>
</View>
</View>


<View style={styles.formGroup}>

              

<View  style={styles.rowForm}>
    <View style={{...styles.colForm,flexDirection:'row',justifyContent:'center'}} >
        <Button title="Reverse" onPress={()=>handleSubmit()}/>
    </View>
</View>
</View>




           </View>
           
       </Animatable.View >
    )
}
export default Reverse

const styles=StyleSheet.create({

    formGroup:{
        margin:5,
       
    },
    rowForm:{
      
        flexDirection:'row'
    },
    colForm:{
        flex:1
    }
    ,modalContainer:{
        flex:1,
        justifyContent:'center',
       
    
    },
    modalCard:{
        backgroundColor:'white',
        height:200,
        
        
    },

modalTitleContainer:{
    height:30,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#3a5fcd'
},

    modalTitle:{
       
      color:'white',
        
        textTransform:'uppercase'
        
    },
    modalContent:{
        height:'60%',
        justifyContent:'center',
        alignItems:'center'
    }

    
})