import React from 'react';
import logo from '../Image/logo.png';

function Welcome() {
  return (
    
      <div className="welcome-container">
        <img src={logo} alt="Logo" className='login-logo'/>
        <p>View and text directly to people present in the chat Rooms.</p>
      </div>
    
  )
}

export default Welcome
