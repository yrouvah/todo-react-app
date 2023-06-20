import  React, {Component} from 'react';
// import { Link } from 'react-router-dom';

class Header extends Component {

    render() { 
        return ( 
            <React.Fragment>
                <div className='Header'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-10'>
                                <ul className='nav d-flex'>
                                    <li className='nav-items  align-content-center'><a href='#'>Acceuil</a></li>
                                    <li className='nav-items  align-content-center'><a href='#'>Blog</a></li>
                                    <li className='nav-items  align-content-center'><a href='#'>User</a></li>
                                    <li className='nav-items  align-content-center'><a href='#'>Contact</a></li>
                                </ul>
                                

                            </div>
                            <div className='col-2'>
                                <p class='text-primary '>Learn react js is good for development</p>

                            </div>

                        </div>

                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Header;