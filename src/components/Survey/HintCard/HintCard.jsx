import React from 'react';
import s from './HintCard.module.css'

const HintCard = () => {
    return (
        <div className={s.hintCard}>
            <div className={s.hintText}>
                abrakadara
            </div>
            <div className={s.dragTargetArea}>
                <div>+</div>
            </div>
        </div>
    )
}

export default HintCard
