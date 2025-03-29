import "./CustomModal.styles.css"
const CustomModal =({modalTitle,modalContent,modalFooter}:{modalTitle:String,modalContent:String,modalFooter:String})=>{
    return(
        <div className="modal-container">
            {/* <h1>I am H1</h1>
            <h2>I am H2</h2>
            <div className="test-position">
                <div className="test-absoulte">
                                
                </div>
                <div className="test-fixed">

                </div>
            </div> */}
            <div style={{width:'100%',height:'100%'}}>
            <div className="modal-title">
                   {modalTitle}
            </div>
            <div className="modal-content">
                <p>
                    {modalContent}
                </p>
            </div>
            <div className="modal-footer">
                {modalFooter}
            </div>
            </div>
        </div>
    )

}

export default CustomModal