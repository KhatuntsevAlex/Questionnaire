import React from 'react';
import common_s from '../../../App.module.css'
import s from './TitleCard.module.css'
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';


const TitleCard = (props) => {

    let inputStyle = value => !value ? common_s.common_inputs_style + ' ' + common_s.empty_input :
                                       common_s.common_inputs_style
    

    let lableStyle = value => !value ? s.cardNumber + ' ' + common_s.empty_input_number : s.cardNumber
                
    return (
        <div className={s.cardHolder}>
            <div className={s.dots}>⋮⋮</div>
            <input type='checkbox'></input>            
            <label for='text' className={lableStyle(props.questionTitle)}>{props.id}.</label>
            <input
                type='text'
                className={inputStyle(props.questionTitle)}
                placeholder='Enter title'
                onChange={(e) => { props.updateQuestionTitle(props.id, e.target.value) }}
                value={props.questionTitle}>
            </input>
            <div className={s.mark}>question</div>
        </div >
    )
}

export default TitleCard