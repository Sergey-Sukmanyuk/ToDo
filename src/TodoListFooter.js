import React from 'react'

class TodoListFooter extends React.Component {
    render = (props) => {
        let classForAll = this.props.filterValue === 'All' ? 'filter-active' : '';
        let classForACompleted = this.props.filterValue === 'Completed' ? 'filter-active' : '';
        let classForActive = this.props.filterValue === 'Active' ? 'filter-active' : '';


        return(
            <div className="todoList-footer">
                <button onClick = { () => {this.props.changeFilter("All")}} className={classForAll}>All</button>
                <button onClick = { () => {this.props.changeFilter("Completed")}} className={classForACompleted}>Completed</button>
                <button onClick = { () => {this.props.changeFilter("Active")}} className={classForActive}>Active</button>
            </div>
        )
    }
}

export default TodoListFooter;