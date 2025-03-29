import { useState } from "react"
import axios from "axios";
import UserInfo from "./UserInfo";

const GithubProfileFinder=()=>{
    const [userName,setUserName] = useState("");
    const [userInfo,setUserInfo] = useState();
    const handleSubmit=async()=>{
       const resposne = await axios.get(`https://api.github.com/users/${userName}`);
       console.log("response",resposne);
       setUserInfo(resposne.data);
    }
    return(
        <div>
            <input onChange={(e)=>setUserName(e.target.value)}></input>
            <button onClick={handleSubmit}>Submit</button>
            {
                userInfo && <UserInfo userInfo={userInfo}/>
            }
        </div>
    )
}

export default GithubProfileFinder