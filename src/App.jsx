import { useState } from 'react';

// components
import List from './components/List';

// data
import data from './data/db'
function App() {
  const [people, setPeople] = useState(data)
  const deletePeople = (id) => {
    console.log(id);
    const newPeople = people.filter((person) => {
      return person.id !== id
    })
    setPeople(newPeople)
  }
  return (
    <div className='container'>
      <h1>{people ? people.length : 0} birthdays today</h1>
      <List people={people} deletePeople={deletePeople}/>
      {people.length ? <button onClick={() => {setPeople([])}} className='clear-btn'>Clear All</button> : null}
      {!people.length && <button onClick={() => {setPeople(data)}} className='refresh-btn'>Refresh</button>}
    </div>
  )
}

export default App
