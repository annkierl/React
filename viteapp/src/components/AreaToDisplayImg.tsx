interface Props{
    imageToDisplay: Array,
}
export const AreaToDisplayImg = ({imageToDisplay}:Props)=>{

    return(<>
    <img src= {`${imageToDisplay[0]}`}></img>
    </>)
}