let initialState = {
    navItems: [
        { id: 1, name: 'Return', linkTo: '', imgSrc: 'https://image.flaticon.com/icons/png/512/106/106734.png' },
        { id: 2, name: 'Add', linkTo: '/add', imgSrc: 'https://svgsilh.com/svg_v2/1270001.svg' },
        { id: 3, name: 'View', linkTo: '/view', imgSrc: 'https://image.flaticon.com/icons/png/512/22/22172.png' },
        { id: 4, name: 'Settings', linkTo: '/settings', imgSrc: 'https://www.iconsearch.ru/uploads/icons/humano2/128x128/cog-icon-2-48x48.png' },
        
    ],
    todoItems: [
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