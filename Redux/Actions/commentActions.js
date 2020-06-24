import * as actionTypes from '../ActionTypes/actionTypes'

import axios from 'axios'
import {baseUrl} from '../../json-server/baseUrl'
export const fetchComments=()=>dispatch=>{

    dispatch(commentsLoading())
    
    axios.get(baseUrl+'comments').
    then(res=>dispatch(addComments(res.data))).
    catch(err=>dispatch(commentError(err)))
     

}

export const postComment=(comment)=>dispatch=>{
    axios.post(baseUrl+'comments',comment).
    then(res=>dispatch(addComment(comment))).
    catch(err=>dispatch(commentError(err)))

}


export const addComments=(Comments)=>({
    type:actionTypes.ADD_COMMENTS,
    payload:Comments
})

export const commentsLoading=()=>({
    type:actionTypes.COMMENTS_LOADING
})

export const commentError=(err)=>({
    type:actionTypes.COMMENTS_ERROR,
    payload:err
})


export const addComment=(Comment)=>({
    type:actionTypes.ADD_COMMENT,
    payload:Comment
})