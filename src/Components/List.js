import React, {Component} from 'react';
import ToDo from './ToDo';

class List extends Component {
    

    render() { 
        return (
            
               <React.Fragment>
                <div className=''>
                    <h1 className="m-3 text-center">Voici la liste des enregistrements</h1>
                        <ul className="list-group m-3">
                           
                            
                        </ul>
                </div>
               </React.Fragment>
               
          );
    }
}
 
export default List;
