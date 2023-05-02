/* eslint-disable react/prop-types */
export const TodoItem = ({item, onChange}) => {
  return (
    <div>
      <input type="checkbox" checked={ item.state || false } onChange={ event => onChange(event, item) } />{ item.name }
    </div>
  )
}