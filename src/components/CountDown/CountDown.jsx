import { useState } from "react"
import PropTypes from "prop-types"
export const CountDown = ({ t = 10 }) => {
  const [times] = useState(t)
  return (
    <div>{ times }</div>
  )
}

CountDown.propTypes = {
  t: PropTypes.number
}