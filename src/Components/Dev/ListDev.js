import React, { useState } from 'react'
import uniqueId from 'uniqueid';
import AddDev from './AddDev';


const ListDev =()=>{
    const[userLists, setList]= useState([
       ListDev
    ]);

    const addNewlist= (newList)=>{
        setList([...userLists, {
            id:uniqueId(),
            userName: addNewlist
        }])
    }
 

    const myList = userLists.map(userName=>{
        return(
            <li className='list-group-item' key={userName.id}>{userName.userName}</li>
        )
    });

    return(
        <div>
        <AddDev addNewDatalist={addNewlist} />

         <ul className='list-group mt-4'>
              {myList}
         </ul>
        
        </div>

    )
}
export default ListDev;