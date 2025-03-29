const UserInfo =({userInfo}:{userInfo:any})=>{
    console.log("userInfo",userInfo)
    return (
        <div>
             <img src={`${userInfo.avatar_url}`} width={"30px"}/>
             <h3>{userInfo.name}</h3>

        </div>
    )
}

export default UserInfo;