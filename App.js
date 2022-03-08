import React from 'react'

import { useSelector,useDispatch } from 'react-redux';
import {incNumber, decNumber} from "./actions/index";
import "./App.css"

const App = () => {
  const myState = useSelector((state)=> state.changeTheNumber);
  const dispatch =useDispatch();
  return (
    <>
    <div className="container">
      <h1>Increment/Decrement counter</h1>
      <h4>using react and redux</h4>
      <div className="quantity">
        <a className="quantity__minus" title="DECREMENT"
        onClick={()=>dispatch(decNumber())}> <span>-</span></a>
        <input name="quantity" type="text" class="quantity__input" value={myState} ></input>
        <a className="quantity__plus" title="Increment"
        onClick={()=>dispatch(incNumber())}> <span>+</span></a>
      </div>
    </div>
      <h1>welcome to redux</h1>
    </>
  )
}

export default App