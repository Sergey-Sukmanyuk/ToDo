import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {
    constructor(props) {
        super(props);

    }

    state = {
        tasks: [
            {id: 1, title: "JS", isDone: true, priority: "medium"},
            {id: 2, title: "HTML", isDone: true, priority: "law"},
            {id: 3, title: "CSS", isDone: true, priority: "law"},
            {id: 4, title: "React", isDone: false, priority: "high"},

        ],
        filterValue: "All"
    }

    addTask = (newText) => {
        let newTask = {
            id: 5,
            title: newText,
            isDone: false,
            priority: 'high'
        }
        let newTasks = [...this.state.tasks, newTask]
        this.setState({
            tasks: newTasks
        })
    }

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        })
    }

    changeStatus = (task, isDone) => {
        let newTasks = this.state.tasks.map(t => {
            if (t !=task) {
                return t
            } else {
                return {...t, isDone: isDone}
            }
        })
        this.setState({
            tasks: newTasks
        })
    }
    render = () => {



        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask = {this.addTask}/>
                    <TodoListTasks changeStatus = {this.changeStatus} tasks={this.state.tasks.filter(t =>{
                        switch (this.state.filterValue) {
                            case "All":
                                return true;
                                break;
                            case "Active":
                                return t.isDone === false;
                                break;
                            case "Completed":
                                return t.isDone === true;
                        }
                    })}/>
                    <TodoListFooter changeFilter = {this.changeFilter} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

