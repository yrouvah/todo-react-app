import React, {Component} from 'react';

class ToDo extends Component {

    state = {
        completed: this.props.task.completed
    }
    toggleCompleted = () => {
        this.setState(prevState  =>({
            completed : !prevState.completed

        }))

        this.props.onToggleCompleted(this.props.task.id)
    }
    
    render() { 
        return ( 
            <li className={"list-group-item d-flex align-items-center " + (this.state.completed? 'bg-warning' : null)}>
                {this.props.task.name} {this.props.task.duree} {this.props.task.type} {this.props.task.description}
                <button  id='btn-cheched-case' className= {"btn btn-sm ml-auto " + (this.state.completed? 'btn-succes' : 'btn-outline-success') } onClick={() =>this.toggleCompleted()}>&#x2713;</button>

            </li>

         );
    }
}
 
export default ToDo;