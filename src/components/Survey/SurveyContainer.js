import { connect } from 'react-redux'
import { updateQuestionTitle, addQuestion } from '../../redux/reducers/questionCard-reduser'
import Survey from './Survey'

const mapStateToProps = (state) => {
    return {
        questions: state.survey.questions,
        survayId: state.survey.survayId,
    }
}

const mapDispatchToProps = {updateQuestionTitle,addQuestion}

const SurveyContainer = connect(mapStateToProps, mapDispatchToProps)(Survey)

export default SurveyContainer