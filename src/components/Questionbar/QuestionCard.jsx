import React from 'react'
import commonStyle from '../../App.module.css'
import s from './QuestionCard.module.css'

const QuestionCard = ({
  questions, updateQuestionTitle,
  updateQuestionDescription, updateQuestionOption,
}) => {
  const inputStyle = value =>
    !value
      ? `${commonStyle.common_inputs_style} ${commonStyle.empty_input}`
      : commonStyle.common_inputs_style


  const lableStyle = value =>
    !value
      ? `${s.cardNumber} ${commonStyle.empty_input_number}`
      : s.cardNumber

  const questionCard = questions.map(q =>
    <div className={s.questionCard}>

      {/* ////////////HEADER///////////////////// */}
      <div className={s.header}>
        <div className={lableStyle(q.questionTitle)}>
          <span>{q.id}</span>
        </div>
        <input
          type="text"
          className={inputStyle(q.questionTitle)}
          placeholder="Set header text"
          onChange={(e) => { updateQuestionTitle(q.id, e.target.value) }}
          value={q.questionTitle}
        />
        <button type="button">Logic</button>
      </div>

      {/* ////////////QUESTION-TEXT///////////////////// */}
      <div className={s.questionText}>
        <input
          type="text"
          className={inputStyle(q.questionDescription)}
          placeholder="No question yet, click here to add"
          onChange={(e) => { updateQuestionDescription(q.id, e.target.value) }}
          value={q.questionDescription}
        />
      </div>

      {/* ////////////OPTION///////////////////// */}
      < div className={s.option} >
        <div className={s.dots}>⋮⋮</div>
        <input type="checkbox" />
        <label htmlFor="text">r1</label>
        <input
          type="text"
          className={inputStyle(q.questionOption)}
          placeholder="Enter option"
          onChange={(e) => { updateQuestionOption(q.id, e.target.value) }}
          value={q.questionOption}
        />
      </div >

      {/* ////////////ANSVER-CHOISE///////////////////// */}
      < div className={s.ansverChoice} >
        + Add an answer choice
      </div >
      <div className={s.footer}>
        <div />
        <div />
        <div />
      </div>
    </div >
  )
  return <div className={s.questionbar}>{questionCard}</div >
}

export default QuestionCard