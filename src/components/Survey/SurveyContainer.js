import { connect } from 'react-redux';
import { updateQuestionTitleAC } from '../../redux/reducers/questionCard-reduser';
import Survey from './Survey';

let mapStateToProps = (state) => {
    return {
        questions: state.survey.questions,
       
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateQuestionTitle: (questionId, questionTitle) => { 
            dispatch(updateQuestionTitleAC(questionId, questionTitle));
        }
    }
}

const SurveyContainer = connect(mapStateToProps, mapDispatchToProps)(Survey)

export default SurveyContainer