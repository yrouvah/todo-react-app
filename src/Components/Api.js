import React, { Component } from 'react';

class Api extends Component {
    constructor (props){
        super (props);
        this.state = {
            items: [],
            isLoaded : false
        }

    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(json=>({
            isLoaded: true,
            items: json,
        })
        )

    }
    render(){
        var {isLoaded, items}= this.state;
        if(!isLoaded){
            // return <di>Loading...</di>;
            return(
                <div className='Api'> 
                <h1>Liste des utilisateurs</h1>
                <ul>
                {items.map(item=>(
                    <li key={item.id}>
                       Name: {item.name}| Email: {item.email};
    
                    </li>
    
                ) )};
    
                </ul>
                  
                </div>
            )
        }
        else{
            return(
                <div>
                    <p>Error, can't fetch data</p>
                </div>
            )
        }
        
    }
}
export default Api;