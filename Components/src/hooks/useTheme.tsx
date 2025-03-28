import { useState } from "react";

// change it to pass default Color 
// why we have not use JSON.stringfy or JSON.parse 

const useTheme = ()=>{
    const [theme,setTheme] = useState('white');
    localStorage.setItem("theme",theme);

    const changeTheme=()=>{
        setTheme((prev)=>{
            if(prev=='white'){
                return 'black';
            }
            else{
                return 'white';
            }
        });
    }
   return {
    changeTheme
   }
}

export default useTheme;