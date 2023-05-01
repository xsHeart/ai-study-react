import { useState } from 'react'
import { MyButton } from '../../components/MyButton'

export const HelloWorld = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    return setCount(count + 1)
  }

  return (
    <div>
      <h3>HelloWorld</h3>
      <div>{ count }</div>
      <MyButton count={count} onClick={handleClick}></MyButton>
    </div>
  )
}