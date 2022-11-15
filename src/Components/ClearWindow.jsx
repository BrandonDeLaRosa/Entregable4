import React from 'react';

const ClearWindow = ({isClear, setIsClear}) => {
    return (
        <div className='background'>
        <div className='popUp'>
            <h2>Data erased</h2>
            <h2>Successfully.</h2>
            <br />
            <i class="fa-solid fa-circle-check"></i> <br />
            <button onClick={() => setIsClear(!isClear)}><i class="fa-solid fa-circle-xmark"></i></button>
        </div>
    </div>
    );
};

export default ClearWindow;