
import ColorForBestPlayer from "./ColorForTheBestPlayer"

let checkvalue = (point) => {
    if (point >= 100)
        return <td style={{ backgroundColor: ColorForBestPlayer() }} >{point}</td>

    else return <td>{point}</td>

}
export default checkvalue