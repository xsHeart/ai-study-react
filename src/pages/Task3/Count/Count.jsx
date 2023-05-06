import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../../store/actions/index';

export const Count = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)

  return <>
    <div>count</div>
    <div>{ count }</div>
    <button onClick={() => dispatch(increment(10))}>+</button>
    <button onClick={() => dispatch(decrement(10))}>-</button>
  </>
}