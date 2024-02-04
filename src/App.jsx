
import './App.css'
import Counter from './Counter'
import Users from './Users'

function App() {

  function handleClick() {
    alert('button clicked')
  }
  function handleClick2() {
    alert('clicked button two')
  }
  const addFive = (num) => {
    alert(num + 5)
  }
  return (
    <>
      <Users></Users>
      <Counter></Counter>
      <h1>React Core Concept-2</h1>
      {/* <button onclick='handleClick()'>click</button> // this type of html */}
      <button onClick={handleClick}>click</button>
      <button onClick={handleClick2}>click2</button>
      <button onClick={() => { alert('this is a click of third') }}>click3</button>
      <button onClick={() => addFive(3)}>click4</button>
      {/* /** jokon kono paramitter pathono hoy tkn click
       korar agei kaaj hoye jay aii jinistake thekanor jnnoi ai arrow function ta lekha hoy. */ }
    </>
  )
}

export default App
