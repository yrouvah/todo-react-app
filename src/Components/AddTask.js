import React, { Component} from 'react';
import AddDev from './Dev/AddDev';
import ListDev from './Dev/ListDev';



class AddTask  extends Component {
   
   
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddTask(this.newTask.value)
        this.props.history.push('/')
    }

    render() {
        return (
            <React.Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-8'>
                    <h1 className='m-3'>Nouvelle tache</h1>
                        <div className='card mx-3'>
                            <form className='card-body' onSubmit={(e)=> this.handleSubmit(e)}>
                            <div className='form-group'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-10'>
                                            <label for='taskName'>Developpeur</label>
                                            <input type='text' className='form-control' name='devName'
                                            id='devName' required ref={input=> this.newTask = input} />
                                        </div>
                                        <div className='col-10'>
                                            <label for='taskName'>Nom de la tache</label>
                                            <input type='text' className='form-control' name='taskName'
                                            id='taskName' required ref={input=> this.newTask = input} />
                                        </div>
                                        <div className='col-2'>
                                            <label for='typeTask'>Type</label>
                                            <input type='text' className='form-control' name='typeTask'
                                            id='typeTask' required ref={input=> this.newTask = input} />
                                        </div>
                                        <div className='col-2'>
                                            <label for='dureeTask'>Durée</label>
                                            <input type='text' className='form-control' name='dureeTask'
                                            id='dureeTask' required ref={input=> this.newTask = input} />
                                        </div>
                                        <div className='col-10'>
                                            <label for='descriptionTask'>Description</label>
                                            <input type='text' className='form-control' name='descriptionTask'
                                            id='descriptionTask' required ref={input=> this.newTask = input} />
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <button type='submit' className='btn btn-primary'>Creer</button>
                        </form>
                        
                     </div>
                    
                    </div>

                    <div className='col-4'>

                        <ListDev/>
                    
                    </div>
                
                </div>
            
           
            </div>


     </React.Fragment>
           
         );
    }
}

export default  AddTask;
