const ADD_QUESTION = 'ADD_QUESTION'
const UPDATE_QUESTION_TITLE = 'UPDATE_QUESTION_TITLE'
const UPDATE_QUESTION_DESCRIPTION = 'UPDATE_QUESTION_DESCRIPTION'
const UPDATE_QUESTION_OPTION = 'UPDATE_QUESTION_OPTION'
const DRAG_HAPPEND = 'DRAG_HAPPEND'

const initialState = {
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
        {
            id: 3,
            questionTitle: '',
            questionDescription: '',
            questionOption: '',
        },
    ],
    survayId: 2,
    questionQuantity: 3,
    isNoValue: true,

}

const questionCardReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_QUESTION:
            return {
                ...state,
                questions: [
                    ...state.questions,
                    {
                        id: state.questionQuantity + 1,
                        questionTitle: '',
                        questionDescription: '',
                        questionOption: '',
                    },
                ],
                questionQuantity: state.questionQuantity + 1,
            }
        case UPDATE_QUESTION_TITLE:
            return {
                ...state,
                questions: state.questions.map(q => {
                    if (q.id === action.questionId)
                        return { ...q, questionTitle: action.questionTitle }
                    return q
                }),
            }
        case UPDATE_QUESTION_DESCRIPTION:
            return {
                ...state,
                questions: state.questions.map(q => {
                    if (q.id === action.questionId)
                        return { ...q, questionDescription: action.questionDescription }
                    return q
                }),
            }
        case UPDATE_QUESTION_OPTION:
            return {
                ...state,
                questions: state.questions.map(q => {
                    if (q.id === action.questionId)
                        return { ...q, questionOption: action.questionOption }
                    return q
                }),
            }
        case DRAG_HAPPEND:
            const newState = { ...state }
            if (action.droppableIdStart === action.droppableIdEnd) {
                const question = newState.questions.splice(action.droppableIndexStart, 1)
                newState.questions.splice(action.droppableIndexEnd, 0, ...question)
                return newState
            }
            return state
        default:
            return state
    }
}

export const addQuestion = () => ({ type: ADD_QUESTION })

export const updateQuestionTitle = (questionId, questionTitle) =>
({ type: UPDATE_QUESTION_TITLE, questionId, questionTitle })

export const updateQuestionDescription = (questionId, questionDescription) =>
({ type: UPDATE_QUESTION_DESCRIPTION, questionId, questionDescription })

export const updateQuestionOption = (questionId, questionOption) =>
({ type: UPDATE_QUESTION_OPTION, questionId, questionOption })

export const sortTitleCards = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId
) => (
        {
            type: DRAG_HAPPEND,
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
        }
    )

export default questionCardReducer