const redux = require('redux')

const createStore = redux.createStore;
const combineReducers = redux.combineReducers
const actionTypes ={
    BUY_DISHWASHER:"BUY_DISHWASHER",
    BUY_TOOTHBRUSH:"BUY_TOOTHBRUSH"
}

const buyDishwasher = (quantity)=>{
    return {
        type:actionTypes.BUY_DISHWASHER,
        payload:{
            quantity
        }
    }
}

const buyToothBrush = (quantity)=>{
    return {
        type:actionTypes.BUY_TOOTHBRUSH,
        payload:{
            quantity
        }
    }
}

const initialState ={
    toothbrushStock : 10,
    dishWasherStock : 14,
}

const toothBrushReducer = (state=initialState.toothbrushStock, action)=>{
    switch(action.type){
        case actionTypes.BUY_TOOTHBRUSH:
            {
                // return {...state,toothbrushStock:state.toothbrushStock-action.payload.quantity}
                return state-action.payload.quantity
            }
        default:return state;
    }
}

const dishWasherReducer = (state=initialState.dishWasherStock, action)=>{
    switch(action.type){
        case actionTypes.BUY_DISHWASHER:
            {
                // return {...state,dishWasherStock:state.dishWasherStock-action.payload.quantity}
                return state - action.payload.quantity
            }
        default:return state;
    }
}

const rootReducer = combineReducers({toothBrushReducer,dishWasherReducer})

const store = createStore(rootReducer);

const unsubscribe = store.subscribe(()=>console.log(
store.getState()
))

// console.log(store.dispatch(buyToothBrush(4)));
store.dispatch(buyToothBrush(5));
store.dispatch(buyToothBrush(5));
store.dispatch(buyDishwasher(5));
store.dispatch(buyDishwasher(5));
unsubscribe()