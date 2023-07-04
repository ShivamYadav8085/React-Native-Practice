const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers
const actionTypes = {
    BUY_PEN:"BUY_PEN",
    RETURN_PEN:"RETURN_PEN"
}

const buyPen= (noOfPen)=>{
    return {
        type:actionTypes.BUY_PEN,
        payload:{
            noOfPen:noOfPen
        }
    }
}
const returnPen = (noOfPen)=>{
    return {
        type:actionTypes.RETURN_PEN,
        payload:{
            noOfPen
        }
    }
}
const initialState = {
    numberOfPen:10
}

const reducerPen = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.BUY_PEN:
            {
                return {...state,numberOfPen:state.numberOfPen-action.payload.noOfPen}
            }
        case actionTypes.RETURN_PEN:{
            return {...state,numberOfPen:state.numberOfPen+action.payload.noOfPen}
        }
        default:
            return state;
    }
}

const store = createStore(reducerPen)

const unSubscribe = store.subscribe(()=>console.log(store.getState()))

console.log("Updated Pen",store.dispatch(buyPen(4)));
console.log("Updated Pen",store.dispatch(buyPen(2)));
console.log("Updated Pen",store.dispatch(buyPen(4)));
console.log("Updated Pen",store.dispatch(returnPen(4)));


unSubscribe()