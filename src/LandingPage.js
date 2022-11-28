import appstorebutton from './download-on-appstore.svg';
import './App.css';
// import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Earth" > 
          <div src={appstorebutton} className="App-logo" alt="logo">
            <h3>
              🥔
            </h3>
          </div>
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
        <a href="mailto:leaveylabs@gmail.com" target="_blank" rel="noopener noreferrer" > Email us </a>
        <Link  to={{pathname: '/terms'}}>Terms</Link>
        <Link  to={{pathname: '/privacy'}}>Privacy</Link>
      </header>
    </div>
  );
}

export default LandingPage;
