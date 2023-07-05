import { useEffect, useState } from "react"
import store from "./store/store"
import { addUserSuccess, fetchUser } from "./store/action"
import { connect } from "react-redux"

const UserList = (props)=>{
    useEffect(()=>{
        props.UserList()
    },[])
    const [user,setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:""
    })

    const users = [
        {
        id:1,
        name:"Raghav",
        username:"ds",
        email:"dsjmd@j.cv",
        phone:"5678902322"
    },
        {
        id:2,
        name:"shivam",
        username:"dhhs",
        email:"asjmd@j.cv",
        phone:"9078902322"
    },
]
    return <>
    <input value={user.name} placeholder={"name"}onChange={(e)=>setUser(prev=>({...prev,name:e.target.value}))}/>
    <input value={user.username} placeholder={"username"}onChange={(e)=>setUser(prev=>({...prev,username:e.target.value}))}/>
    <input value={user.email} placeholder={"email"}onChange={(e)=>setUser(prev=>({...prev,email:e.target.value}))}/>
    <input value={user.phone} placeholder={"phone"}onChange={(e)=>setUser(prev=>({...prev,phone:e.target.value}))}/>
    <button onClick={()=>{
        props.AddUser(user)
    }}>AddUser</button>
    <button onClick={()=>{
        setUser(prev=>({...prev,name:"",username:"",email:"",phone:""}))
    }}>reset</button>
    <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>UserName</td>
                <td>Email</td>
                <td>Phone</td>
            </tr>
        </thead>

        <tbody>
            {props.userData.map(user=>{
                return(
                
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                </tr>
            )})}
        </tbody>
    </table>

    
    </>
}
//for accessing data
const mapStateToProp = (state)=>{
    return {
        userData:state.userData,
        loading:state.loading
    }
}
//for dispatching data
const mapDispatchToProps = dispatch=>{
    return {
        UserList:()=>dispatch(fetchUser(false)),
        AddUser:(user)=>dispatch(addUserSuccess(user))
    }
}

export default connect(mapStateToProp,mapDispatchToProps)(UserList)