import React from 'react';

const Single = (props) => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-6'>
                    <img src='' alt={props.item.title} />
                </div>
                <div className='col-6'>
                <span className=''>Card title</span>
                <p>lorem ipsum dolar</p>
                
                </div>
            </div>
        
        </div>
    );
}
export default Single;