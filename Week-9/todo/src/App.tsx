import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Todo from './components/to-do'
import { AddList } from './components/addList'

const App: React.FC = () => {

  return (
    <div className="App">
      <h1>helo</h1>
      {/* <Todo /> */}
      <AddList />
    </div>
  )
}

export default App
