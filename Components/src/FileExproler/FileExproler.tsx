import { useState } from "react";
import menus from "./data"
import View from "./View";
// Todo 1. CSS 2. Add new folder 3. Delete Folder  4. Add proper types
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
