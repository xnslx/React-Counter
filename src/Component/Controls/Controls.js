import React from 'react'

const Controls = (props) => {
    return (
        <div style={{marginTop: '20px'}}>
            <button onClick={props.incHandler}>Increment</button>
            <button onClick={props.decHandler}>Decrement</button>
            <button onClick={props.addHandler}>Add 10</button>
            <button onClick={props.subHandler}>Substract 15</button>
        </div>
    )
};

export default Controls;
