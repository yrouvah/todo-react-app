import  React, {Component} from 'react';

class Header extends Component {

    render() { 
        return ( 
            <React.Fragment>
                <div className='Header'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-10'>
                                <ul className='nav d-flex'>
                                    <li className='nav-items  align-content-center'><a className='nav-link desactive' href='#'>Acceuil</a></li>
                                    <li className='nav-items  align-content-center'><a className='nav-link' href='#'>User</a></li>
                                    <li className='nav-items  align-content-center'><a className='nav-link' href='#'>Contact</a></li>
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