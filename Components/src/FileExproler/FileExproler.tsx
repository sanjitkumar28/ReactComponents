import { useState } from "react";
import menus from "./data"
import View from "./View";

const FileExproler=()=>{
   const [data,setData] = useState(menus);
    return(
        <div>
            File Explorer
            <View data={data}/>

        </div>
    )

}
export default FileExproler
