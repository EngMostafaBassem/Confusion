import React,{useEffect,useState} from 'react'
import {View,Text,FlatList,Modal,ScrollView} from 'react-native'
import {Card, Icon,Rating,Input,Button} from 'react-native-elements'

import {useSelector} from 'react-redux'
import Loading from './Loading'
import { baseUrl } from '../json-server/baseUrl'
import {useDispatch} from 'react-redux'
import {postFavDish} from '../Redux/Actions/dishActions'
import {postComment} from '../Redux/Actions/commentActions'
import Comments from './Comments'

const DishDetailsComponent=(props)=>{


    const dishData=useSelector(state=>state.dishReducer)
    const commentData=useSelector(state=>state.commentReducer)
    const favArr=useSelector(state=>state.addFavReducer.favIDs)
    const [isLiked,setIsLiked]=useState(false)
    const [visible,setVisible]=useState(false)
    const dispatch=useDispatch()
    const [dish,setDish]=useState({})
    const [author,setAuthor]=useState("")
    const [comment,setComment]=useState("")
    const [rating,setRating]=useState(null)


    useEffect(()=>{
  
        const filterdDishID=props.navigation.getParam('dishID')
        const filterdDish=dishData.DISHES.find(item=>item.id==filterdDishID)
        setDish(filterdDish)
       
          

    },[])

    useEffect(()=>{
       
       
        const filterdDishID=props.navigation.getParam('dishID')
       
        if(favArr.some(item=>item===filterdDishID)===true) 
        {
           
            setIsLiked(true)

        }
       
       
      
    },[favArr])


 
    useEffect(()=>{
       
       
       setAuthor("")
       setComment("")
       setRating(null)
       
      
    },[visible])




    const handleSubmit=()=>{
         setVisible(false)
         const dishId=props.navigation.getParam('dishID')
         dispatch(postComment({author,comment,rating,dishId}))
       
       
        

    }

    const handleFav=(id)=>{
        
        if(isLiked===false)  dispatch(postFavDish(id))
    }
    return (
       <ScrollView keyboardShouldPersistTaps>


              <Modal
                animationType="slide"
                transparent={false}
                visible={visible}
           
               >

                    <View style={{padding:5}}>

                    <Rating showRating fractions="{1}" startingValue="{3.3}" onFinishRating={(val)=>{setRating(val)}} />

                        <Input
                        placeholder="Author"
                        leftIcon={{type:'font-awesome',name:'user'}}
                        onChangeText={(val)=>setAuthor(val)}
                        
                        />


                        <Input
                        placeholder="Comment"
                        leftIcon={{type:'font-awesome',name:'comment'}}
                        onChangeText={(val)=>setComment(val)}
                        />

                       <View>
                           <Button title="Submit" color='#3a5fcd' onPress={()=>handleSubmit()}/>
                         </View>
                       
                         <View style={{marginTop:5}}>
                           <Button title="Cancel" color='gray' onPress={()=>setVisible(false)}/>
                         </View>
                    </View>

                   </Modal>




              {
                  (dish!=null)&&
                  (         
                  <Card featuredTitle={dish.name} image={{uri:baseUrl+dish.image}}>
                  <Text>{dish.description}</Text>
                  <View style={{flexDirection:'row'}}>
  
                  <Icon
                  raised                          
                  name='heart'
                  type='font-awesome'
                  color={isLiked?'red':'orange'}
                  onPress={()=>handleFav(dish.id)}
                  
                  />


                   <Icon
                   reverse
                  raised                          
                  name='edit'
                  type='font-awesome'
                  color='#3a5fcd'
                  onPress={()=>setVisible(true)}
                  
                  />
                   </View>
   
              </Card>
                  )
        } 
                  
                <Comments comments={commentData.COMMENTS.filter((comment) => comment.dishId === props.navigation.getParam('dishID'))} />
                </ScrollView>
              
              
          

    
    )
}

export default DishDetailsComponent