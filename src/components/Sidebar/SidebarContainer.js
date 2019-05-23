import { connect } from 'react-redux';
import Sidebar from './Sidebar';

let mapStateToProps = (state) => {
    return {
        navItems: state.sidebar.navItems,
        todoItems: state.sidebar.todoItems,
    }
}

let mapDispatchToProps = (dispath) => {
    return null
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer