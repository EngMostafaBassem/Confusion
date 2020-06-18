import React,{useEffect,useState} from 'react'
import {View,Text,FlatList} from 'react-native'
import {Card} from 'react-native-elements'
import {DISHES} from './Shared/dishes'
import { COMMENTS } from './Shared/comments';






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


    
   const [dish,setDish]=useState(null)
   const [comments,setComments]=useState([])
    useEffect(()=>{
  
        const filterdDishID=props.navigation.getParam('dishID')

        const filterdDish=DISHES.find(item=>item.id==filterdDishID)
        setDish(filterdDish)
        setComments(COMMENTS)
      
          

    },[])
    return (
       <View>


              {
                  (dish!=null)&&
                  (
                  <Card featuredTitle={dish.name} image={require('./Shared/images/uthappizza.png')}>
                  <Text>{dish.description}</Text>
   
              </Card>
                  )
        } 
                   
                <RenderComments comments={comments.filter((comment) => comment.dishId === props.navigation.getParam('dishID'))} />
              
              
              
          

       </View>
    )
}

export default DishDetailsComponent