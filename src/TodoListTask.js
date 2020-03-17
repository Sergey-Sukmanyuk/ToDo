import React from 'react'

class TodoListTask extends React.Component {

    onIsDoneChanged = (event) => {
        let task = this.props.task
        let isDone = event.currentTarget.checked
        this.props.changeStatus(task, isDone)
    }
    render = () => {
        let classForIsDone =  this.props.task.isDone ? 'todoList-task' + ' ' + 'done' : 'todoList-task'
        return (
            <div className= {classForIsDone}>
                <input onChange = {this.onIsDoneChanged} type="checkbox" checked={this.props.task.isDone}/>
                <span>{`${this.props.task.title} Priority: ${this.props.task.priority}`}</span>
                
            </div>
        )
    }
}

export default TodoListTask;