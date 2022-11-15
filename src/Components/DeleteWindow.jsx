import React from 'react';

const DeleteWindow = ({isDeleted, setIsDeleted}) => {
    return (
        <div className='background'>
            <div className='popUp'>
                <h2>User Deleted</h2>
                <h2>Successfully.</h2>
                <br />
                <i class="fa-solid fa-circle-check"></i> <br />
                <button onClick={() => setIsDeleted(!isDeleted)}><i class="fa-solid fa-circle-xmark"></i></button>
            </div>
        </div>
    );
};

export default DeleteWindow;