import React, {useReducer} from 'react';
import CurrentCounter from './Component/CurrentCounter/CurrentCounter';
import Controls from './Component/Controls/Controls';
import StoreCounter from './Component/StoreCounter/StoreCounter';
import './App.css';


const initialState = {
  counter: 0,
  dataList: []
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1};
    case "DECREMENT":
      return { ...state, counter: state.counter - 1};
    case "ADD":
      return { ...state, counter: state.counter + 10};
    case "SUB":
      return { ...state, counter: state.counter - 15};
    case "SHOW" :
      return [...state.dataList, state.dataList.push(state.counter)]
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  // console.log(state);

  return (
    <div className="App">
      <CurrentCounter value={state.counter} />
      <Controls 
        incHandler={() => dispatch({ type: "INCREMENT" })}
        decHandler={() => dispatch({ type: "DECREMENT" })}
        addHandler={() => dispatch({ type: "ADD" })}
        subHandler={() => dispatch({ type: "SUB" })}
      />
      <StoreCounter changed={() => dispatch({type: "SHOW"})} dataList={state.dataList}/>
    </div>
  );
}

export default App; 
