import { connect } from 'react-redux';
import { updateQuestionTitleAC, updateQuestionDescriptionAC, updateQuestionOptionAC } from '../../redux/reducers/questionCard-reduser';
import QuestionCard from './QuestionCard';

let mapStateToProps = (state) => {
    return {
        questions: state.survey.questions,        
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateQuestionTitle: (questionId, questionTitle) => { 
            dispatch(updateQuestionTitleAC(questionId, questionTitle));
        },
        updateQuestionDescription: (questionId, questionDescription) => { 
            dispatch(updateQuestionDescriptionAC(questionId, questionDescription));
        },
        updateQuestionOption: (questionId, questionOption) => { 
            dispatch(updateQuestionOptionAC(questionId, questionOption));
        },
    }
}

const QuestionCardContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionCard)

export default QuestionCardContainer