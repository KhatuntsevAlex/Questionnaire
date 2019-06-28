import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import TitleCard from './TitleCard/TitleCard'
/* import HintCard from './HintCard/HintCard' */
import SortableTree from 'react-sortable-tree'
import 'react-sortable-tree/style.css'
import s from './Survey.module.css'


const Survey = ({ questions, updateQuestionTitle, survayId, addQuestion }) => {

  const titleCard = questions.map
    ((q, index) => (
      <TitleCard
        id={q.id}
        index={index}
        updateQuestionTitle={updateQuestionTitle}
        questionTitle={q.questionTitle}
      />
    ))
  return (
    <Droppable droppableId={String(survayId)}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={s.survey}
        >
          {/* <HintCard /> */}
          <div className={s.cards_wrapper}>
            <div className={s.header}>
              <button type="button" onClick={addQuestion}>Add question</button>
            </div>
            <div className={s.title_cards}>{titleCard}</div>
          </div>
          {/* provided.placeholder */}
        </div>
      )}

    </Droppable>
  )
}


export default Survey
