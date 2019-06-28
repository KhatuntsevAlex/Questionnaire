import { connect } from 'react-redux'
import Sidebar from './Sidebar'

const mapStateToProps = (state) => {
    return {
        navItems: state.sidebar.navItems,
        todoItems: state.sidebar.todoItems,
    }
}

const SidebarContainer = connect(mapStateToProps, {})(Sidebar)

export default SidebarContainer