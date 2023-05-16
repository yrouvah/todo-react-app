import React, { Component } from 'react'
import Single from './Single';


class UserData extends  Component{
 

    render(){
        return(
            <React.Fragment>
                    <h1>Developpeur</h1>
                    <Single/>
            </React.Fragment>
        );
    }
}

export default UserData;