import React from 'react';

const UpdateWindow = ({isUpdated, setIsUpdated}) => {
    return (
        <div className='background'>
        <div className='popUp'>
            <h2>User Updated</h2>
            <h2>Successfully.</h2>
            <br />
            <i class="fa-solid fa-circle-check"></i> <br />
            <button onClick={() => setIsUpdated(!isUpdated)}><i class="fa-solid fa-circle-xmark"></i></button>
        </div>
    </div>
    );
};

export default UpdateWindow;