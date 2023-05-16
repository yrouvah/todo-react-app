import React , {useState} from 'react'

const AddDev =({addNewDatalist})=>{

    const [addDevName, setAddDevName]=  useState('');
    const [addDevPost, setAddDevPost]=  useState('');

    const handlerToDev= ()=>{
        console.log('Ok');
    }
    // addNewDatalist
 
    return(
        <form className=' mt-2' onSubmit={handlerToDev}>
            <div className='card card-body'>
            <div className='form-group'>
                <div className='container-fluid'>
                    <div className='row'>
                    <caption className=''>Developpeur information</caption>
                        <div className='col-8'>
                             <input className='form-control' value={addDevName} 
                             type='text' onChange={(e)=> setAddDevName(e.target.value)} />
                        </div>
                        <div className='col-4'>
                            <input className='form-control' value={addDevPost}  
                            type='text'  onChange={(e)=> setAddDevPost(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <input className='btn btn-success mt-4' type='submit' value='Add'/>
            
            </div>
            </div>
        </form>

    )
}
export default AddDev;