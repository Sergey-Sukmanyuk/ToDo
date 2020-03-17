import React from 'react'

class TodoListTask extends React.Component {

    onIsDoneChanged = (event) => {

        let task = this.props.task
        let isDone = event.currentTarget.checked
        this.props.changeStatus(task, isDone)
    }
    render = () => {
        return (
            <div className="todoList-task">
                <input onChange = {this.onIsDoneChanged} type="checkbox" checked={this.props.task.isDone}/>
                <span>{`${this.props.task.title} Priority: ${this.props.task.priority}`}</span>
                
            </div>
        )
    }
}

export default TodoListTask;