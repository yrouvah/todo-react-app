import React, {useState} from 'react'


const AddUser =()=>{

    const[userName, setUser]= useState('RADIMIARISOA');

    const addUser =()=>{
        setUser(userName);
    }


        return(
            <React.Fragment>
                <ul>
                    <li>Username: {this.setState.userName}</li>
                    <li>Mail: </li>
                </ul>
        
            </React.Fragment>
        );
    }


export default AddUser;