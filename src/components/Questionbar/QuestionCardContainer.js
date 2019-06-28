import { connect } from 'react-redux'
import { 
  updateQuestionTitle, 
  updateQuestionDescription, 
  updateQuestionOption 
} from '../../redux/reducers/questionCard-reduser'
import QuestionCard from './QuestionCard'

const mapStateToProps = (state) => {
    return {
        questions: state.survey.questions,        
    }
}

const mapDispatchToProps = {
    updateQuestionTitle,
        updateQuestionDescription,
        updateQuestionOption,
 
}

const QuestionCardContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionCard)

export default QuestionCardContainer