import React from 'react'

class TodoListFooter extends React.Component {
    render = () => {
        let classForAll = this.props.filterValue === 'All' ? 'filter-active' : '';
        let classForACompleted = this.props.filterValue === 'Completed' ? 'filter-active' : '';
        let classForActive = this.props.filterValue === 'Active' ? 'filter-active' : '';


        return(
            <div className="todoList-footer">
                <button className={classForAll}>All</button>
                <button className={classForACompleted}>Completed</button>
                <button className={classForActive}>Active</button>
            </div>
        )
    }
}

export default TodoListFooter;