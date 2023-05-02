/* eslint-disable react/prop-types */
export const MyButton = ({ count, onClick }) => {
  return (
    <button onClick={ onClick }>click { count } times </button>
  )
}