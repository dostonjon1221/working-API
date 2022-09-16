import React from "react";
 function Paging({currantPage,totalPage,setCurrantPage}){
    let label = currantPage == totalPage ? "Previous" :"Next"
    const onClickHandling=()=>{
        let newPage;
        if(currantPage ===totalPage){
            newPage =currantPage -1;
        }else{
            newPage = currantPage +1;
        }
      setCurrantPage(newPage)
    } 
return (
    <>
    <button onClick={onClickHandling}>{label} </button>
    </>
) 
}
export default Paging