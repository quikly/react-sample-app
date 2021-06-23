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
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="instructions">
        <p>Lorem ipsum</p>
      </div>

      <div className="resources">
        <p>Feel free to use any of the following libraries, or others not listed here:</p>
        <ul>
          <li>UI Libraries / Style Management
            <ul>
              <li>Use <a href="https://tailwindcss.com/docs/guides/create-react-app">Tailwind</a> to manage your styles.</li>
            </ul>
          </li>
          <li>APIs
            <ul>
              <li>Yelp</li>
              <li>Github</li>
            </ul>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default App;
