import { useDispatch } from 'react-redux'
import { fetchTodos } from '../../redux/slice/todo'
import './Button.css'

function GenerateButton() {
  const dispatch = useDispatch()

  return (
    <div className="generate-button-container">
      <button className="generate-button" onClick={(e) => dispatch(fetchTodos())} >Generate</button>
    </div>
  )
}

export default GenerateButton