//import players from '../players'
import players from '../players'

let CountTotalPoints = () => {
    let totalPoint = 0
    players.forEach((element) => {
        totalPoint = totalPoint + element.point
    })
    return <tr><td>Total Point:</td> <td>{totalPoint}</td></tr>
}

export default CountTotalPoints