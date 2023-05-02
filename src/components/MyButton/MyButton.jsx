import PropTypes from "prop-types"
export const MyButton = ({ count, onClick }) => {
  return (
    <button onClick={ onClick }>click { count } times </button>
  )
}

MyButton.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.func
}