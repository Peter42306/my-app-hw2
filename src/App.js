import logo from './logo.svg';
import './App.css';
import MyButton, { MyClassComponent } from './components/Task1';
import { MyClassComponent1 } from './components/Task2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hi!!!</p>
        <MyButton></MyButton>
        <MyClassComponent></MyClassComponent>
        <MyClassComponent1></MyClassComponent1>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Hello Vika !!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
