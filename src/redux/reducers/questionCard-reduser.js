const SET_QUESTIONS = 'SET_QUESTIONS';
const UPDATE_QUESTION_TITLE = 'UPDATE_QUESTION_TITLE'
const UPDATE_QUESTION_DESCRIPTION = 'UPDATE_QUESTION_DESCRIPTION'
const UPDATE_QUESTION_OPTION = 'UPDATE_QUESTION_OPTION'

let initialState = {
    questions: [
        {
            id: 1,
            questionTitle: '',
            questionDescription: '',
            questionOption: '',
        },

        {
            id: 2,
            questionTitle: '',
            questionDescription: '',
            questionOption: '',
        },
    ],

    isQuestionHere: false,
};

const questionCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTIONS:
            return {
                ...state,
                questions: action.questions,                
                isQuestionHere: true,
            }
        case UPDATE_QUESTION_TITLE:
            return {
                ...state,
                questions: state.questions.map(q => {
                    if (q.id === action.questionId)
                        return { ...q, questionTitle: action.questionTitle }
                    return q;
                }),
            }
        case UPDATE_QUESTION_DESCRIPTION:
            return {
                ...state,
                questions: state.questions.map(q => {
                    if (q.id === action.questionId)
                        return { ...q, questionDescription: action.questionDescription }
                    return q;
                }),
            }
        case UPDATE_QUESTION_OPTION:
            return {
                ...state,
                questions: state.questions.map(q => {
                    if (q.id === action.questionId)
                        return { ...q, questionOption: action.questionOption }
                    return q;
                }),
            }
        default:
            return state;
    }
};

export const setQuestionsAC =
    (questions) => ({ type: SET_QUESTIONS, questions })

export const updateQuestionTitleAC =
    (questionId, questionTitle) => ({ type: UPDATE_QUESTION_TITLE, questionId, questionTitle })

export const updateQuestionDescriptionAC =
    (questionId, questionDescription) => ({ type: UPDATE_QUESTION_DESCRIPTION, questionId, questionDescription })

export const updateQuestionOptionAC =
    (questionId, questionOption) => ({ type: UPDATE_QUESTION_OPTION, questionId, questionOption })

export default questionCardReducer;