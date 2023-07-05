const store = require("./store")
const {addTask, removeTask,completedTask} = require('./action')

const unsubscribe = store.subscribe(()=>console.log("Updated todo"))
store.dispatch(addTask("task 1"))
store.dispatch(addTask("task 2"))
// store.dispatch(removeTask(2))
store.dispatch(completedTask(2))
unsubscribe()

store.dispatch(addTask("task 3"))

store.dispatch(removeTask(1))
console.log(store.getState())