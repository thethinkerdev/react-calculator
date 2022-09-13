import { useState } from "react"

const App = () => {

  const [inputState, setInputState] = useState<string>("")
  const [result, setResult] = useState<string>("")

  const ops: string[] = ["+", '-', '*', '/', '%', '.', "(", ")"]

  const DeleteInput = () => {
    setInputState("")
    setResult("")
  }

  const AddValueToInput = (value: string): void => {
    if (!inputState && ops.includes(value)) return;
    setInputState(inputState + value)

    try {
      setResult(eval(inputState + value))
    } catch {
      setResult("...")
    }
  }

  const finishOperator = () => {
    if (!inputState) return;

    setInputState(eval(inputState))

  }
  return <>
    <div className="container">
      <p className="result" style={{ textAlign: "left" }}>
        <span style={{ fontSize: 14 + "px" }}>({result || "0"})</span> {inputState || "0"}

      </p>
      <div className="first-row">
        <input type="button" value="&radic;" className="global" />
        <input type="button" onClick={() => AddValueToInput('(')} value="(" className="global" />
        <input type="button" onClick={() => AddValueToInput(')')} value=")" className="global" />
        <input type="button" onClick={() => AddValueToInput('%')} value="%" className="global" />
      </div>
      <div className="second-row">
        <input type="button" onClick={() => AddValueToInput('7')} value="7" className="global" />
        <input type="button" onClick={() => AddValueToInput('8')} value="8" className="global" />
        <input type="button" onClick={() => AddValueToInput('9')} value="9" className="global" />
        <input type="button" onClick={() => AddValueToInput('/')} value="/" className="global" />
      </div>
      <div className="third-row">
        <input type="button" onClick={() => AddValueToInput('4')} value="4" className="global" />
        <input type="button" onClick={() => AddValueToInput('5')} value="5" className="global" />
        <input type="button" onClick={() => AddValueToInput('6')} value="6" className="global" />
        <input type="button" onClick={() => AddValueToInput('*')} value="*" className="global" />
      </div>
      <div className="fourth-row">
        <input type="button" onClick={() => AddValueToInput('1')} value="1" className="global" />
        <input type="button" onClick={() => AddValueToInput('2')} value="2" className="global" />
        <input type="button" onClick={() => AddValueToInput('3')} value="3" className="global" />
        <input type="button" onClick={() => AddValueToInput('-')} value="-" className="global" />
      </div>
      <div className="conflict">
        <div className="left">
          <input type="button" onClick={() => AddValueToInput('0')} value="0" className=" big" />
          <input type="button" onClick={() => AddValueToInput('.')} value="." className=" small" />
          <input type="button" onClick={DeleteInput} value="Del" className=" red small white-text top-margin" />
          <input type="button" onClick={finishOperator} value="=" className=" green white-text big top-margin" />
        </div>
        <div className="right">
          <input type="button" onClick={() => AddValueToInput('+')} value="+" className="global grey plus" />
        </div>
      </div>
    </div>
  </>
}

export default App