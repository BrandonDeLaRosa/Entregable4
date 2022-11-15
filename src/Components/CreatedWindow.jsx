import React from 'react';

const CreatedWindow = ({isCreated, setIsCreated}) => {
    return (
    <div className='background'>
        <div className='popUp'>
            <h2>User Created</h2>
            <h2>Successfully.</h2>
            <br />
            <i class="fa-solid fa-circle-check"></i> <br />
            <button onClick={() => setIsCreated(!isCreated)}><i class="fa-solid fa-circle-xmark"></i></button>
        </div>
    </div>
    );
};

export default CreatedWindow;
