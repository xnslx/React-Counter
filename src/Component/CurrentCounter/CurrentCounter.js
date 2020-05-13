import React from 'react'

const CurrentCounter = (props) => {
    return (
        <div style={{marginTop:'20px'}}>
            Current Counter:{props.value}
        </div>
    )
};

export default CurrentCounter;
