import { useState } from "react";

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