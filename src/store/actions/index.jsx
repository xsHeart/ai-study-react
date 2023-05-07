import { INCREMENT, DECREMENT } from '../constants/constants'

export const increment = (amount) => ({
  type: INCREMENT,
  payload: amount
});

export const decrement = (amount) => ({
  type: DECREMENT,
  payload: amount
});