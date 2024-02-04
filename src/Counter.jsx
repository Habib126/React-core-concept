import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        const newCount = count + 1
        setCount(newCount)
    }
    const handleMinus = () => {
        const newMinus = count - 1
        setCount(newMinus)
    }
    return (
        <div>
            <h3>counter:{count}</h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleMinus}>minus</button>
        </div>
    )
}