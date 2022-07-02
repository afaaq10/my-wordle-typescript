import React, { useState, useRef, useEffect } from 'react'
import "./App.css"

let globalIndex: number = 0;
const App = () => {
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  const [initialArray, setInitialArray] = useState<string[]>(new Array(5).fill(""));
  const [otpIndexFocus, setOtpIndexFocus] = useState<number>(0);


  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    const newArray: string[] = [...initialArray]
    newArray[globalIndex] = value.substring(value.length - 1);
    if (!value) setOtpIndexFocus(globalIndex - 1)
    else setOtpIndexFocus(globalIndex + 1)
    setInitialArray(newArray)


  }
  const handleKey = ({ key }: React.KeyboardEvent<HTMLInputElement>, i: number): void => {
    globalIndex = i
    if (key === "Backspace") {

      setOtpIndexFocus(globalIndex - 1)

    }


  }

  useEffect(() => {
    inputRef.current?.focus()


  }, [otpIndexFocus])



  var a = 123456789
  var v = a.toString().split("").reverse().join("");
  var b = new String(a).split("")
  if (b[0] == "-") {
    console.log(parseInt("-" + v))
  }




  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "150px 150px", }}>
      {
        initialArray.map((_, i) =>
          <div key={i}>
            <input ref={i === otpIndexFocus ? inputRef : null} type="text" style={{ width: "15px", margin: "8px", background: "pink" }}
              onChange={handleChange} onKeyDown={(e) => handleKey(e, i)}
              value={initialArray[i]}
            />


          </div>
        )
      }
    </div>
  )
}

export default App