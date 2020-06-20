import React,{useEffect,useState} from 'react'
import {View,Text,FlatList} from 'react-native'
import {Card, Icon} from 'react-native-elements'

import {useSelector} from 'react-redux'
import Loading from './Loading'
import { baseUrl } from '../json-server/baseUrl'
import {useDispatch} from 'react-redux'
import {postFavDish} from '../Redux/Actions/dishActions'





function RenderComments(props) {


    const comments = props.comments;
            
    const renderCommentItem = ({item, index}) => {
        
        return (
            <View key={index} style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.comment}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{'-- ' + item.author + ', ' + item.date} </Text>
            </View>
        );
    };
    
    return (
        <Card title='Comments' >
        <FlatList 
            data={comments}
            renderItem={renderCommentItem}
            keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}



const DishDetailsComponent=(props)=>{


    const dishData=useSelector(state=>state.dishReducer)
    const commentData=useSelector(state=>state.commentReducer)
    const favArr=useSelector(state=>state.addFavReducer.favIDs)

    const [isLiked,setIsLiked]=useState(false)
    const dispatch=useDispatch()
   
    const [dish,setDish]=useState({})
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


    const handleFav=(id)=>{
        
        if(isLiked===false)  dispatch(postFavDish(id))
    }
    return (
       <View>


              {



                  (dish!=null)&&
                  (
                  <Card featuredTitle={dish.name} image={{uri:baseUrl+dish.image}}>
                  <Text>{dish.description}</Text>

                  <Icon
                  raised                          
                  name='heart'
                  type='font-awesome'
                  color={isLiked?'red':'orange'}
                  onPress={()=>handleFav(dish.id)}
                  
                  />
   
              </Card>
                  )
        } 
                   
                <RenderComments comments={commentData.COMMENTS.filter((comment) => comment.dishId === props.navigation.getParam('dishID'))} />
              
              
              
          

       </View>
    )
}

export default DishDetailsComponent