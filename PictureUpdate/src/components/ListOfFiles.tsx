
import {List, LiElement} from "./styles/List.styled"
interface Props {

    setImageToDisplay:Function
    data: Array,
}


export const ListOfFiles=({setImageToDisplay, data}: Props,)=>{
   
  
    const clickHandler=(e: any)=>{
        setImageToDisplay(e.target.name)

    }
return (<>
<List>
<ul>
    <LiElement> 
        {data.map((element:Object, index: string)=><li key={index}><button name={index} onClick={clickHandler} >{element.name}</button></li>)}
    </LiElement>
</ul>
</List>
</>)
}