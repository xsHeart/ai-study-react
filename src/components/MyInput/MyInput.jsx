import PropTypes from 'prop-types'

export const MyInput = ({ className = [], value, onChange = () => {} }) => {
  return <>
    <input className={ className } type="text" value={value} onChange={ onChange } />
  </>
}

MyInput.propTypes = {
  className: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func
}