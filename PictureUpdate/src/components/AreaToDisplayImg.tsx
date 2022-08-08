
interface Props{
    imageToDisplay:string | undefined,
    data: Array
}
export const AreaToDisplayImg = ({imageToDisplay, data}:Props)=>{

    return(<>
    <img src= {`${(imageToDisplay === undefined ? "https://niezlasztuka.net/wp-content/uploads/2022/03/jan-matejko-stanczyk-detal2-mnw-550x689.jpg" : data[Number(imageToDisplay)].url) }`}></img>
    </>)
}