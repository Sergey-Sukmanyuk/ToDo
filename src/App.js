import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {


    render = () => {

        let state = {
            tasks: [
                {id: 1, title: "JS", isDone: true, priority: "medium"},
                {id: 2, title: "HTML", isDone: true, priority: "law"},
                {id: 3, title: "CSS", isDone: true, priority: "law"},
                {id: 4, title: "React", isDone: false, priority: "high"},

            ],
            filterValue: "Active"
        }

        return (
            <div className="App">
                <div className="todoList">
                   <TodoListHeader/>
                   <TodoListTasks tasks = {state.tasks} />
                   <TodoListFooter filterValue = {state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

