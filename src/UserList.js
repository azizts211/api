import { useEffect ,useState} from "react";
import axios from "axios"
import UserCard from "./UserCard";
const UserList=()=>{
let[users,setUsers]=useState("")
console.log(users,"aziz")
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>setUsers(res.data))
    .catch((err)=>console.log(err))
},[])
return(
    <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
{users && users.map((el)=>(
    <UserCard el={el}/>
))}
    </div>
)
}
export default UserList