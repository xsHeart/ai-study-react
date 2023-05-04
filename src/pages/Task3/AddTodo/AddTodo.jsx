import { connect } from 'react-redux'
import { addTodo } from '../../../store/actions'

// eslint-disable-next-line react/prop-types
export let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
       onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) return
        dispatch(addTodo(input.value))
        input.value = ''
       }}>
        <input ref={node => input = node} />
        <button type="submit">AddTodo</button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)