import { Footer } from "../Footer/Footer"
import { AddTodo } from '../AddTodo/AddTodo'
import VisibleTodoList from '../../../store/containers/VisibleTodoList'

export const App = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}
