import { useState } from "react";
import { items } from "./constant";
import "./index.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleChange=(index:number)=>{
   setOpenIndex(openIndex===index?-1:index);
  }
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div className="container" key={index} onClick={()=>handleChange(index)}>
            <button className="header">
                <div>
                {item.title}
                </div>
                {
                    index === openIndex ? (
                        <FaAngleUp/>
                    ):(
                        <FaAngleDown/>
                    )
                }
                
                </button>
            {index === openIndex && <div className="content">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
