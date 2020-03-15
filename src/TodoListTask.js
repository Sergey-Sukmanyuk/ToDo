import React from 'react'

class TodoListTask extends React.Component {
    onIsDoneChanged = (event) => {
        this.props.changeStatus(event.currentTarget.checked)
    }
    render = () => {
        return (
            <div className="todoList-task">
                <input onChange = {this.onIsDoneChanged} type="checkbox" checked={this.props.task.isDone}/>
                <span>{`${this.props.task.title} Priority: ${this.props.task.priority}`}</span>
                <span> </span>
            </div>
        )
    }
}

export default TodoListTask;