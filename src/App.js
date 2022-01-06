import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link "
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <h1 className="text-3xl font-bold rounded-lg bg-slate-500 px-3 py-3">
          HELLO TAILWINDCSS
        </h1>
      </header>
    </div>
  );
}

export default App;