
import './App.css';
//import players from './players';
import { useState } from 'react'
import CountTotalPoints from "./components/CountTotalPoints"
import CountAvragePoint from "./components/CountAvragePoint"
import checkvalue from './components/ChceckValue';
import players from './components/players.json';

import ColorForBestPlayer from './components/ColorForTheBestPlayer';

function App() {
  let [color, setTemp] = useState("white")

  let onClickHandler = (state) => {
    setTemp(state)
    return state
  }

  return (
    <>

      <div>
        <button onClick={() => onClickHandler('blue')}>Change Color to blue </button>
        <button onClick={() => onClickHandler('red')}>Change color to red</button>
      </div>
      <table>
        {players.map(player => (
          <tr key={player.id}>
            <td>{player.name} </td>
            <td style={{ backgroundColor: player.point > 100 ? color : 'white' }} >{player.point}</td>
            {       /* Zadanie 4 - Komponent ColorForTheBestPleyer przekazywany do checkvalue.
      <td>{checkvalue(player.point)} </td>
    */}
          </tr>
        ))}
        <CountTotalPoints></CountTotalPoints>
        <CountAvragePoint></CountAvragePoint>
      </table>



    </>
  );
}

export default App;

