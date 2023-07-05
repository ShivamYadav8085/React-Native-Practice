const {ADD_TASK,REMOVE_TASK,COMPLETED_TASK} = require('./actionType')
let id =0;
module.exports=function reducer(state=[],action){
     switch(action.type){
        case ADD_TASK:
            return [...state,
                {
                    id:++id,
                    task:action.payload.task,
                    completed:false
                }]
        case REMOVE_TASK:{
            return state.filter(task=>task.id!==action.payload.id)
        }
        case COMPLETED_TASK:{
            return state.map(task=>{
                if(task.id===action.payload.id)
                task.completed=true
                return task
            })
        }
        default:  return state
     }
}