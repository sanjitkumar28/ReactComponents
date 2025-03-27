import { useState } from "react";

export default function View({ data }: { data: any }) {
    const [expanded,setExpanded] = useState({
        
    } as any);
    console.log("Expanded",expanded);
  return (
    <div>
      {data.map((node: any, index: number) => {
        return (
          <div id="container" key={index}>
            {node.children && <span onClick={()=>setExpanded((prev: any)=>({...prev,[node.label]:true}))}>+</span>}
            <span>{node.label}</span>
            {
                node.children && expanded[node.label] && <View data={node.children}/>
            }
          </div>
        );
      })}
    </div>
  );
}
