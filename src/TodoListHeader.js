import React from 'react'

class TodoListHeader extends React.Component {
    constructor(props) {
        super(props);
        // this.newTaskTitleRef = React.createRef()
    }

    state = {
        error: false,
        title: ''
    }

    onAddTaskClick = () => {
        // let newText = this.newTaskTitleRef.current.value
        // this.newTaskTitleRef.current.value = ''
        let newText = this.state.title
        this.setState({
            title: ''
        })
        if (newText === '') {
            this.setState({
                error: true
            })
        } else {
            this.setState({
                error: false
            })
            this.props.addTask(newText)
        }
    }

    onEnterPress = (event) => {
        if (event.key === "Enter") {
          this.onAddTaskClick()
        }
    }

    onInputChange = (e) => {
        let newTitle = e.currentTarget.value
        this.setState({
            error: false,
            title:newTitle
        })

    }

    render = () => {
        let classForError = this.state.error ? 'error' : '';
        return(
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input onKeyPress={this.onEnterPress} onChange ={this.onInputChange} className= {classForError}
                           ref = {this.newTaskTitleRef}value={this.state.title} type="text" placeholder="New task name"/>
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        )
    }
}

export default TodoListHeader;