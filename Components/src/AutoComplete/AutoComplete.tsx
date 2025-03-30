import { useEffect, useState } from "react";
import axios from "axios"
import "./AutoComplete.styles.css"
const AutoComplete=()=>{
    const [input,setInput]=useState('');
    const [result,setResult]=useState([]);
    const fetchData=async ()=>{
    const response= await axios.get("https://dummyjson.com/recipes/search?q="+input);
    setResult(response.data.recipes as any);
    }
    
    useEffect(()=>{
    const timer =  setTimeout(fetchData,1000);

    return()=>{
        clearTimeout(timer);
    }

    },[input])
    return(
        <div className="container">
            <h1>AutoComplete</h1>
            <div>
            <input value={input} onChange={(e)=>setInput(e.target.value)} style={{width:"500px"}}></input>
            <div className="dropdown-container">
               {
                result && result.map((data:any)=>{
                    return(
                          <div key={data.id} className="dropdown-item" >
                              {data.name}
                          </div>
                    )
                })
               }
            </div>
            </div>
        </div>
    )
}
export default AutoComplete