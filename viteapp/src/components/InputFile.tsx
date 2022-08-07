import { useEffect } from "react";

interface Props {
    setFile: Function,
    file: any,
    images: any,
    setImages: Function,
    setNameOfFiles:Function



}
export const InputFile =({setFile, file, setImages, images,setNameOfFiles}: Props)=>{
 useEffect(()=>{
    if(file.length>5){
        return  alert("You are only allowed to upload a maximum of 5 files");
    }
  
 }, [file])

  
    const inputFileHandler = (e: any)=>{
      
       
        file.unshift(...e.target.files)
        if(file.length>5){
            file.pop()
        }
        setFile(file)
        images.unshift((file.map(element=> URL.createObjectURL(element))))
        setImages(images)
     
        if(images.length>5){
            images.pop()
        }

        setNameOfFiles({
            file1:file[0]===undefined ? "file1" : file[0].name,
            file2:file[1]===undefined ? "file2" : file[1].name,
            file3:file[2]===undefined ? "file3" : file[2].name,
            file4:file[3]===undefined ? "file4" : file[3].name,
            file5:file[4]===undefined ? "file5" : file[4].name
        })
           
    }
return (<>
<input type="file" onChange={inputFileHandler} multiple accept="image/png, image/gif, image/jpeg" />

</>)
}