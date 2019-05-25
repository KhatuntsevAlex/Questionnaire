import React from 'react';
import './App.css';
import Survey from './components/Survey/Survey';
import QuestionCard from './components/Questionbar/QuestionCard';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import SurveyContainer from './components/Survey/SurveyContainer';
import QuestionCardContainer from './components/Questionbar/QuestionCardContainer';


function App() {
  return (
    <div className='app-wrapper'>
      <SidebarContainer />
      <SurveyContainer />
      <QuestionCardContainer />
    </div>
    
  );
}

export default App;
