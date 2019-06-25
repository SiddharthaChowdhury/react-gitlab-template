import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <div className="topNav"></div>
      <div className="container">
        <div className="sideNav"></div>
        <div className="content"></div>
      </div>
      <div className="footer"></div>
    </React.Fragment>
  );
}

export default App;
