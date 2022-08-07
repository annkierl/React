
interface Props{
    imageToDisplay: Array,
}
export const AreaToDisplayImg = ({imageToDisplay}:Props)=>{

    return(<>
    <img src= {`${(imageToDisplay === undefined ? "Nophoto" : imageToDisplay[0])}`}></img>
    </>)
}