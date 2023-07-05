const {ADD_TASK,REMOVE_TASK,COMPLETED_TASK} = require('./actionType')

const addTask = (task)=>({
    type:ADD_TASK,
    payload:{
        task
    }
})

const removeTask = (id)=>({
    type:REMOVE_TASK,
    payload:{
        id
    }
})

const completedTask = (id)=>({
    type:COMPLETED_TASK,
    payload:{
        id
    }
})

module.exports={addTask,removeTask,completedTask}