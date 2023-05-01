import { useState } from "react"

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
            <div key={ item.id }>
              <input type="checkbox" checked={ item.state || false } onChange={ event => onChange(event, item) } />{ item.name }
            </div>
          )
        })
      }
    </div>
  )
}