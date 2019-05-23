let initialState = {
    questions: [],
    info: [
        { id: 1, name: 'Question'},
        { id: 2, name: 'Grid'},
        { id: 3, name: 'Group'},
        { id: 4, name: 'Info'},
        { id: 5, name: 'Ranking grid'},
        { id: 6, name: 'Free text question'},
        { id: 7, name: 'Free text grid'},
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;