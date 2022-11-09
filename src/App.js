import logo from './logo.svg';
import appstorebutton from './download-on-appstore.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Earth" > 
          <h3 src={appstorebutton} className="App-logo" alt="logo">
            🥔
          </h3>
          <h1 >
            🌎
          </h1>
        </div>
        {/* <img src={appstorebutton} className="App-logo" alt="logo" /> */}
        <h2>
          Pass The Potato
        </h2>
        <a
          href="https://apple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={appstorebutton} alt="appstorebutton" className='App-store-button' />
        </a>
      </header>
      <header className="App-footer">
        <a href="mailto:leaveylabs@gmail.com" target="_blank" rel="noopener noreferrer" >
          Email us
        </a>
        <a href="/terms" target="_blank" rel="noopener noreferrer" >
          Terms
        </a>
        <a href="/privacy" target="_blank" rel="noopener noreferrer" >
          Privacy
        </a>
      </header>
    </div>
  );
}

export default App;
