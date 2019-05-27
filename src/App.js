import React from 'react';
import common_s from './App.module.css';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import SurveyContainer from './components/Survey/SurveyContainer';
import QuestionCardContainer from './components/Questionbar/QuestionCardContainer';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'


const App = () => {
  return (    
      <div className={common_s.app_wrapper}>
        <SidebarContainer />
        <SurveyContainer />
        <QuestionCardContainer />      
    </div>   
  );
}

export default App;
