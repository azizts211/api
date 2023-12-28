const UserCard=({el})=>{
return(
    <div style={{margin:"20px",backgroundColor:"blue"}}>
<h1>{el.name}</h1>
<h2>{el.username}</h2>
    </div>
)
}
export default UserCard