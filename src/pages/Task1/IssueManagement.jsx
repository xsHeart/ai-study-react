import { useState } from "react"
import { TodoItem } from '../../components/TodoItem/TodoItem'

export const IssueManagement = () => {
  const [issueList, setIssueList] = useState([
    { id: 1, name: '待办事件1', state: true },
    { id: 2, name: '待办事件2', state: false }
  ])
  const onChange = (event, o) => {
    const newIssueList = issueList.map(item => {
      if (item.id === o.id) item.state = event.target.checked
      return item
    })
    setIssueList(newIssueList)
  }
  
  return (
    <div>
      {
        issueList.map(item => {
          return (
            <TodoItem key={ item.id } item={ item } onChange={ onChange } />
          )
        })
      }
    </div>
  )
}