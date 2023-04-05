import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar';
import GetData from './components/experience/experience';
import React from 'react';
function App() {
  GetData()
  return (
    <React.Fragment>
      <NavBar />
      
      <div className='mx-24'> 
        <GetData />
      </div>
    </React.Fragment>
  );
}

export default App;
