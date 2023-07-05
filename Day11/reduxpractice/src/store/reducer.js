import {FETCH_USER_FAILURE,FETCH_USER_REQUEST,FETCH_USER_SUCCESS,ADD_USER_SUCCESS} from './actionTypes'

const initialState = {
    userData:[],
    error:'',
    loading:false
}

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                userData:action.payload,
                error:'',
                loading:false
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                userData:[],
                error:action.payload,
                loading:false
            }
        case ADD_USER_SUCCESS:
            return {
                ...state,
                userData:[...state.userData,{...action.payload,id:state.userData[state.userData.length-1].id+1}]
            }
        default:
            return state
    }
}

export default reducer
