import React from 'react';
import common_s from '../../App.module.css'
import s from './QuestionCard.module.css'

const QuestionCard = (props) => {

    let inputStyle = value => !value ? common_s.common_inputs_style + ' ' + common_s.empty_input :
                                       common_s.common_inputs_style


    let lableStyle = value => !value ? s.cardNumber + ' ' + common_s.empty_input_number : s.cardNumber

    let questionCard = props.questions.map(q =>
            <div className={s.questionCard}>

                {/* ////////////HEADER///////////////////// */}
                <div className={s.header}>
                    <div className={lableStyle(q.questionTitle)}>
                        <span>{q.id}</span>
                    </div>
                    <input
                        type='text'
                        className={inputStyle(q.questionTitle)}
                        placeholder='Set header text'
                        onChange={(e) => { props.updateQuestionTitle(q.id, e.target.value) }}
                        value={q.questionTitle}>
                    </input>
                    <button>Logic</button>
                </div>

                {/* ////////////QUESTION-TEXT///////////////////// */}
                <div className={s.questionText}>
                    <input
                        type='text'
                        className={inputStyle(q.questionDescription)}
                        placeholder='No question yet, click here to add'
                        onChange={(e) => { props.updateQuestionDescription(q.id, e.target.value) }}
                        value={q.questionDescription}
                    >
                    </input>
                </div>

                {/* ////////////OPTION///////////////////// */}
                <div className={s.option}>
                    <div className={s.dots}>⋮⋮</div>
                    <input type='checkbox'></input>
                    <label for='text'>r1</label>
                    <input
                        type='text'
                        className={inputStyle(q.questionOption)}
                        placeholder='Enter option'
                        onChange={(e) => { props.updateQuestionOption(q.id, e.target.value) }}
                        value={q.questionOption}
                    >
                    </input>
                </div>

                {/* ////////////ANSVER-CHOISE///////////////////// */}
                <div className={s.ansverChoice}>
                    + Add an answer choice
                </div>

                <div className={s.footer}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>
        )

        return <div className={s.questionbar}>{questionCard}</div >
    }

    export default QuestionCard