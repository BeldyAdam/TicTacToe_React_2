import './App.css';
import React, { useState } from 'react';
import { Jatekter } from './Jatekter.js';

//const lista = ["X", "O", "O", "X", "O", "X", "O", "X", "X"];

function App() {
  const [lista, setLista]=useState(["", "", "", "", "", "", "", "", ""]);
  const [lepes,setlepes]=useState(0);
    function katt(adat){
      const slista = [...lista];
      if(lepes%2==0){
        slista[adat]="X";
      }else{
        slista[adat]="O";
      }
      setLista([...slista]);
      let sv=lepes;
      sv++;
      setlepes(sv);
    }

  return (
    <div className="App">
      <header className="App-header">
          TicTacToe - React
      </header>
      <article>
        <Jatekter sor={lista} katt={katt}/>
      </article>
    </div>
  );
}

export default App;
