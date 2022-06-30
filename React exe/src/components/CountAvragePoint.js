//import players from "../players";
import players from '../players'

let CountAvragePoint = () => {
    let avragePoint
    let totalPoint = 0
    players.forEach((element) => {
        totalPoint = totalPoint + element.point
    })
    avragePoint = totalPoint / (players.length + 1)
    return <tr>
        <td>Avrage Point:</td> <td>{avragePoint}</td>
    </tr>
}

export default CountAvragePoint