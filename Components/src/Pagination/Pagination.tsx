import { useEffect, useState } from "react";
import "./index.css"
const Pagination=()=>{

   const [data,setData]= useState([]);
   const [currentPage,setCurrentPage]= useState(0);
   const fetchData=async ()=>{
       const res = await fetch('https://dummyjson.com/products?limit=100');
       const response = await res.json();
       console.log("response",response);
       setData(response.products)
   }
   useEffect(()=>{
      fetchData();
   },[])

   const  totalPages=data.length/10;
   const startIndex=currentPage*10;
   const endIndex=startIndex+10;

   const handleClick=(index)=>{
    setCurrentPage(index);
   }
   const handleNext=()=>{
    setCurrentPage((page)=>page+1)
   }

   const handlePrevious=()=>{
         setCurrentPage((page)=>page-1)
   }

   console.log("data",data);
  return(
    <>
    <div className="product-container">
       {
        data.slice(startIndex,endIndex).map((product,index)=>{
            return(
                <div className="product-card">
                    <img src={product.images}/>
                    <div>{product.title}</div>
                </div>
            )
        })
       }
    </div>
           <div>
             <button onClick={handlePrevious}> Prev </button>
           {
            new Array(totalPages).fill("").map((_,index)=>{
                return(
                    <>
                    <button onClick={()=>handleClick(index)}>
                        {index+1}
                    </button>
                    </>
                )
            })
           }
           <button onClick={handleNext}>Next</button>
       </div>
       </>
  )
}

export default Pagination;