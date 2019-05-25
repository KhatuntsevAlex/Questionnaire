import React from 'react';
import s from './Survey.module.css'

const Survey = (props) => {

    let questionTitleCard = props.questions.map(q =>
        <div className={s.cardHolder}>
            <div className={s.dots}>⋮⋮</div>
            <div className={s.check}><input type='checkbox'></input></div>
            <div className={s.text}>
                <label for='text'>{q.id}.</label>
                <input
                    id={q.id}
                    type='text'
                    className={s.optionHolder + ' ' + s.isNoValue}
                    placeholder='Enter option'
                    onChange={(e) => { props.updateQuestionTitle(q.id, e.target.value) }}
                    value={q.questionTitle}
                >
                </input>
            </div>
        </div>
    )

    return (
        <div className={s.survey}>
            <div className={s.hint}>
                <div className={s.hintText}>
                    jhfhdfkg;ldfg;lkdjfglkhjd'kfj
                </div>
                <div className={s.dragTargetArea}>
                    <div>+</div>
                </div>
            </div>
            <div className={s.cardWrapper}>
                <div className={s.cardOptions}>

                </div>
                
                    {questionTitleCard}
                

            </div>
        </div>
    )
}

export default Survey