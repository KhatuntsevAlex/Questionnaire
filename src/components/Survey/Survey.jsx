import React from 'react';
import s from './Survey.module.css'
import TitleCard from './TitleCard/TitleCard';
import HintCard from './HintCard/HintCard';
import { DropTarget } from 'react-dnd';


const Survey = (props) => {

    let titleCard = props.questions.map
        (q => <TitleCard id={q.id}
            updateQuestionTitle={props.updateQuestionTitle}
            questionTitle={q.questionTitle} />
        )

    return (
        <div className={s.survey}>
            {/*  <HintCard /> */}
            <div className={s.cards_wrapper}>
                <div className={s.header}>
                    <button onClick={props.addQuestion}>Add question</button>
                </div>
                <div className={s.title_cards}>{titleCard}</div>
            </div>
        </div>
    )
}

export default Survey
