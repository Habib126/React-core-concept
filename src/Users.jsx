import { useEffect, useState } from "react"
import { json } from "react-router-dom"

export default function Users() {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(result => setUser(result))
    }, [])
    // prothombar data load korte caile akta dependency dite hoy sieta amra 
    // akta empty array dilam
    return (
        <div>
            <h3>user:{user.length}</h3>
        </div>
    )
}