import { useState, useEffect, useRef } from "react"
import './Navbar'

const button = () => {
  const [count, setCount] = useState(0);
  // const [first,setFirst] = useState("");
  // const [color, setcolor] = useState(0);
  const a = useRef(0)

  useEffect(() => {

    a.current = a.current + 1
    console.log(`Rerenderingg and the value of a is... ${a.current}`)
  });



  return (
    <div>
      <div className="count ">The count is {count}</div>
      <button onClick={() => {
        setCount(count + 1)
      }}>Increase </button>
      <button onClick={() => {
        setCount(count - 1)
      }}>Decrease </button>
    </div>
  )
}

export default button
