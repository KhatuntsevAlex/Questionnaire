import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Survey from './components/Survey/Survey';
import Questionbar from './components/Questionbar/Questionbar';
import SidebarContainer from './components/Sidebar/SidebarContainer';


function App() {
  return (
    <div className='app-wrapper'>
      <SidebarContainer />
      <Survey />
      <Questionbar />
    </div>
    
  );
}

export default App;
