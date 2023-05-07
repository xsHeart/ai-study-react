import { useState } from "react"
import { MyInput } from "../../../components/MyInput/MyInput"

const filterCalculationStr = (str) => {
  const regex = /[-+*/()\d\.]+/g
  const matches = str.match(regex)
  if (matches) return matches.join('')
  return ''
}

export const Calculator = () => {
  const [value, setValue] = useState("0")
  const [answer, setAnswer] = useState("0")
  const onChange = (e) => setValue(e.target.value)
  const onOperate = (e) => {
    if (e === 'clear' || value === "") {
      setValue("0")
      setAnswer("0")
    } else {
      try {
        const str = filterCalculationStr(value)
        const newAnswer = eval(str)
        setAnswer(newAnswer)
      } catch(err) {
        setValue("0")
        setAnswer("格式错误")
      }
    }
  }
  return <>
    <div bg-light w300px h220px p-20px overflow-auto>
      <MyInput className={ ["w-13em"] } value={ value } onChange={ onChange } />
      <div flex mt-4px>
        {/* <div ml-2px w42px bg-white b-1px b-solid b-dark b-rd lh-18px>{ answer }</div> */}
        <div pl-4px w8em bg-white w40px>{ answer }</div>
        <div ml-2px w22px b-rd text-center lh-18px bg-blue cursor-pointer c-white
         onClick={ () => onOperate() }>=</div>
        <div ml-2px w22px b-rd text-center lh-18px bg-blue cursor-pointer c-white
         onClick={ () => onOperate('clear') }>c</div>
      </div>
    </div>
  </> 
}