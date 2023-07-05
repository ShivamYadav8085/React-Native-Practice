import {FETCH_USER_FAILURE,FETCH_USER_REQUEST,FETCH_USER_SUCCESS,ADD_USER_SUCCESS} from './actionTypes'
import axios from 'axios'


 const fetchUserRequest = ()=>{
    return {
        type:FETCH_USER_REQUEST,
        payload:''
    }
}

 const fetchUserSuccess = (user)=>{
    return {
        type:FETCH_USER_SUCCESS,
        payload:user
    }
}

 const fetchUserFailure = (error)=>{
    return {
        type:FETCH_USER_FAILURE,
        payload:error
    }
}

export const addUserSuccess = (user)=>{
    return {
        type:ADD_USER_SUCCESS,
        payload:user
    }
}

export const fetchUser = (isError)=>{

    const url = isError?`https://jsonplaceholder.typicode.com/users1`:`https://jsonplaceholder.typicode.com/users`
    return (dispatch)=>{
        dispatch(fetchUserRequest())
        axios.get(url).then(res=>{
            const users = res.data.map(user=>({id:user.id, name: user.name,username:user.username,phone:user.phone,email:user.email,}))

            dispatch(fetchUserSuccess(users))
        }).catch(err=>{
            dispatch(fetchUserFailure(err.message))
        })
    }

}