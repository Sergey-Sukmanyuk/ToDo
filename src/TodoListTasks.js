import React from 'react'
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {
        let tasksElements = this.props.tasks.map(task => <TodoListTask key = {task.id} task = {task}
                                                                       changeStatus = {this.props.changeStatus}/>)

        return(
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        )
    }
}

export default TodoListTasks;