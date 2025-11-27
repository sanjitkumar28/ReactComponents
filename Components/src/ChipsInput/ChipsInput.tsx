import { useState } from "react";

const ChipsInput=()=>{
const [input,setInput]=useState<string>("");
const [chips,setChips]= useState<string[]>([]);
const handleKeydown=(e)=>{
    console.log("onkeydown");
  if(e.key==="Enter"){
       setChips([...chips,e.target.value])
       setInput("");
  }
}

const handleChange=(e)=>{
    console.log("handlechange");
    setInput(e.target.value)
}
const handleDeleteChip=(index:number)=>{
 const cpyArray=[...chips];
 cpyArray.splice(index,1,);
 setChips(cpyArray);
} 
return(
    <div>
    <h1>Chips Input</h1>
    <input type="text" onKeyDown={(e)=>handleKeydown(e)} onChange={(e)=>handleChange(e)} value={input}/>
    <div>
        {
            chips.map((chip,index)=>{
                return(
                    <div>
                        <span>{chip}</span>
                        <button onClick={()=>handleDeleteChip(index)}>X</button>
                    </div>
                )
            })
        }
    </div>
    </div>
)
}

export default ChipsInput;