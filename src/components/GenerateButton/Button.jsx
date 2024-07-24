import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTodos } from '../../redux/slice/todo'
import './Button.css'

function GenerateButton() {

  const dispatch = useDispatch()
  let initialCount = 0
  const [count, setCount] = useState(initialCount)

  const onCLick = () => {
    dispatch(fetchTodos())
    setCount(count + 1)
  }

  return (
    <div className="generate-button-container">
      <div>
        <p>Request count: {count}</p>
      </div>
      <div>
        <button className="generate-button" onClick={() => onCLick()} >Generate</button>
      </div>
    </div>
  )
}

export default GenerateButton