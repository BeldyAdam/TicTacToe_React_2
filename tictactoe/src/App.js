import logo from './logo.svg';
import './App.css';
import { Jatekter } from './Jatekter.js';

const lista = ["X", "O", "O", "X", "O", "X", "O", "X", "X"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
          TicTacToe - React
      </header>
      <article>
        <Jatekter sor={lista}/>
      </article>
    </div>
  );
}

export default App;
