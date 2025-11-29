import { useRef, useState } from "react";
import "./index.css"
const OTP = ({ noOfDigit }) => {
  const arr = new Array(noOfDigit).fill("");
  const inputRefs = useRef([]);
  const [input, setInput] = useState(new Array(noOfDigit).fill(""));

  const handleChange=(e,index:number)=>{
    if(!isNaN(e.target.value)){
        const arr=[...input];
        const value= e.target.value;
        arr[index]=value.slice(-1);
        setInput(arr);
       value && inputRefs?.current[index+1]?.focus();
    }
  }

  const handleKeyDown=(e,index)=>{
    if(e.key==="Backspace" && !e.target.value ){
      inputRefs?.current[index-1]?.focus();
    }
  }
  return (
    <div>
      {input.map((value, index) => {
        return (
          <>
            <input
              value={value}
              className="input-tag"
              key={index}
              type="text"
              onChange={(e)=>handleChange(e,index)}
              ref={(input)=>(inputRefs.current[index]=input)}    
              onKeyDown={(e)=>handleKeyDown(e,index)}          
            />
          </>
        );
      })}
    </div>
  );
};
export default OTP;
