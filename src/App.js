import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
function App() {
  const name = "lap trinh web";
  const test ={name : 'minh',ho : 'thai'}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <MyComponent/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create To Do List
        </a>
      </header>
    </div>
  );
}

export default App;
