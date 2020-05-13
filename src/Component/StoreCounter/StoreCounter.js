import React from 'react'

const StoreCounter = (props) => {
    console.log(props)
    return (
        <>
        <button style={{marginTop:'40px'}} onClick={props.clicked}>Store results</button>
        <ul style={{listStyle: 'none'}}>
            {props.dataList.map((dl,index) => (
                <li key={index}>{dl}</li>
            ))}
        </ul>
        </>
    )
};

export default StoreCounter;
