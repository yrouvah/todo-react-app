import React, { Component } from "react";
import NavBar from "./NavBar";
import ToDoList from "./ToDoList";
import AddTask from "./AddTask";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import initialData from "../Data/initialData";
import uniqueid from "uniqueid";
import Fetching from "./Fetching";
import Header from "./Header";
import Api from "./Api";
import Blog from "./Pages/Blog";


class App extends Component {
  state = {
    tasks: [],
    fetching: true,
  };

  componentDidMount = () => {
    let delay = Math.floor(Math.random() * 5000);

    setTimeout(() => {
      this.setState({
        fetching: false,
        tasks: initialData,
      });
    }, delay);
  };

  onToggleCompleted = (taskId) => {
    let taskToUpdate = this.state.tasks.find((task) => task.id === taskId);
    taskToUpdate.completed = !taskToUpdate.completed;

    this.setState((prevState) =>
      prevState.tasks.map((task) => {
        return task.id === taskId ? taskToUpdate : task;
      })
    );
  };

  onAddTask = (newTaskName) => {
    let newTask = {
      id: uniqueid(),
      name: newTaskName,
      completed: false,
    };

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }));
  };
  onDeleteCompleted = () => {
    this.setState((prevState) => {
      let newState = prevState.tasks.filter((task) => !task.completed);
      return {
        tasks: newState,
      };
    });
  };

  render() {
    return (
      <section id="todo">
        <Header /> {this.state.fetching ? <Fetching /> : null}{" "}
        <BrowserRouter>
          <Switch>
            <Route
              path="/add-task"
              render={(props) => (
                <AddTask {...props} onAddTask={this.onAddTask} />
              )}
            />
            <Route
              path="/:filter?"
              render={(props) => (
                <ToDoList
                  {...props}
                  tasks={this.state.tasks}
                  onToggleCompleted={this.onToggleCompleted}
                />
              )}
            />
            <Route path="/user" component={Api} />
            <Route path="/blog" component={Blog} />

          </Switch>{" "}
          <NavBar onDeleteCompleted={this.onDeleteCompleted} />
        </BrowserRouter>
       
      </section>
    );
  }
}

export default App;
