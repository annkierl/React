
import './App.css';
import players from './players';
import { useState } from 'react'

// Zadanie 1
let PrintPlayers = () => {
  return (
    <>  <table>
      <tr>
        <td>name</td> <td>username</td>
      </tr>
      {players.map(user => (
        <>
          <tr key={user.id}>
            <td>{user.name} </td>
            <td>{checkvalue(user)}</td>
          </tr>
        </>))}

      <CountTotalPoints />
      <CountAvragePoint />

    </table>
    </>)
}


//Zadanie 2
let CountTotalPoints = () => {
  let totalPoint = 0
  players.forEach((element) => {
    totalPoint = totalPoint + element.point
  })
  return <tr><td>Total Point:</td> <td>{totalPoint}</td></tr>
}

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

//Zadanie 3
let checkvalue = (players) => {
  if (players.point >= 100) {
    return <td style={{ backgroundColor: ColorForBestPlayer() }} >{players.point}</td>
  }
  else {
    return <td>{players.point}</td>
  }
}

//Zadanie 4
let ColorForBestPlayer = () => {
  let [highlightingColor, setHighlightingColor] = useState('red')
  return highlightingColor
}


function App() {
  return (
    <>

      <PrintPlayers></PrintPlayers>

    </>
  );
}

export default App;

