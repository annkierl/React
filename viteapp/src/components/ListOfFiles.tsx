import { useState, useEffect } from 'react'

interface Props {
    images: Array,
    setImageToDisplay:Function
    file:any,
    nameOfFiles:any,
    setNameOfFiles:Function
}


export const ListOfFiles=({images,setImageToDisplay, file, setNameOfFiles,nameOfFiles}: Props,)=>{
   
  
    const clickHandler=(e: any)=>{
     
      
        Number(e.target.name) 
setImageToDisplay(images[Number(e.target.name)])
    }
return (<>
<ol>
    <li> <button name="0" onClick={clickHandler}>{nameOfFiles.file1} </button></li>
    <li> <button name="1" onClick={clickHandler}> {nameOfFiles.file2}   </button></li>
    <li> <button name="1" onClick={clickHandler}> {nameOfFiles.file3}  </button></li>
    <li> <button name="2" onClick={clickHandler}> {nameOfFiles.file4}  </button></li>
    <li> <button name="4" onClick={clickHandler}> {nameOfFiles.file5}  </button></li>
</ol>
</>)
}