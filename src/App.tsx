import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {State} from './state/activityReducer'

function App() {
  const [activity, setActivity]= useState('');
  const activities = useSelector((state: State)=> state.actionsList)
  const dispatch = useDispatch();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
   
    setActivity(e.target.value)
  }

  const onClickHandler = () => {
    dispatch({type:"ADD", payload: activity})
  }

 const deleteHandler = (item: string) =>{
   dispatch({type:"REMOVE", payload: item })
 }
 let displayList= activities? activities.map((el)=> <p key={Math.random()} onClick={() => deleteHandler(el)}>{el}</p>) : "";

  return (
    <div className="App">
      <h1>Please enter activity to list</h1>
      <input value={activity} onChange={inputHandler} type="text" placeholder="enter your activity "/ >
      <button onClick={onClickHandler}>Add</button>
      {displayList}
    </div>
  );
}

export default App;
