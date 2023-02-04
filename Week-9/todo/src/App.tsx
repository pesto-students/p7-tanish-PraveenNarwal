import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AddList } from './components/addList'

const App: React.FC = () => {

  return (
    <div className="App">
      <h1>helo</h1>
      <AddList />
    </div>
  )
}

export default App
