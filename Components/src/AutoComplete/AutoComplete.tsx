import { useEffect, useState } from "react";
import axios from "axios"
import "./AutoComplete.styles.css"
// Used Hashmap for caching or localStorage can be used
const AutoComplete=()=>{
    const [input,setInput]=useState('');
    const [result,setResult]=useState([]);
    const [showResults,setShowResults] = useState(false);
    const [cacheResult,setCacheResult]=useState({})
    console.log("cacheResult",cacheResult);

    const fetchData=async ()=>{
    console.log("cache[input",cacheResult[input])
    if(cacheResult[input]){
        console.log("cache");
        return cacheResult[input];
    }
    const response= await axios.get("https://dummyjson.com/recipes/search?q="+input);
    setResult(response.data.recipes as any);
    setCacheResult((prev)=>({...prev,[input]:response?.data?.recipes}))
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
            <input value={input} onChange={(e)=>setInput(e.target.value)} style={{width:"500px"}} onFocus={()=>setShowResults(true)} onBlur={()=>setShowResults(false)}></input>
            <div className="dropdown-container">
               {
                showResults && result && result.map((data:any)=>{
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