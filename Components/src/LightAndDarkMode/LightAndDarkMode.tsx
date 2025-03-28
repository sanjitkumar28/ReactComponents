import useTheme from "../hooks/useTheme"

const LightAndDarkMode =()=>{
    const {changeTheme} = useTheme();
    return (
        <div style={{backgroundColor:`${localStorage.getItem("theme")}`, width:"100vw", height:"100vh"}}>
            Hello World !
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    )
}

export default LightAndDarkMode