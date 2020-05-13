import React from 'react'

const StoreCounter = (props) => {
    console.log(props)
    return (
        <>
        <button style={{marginTop:'40px'}} onClick={props.clicked}>Store results</button>
        <ul>
            {props.dataList.map(dl => (
                <li>{dl}</li>
            ))}
        </ul>
        </>
    )
};

export default StoreCounter;
