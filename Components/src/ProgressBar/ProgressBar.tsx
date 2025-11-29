import "./ProgressBar.styles.css"
const ProgressBar = ({width})=>{
   return (
    <div className="progress-bar-outer-container">
       <div className="progress-bar-inner-container" style={{width:`${width}%`}}>

       </div>
    </div>
   )
}

export default ProgressBar