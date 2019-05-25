import React from 'react';
import s from './QuestionCard.module.css'

const QuestionCard = (props) => {
    let isNoValue = true;
    let questionCard = props.questions.map(q =>
        <div className={s.questionCard}>
            <div className={s.header}>
                <div className={s.cardNumber}>
                    <span>{q.id}</span>
                </div>
                <input
                    type='text'
                    className={isNoValue ? s.text + ' ' + s.isNoValue : s.text}
                    placeholder='Set header text'
                    onChange={(e) => { props.updateQuestionTitle(q.id, e.target.value) }}
                    value={q.questionTitle}
                >
                </input>
                <button className={s.headerBtn}>Logic</button>
            </div>

            <div className={s.questionText}>
                <input
                    type='text'
                    className={s.text}
                    placeholder='No question yet, click here to add'
                    onChange={(e) => { props.updateQuestionDescription(q.id, e.target.value) }}
                    value={q.questionDescription}
                >                   
                </input>
            </div>

            <div className={s.option}>
                <div className={s.dots}>⋮⋮</div>
                <div className={s.check}><input type='checkbox'></input></div>
                <div className={s.text}>
                    <label for='text'>r1</label>
                    <input
                    type='text'
                    className={s.optionHolder + ' ' + s.isNoValue}
                    placeholder='Enter option'
                    onChange={(e) => { props.updateQuestionOption(q.id, e.target.value) }}
                    value={q.questionOption}
                    >                        
                    </input>
                </div>
            </div>

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
    return (
        <div className={s.questionbar}>
            {questionCard}
        </div >
    )
}

export default QuestionCard