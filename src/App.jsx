import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState()
  const inputContent = useRef()

  function searchCity(){
    console.log(inputContent.current.value)
  }

  return (
      <div>
        <h1>Previsão do tempo</h1>
        <input ref={inputContent} type='text' placeholder='Digite o nome da cidade'/>
        <button onClick={searchCity}>Consultar</button>
        <p />{inputContent.current.value}
      </div>
  )
}

export default App
