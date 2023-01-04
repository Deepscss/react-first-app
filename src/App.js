// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';

let name = "Deepak"; 

function App() {
  return (
    <>
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4> Hello { name }</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eius, tenetur voluptas doloremque, commodi ullam esse maxime nam rem quam quae quo nisi suscipit deserunt et ad dolorem aspernatur reprehenderit?
          <br /> Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Deepak
        </a>
        <div className="test">React Js first section</div> 
      </header>
      <h1>Hello World</h1>
    </div> */} 
   <Navbar title="My React App Testing" contactus ="Contact us react"/> 
    </>
  );
}

export default App;
 