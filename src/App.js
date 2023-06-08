import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar';
import GetData from './components/experience/experience';
import Socials from './components/socials/socials';
import React from 'react';
function App() {
  GetData()
  return (
    <div className='App'>
      <React.Fragment>
          <NavBar />
          <div className = "content-container">
            <div className='socials'>
              <Socials />
            </div>
            <div className='content mx-24'>
              <div className='mx-24'> 
                <GetData />
              </div>
            </div>
            
          </div>
      </React.Fragment>
    </div>
  );
}

export default App;
