import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import commonStyle from '../../../App.module.css'
import s from './TitleCard.module.css'

const TitleCard = ({ id, index, questionTitle, updateQuestionTitle }) => {

  const inputStyle = value =>
    !value
      ? `${commonStyle.common_inputs_style} ${commonStyle.empty_input}`
      : commonStyle.common_inputs_style

  const labelStyle = value =>
    !value
      ? `${s.cardNumber} ${commonStyle.empty_input_number}`
      : s.cardNumber

  return <>
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div    
        ref={provided.innerRef}  
        {...provided.draggableProps}    
        >
          <div className={s.cardHolder}>
            <div 
          
          {...provided.dragHandleProps} className={s.dots}>⋮⋮</div>
            <input type="checkbox" />
            <label htmlFor="text" className={labelStyle(questionTitle)}>{id}.</label>
            <input
              type="text"
              className={inputStyle(questionTitle)}
              placeholder="Enter title"
              onChange={(e) => { updateQuestionTitle(id, e.target.value) }}
              value={questionTitle}
            />
            <div className={s.mark}>question</div>
          </div >
        </div>
      )}
    </Draggable>
  </>

}

export default TitleCard