import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { connect } from 'react-redux'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import SurveyContainer from './components/Survey/SurveyContainer'
import QuestionCardContainer from './components/Questionbar/QuestionCardContainer'
import { sortTitleCards } from './redux/reducers/questionCard-reduser'
import commonStyle from './App.module.css'

const App = (props) => {
    const onDragEnd = (result) => {
      const { destination, source, draggableId } = result
      if (!destination) {
        return        
      }
      props.sortTitleCards(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
      )
    }
    return (      
        <div className={commonStyle.app_wrapper}>
          <SidebarContainer />
          <DragDropContext onDragEnd={onDragEnd}>
          <SurveyContainer />
          </DragDropContext>
          <QuestionCardContainer />
        </div >      
    )
  }

  const mapStateToProps = state => state
  
  const mapDispatchToProps = dispatch => ({
      sortTitleCards: (
        sourceDroppableId,
        destinationDroppableId,
        sourceIndex,
        destinationIndex,
        draggableId,
      ) => {
        dispatch(
          sortTitleCards(
            sourceDroppableId,
            destinationDroppableId,
            sourceIndex,
            destinationIndex,
            draggableId,
          )
        )
      },
    })
  export default connect(mapStateToProps, mapDispatchToProps)(App)