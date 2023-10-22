// react imports
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

// css import
import "./style/style.css"

// component import
import Navigation from './components/Navigation'

function App() {
  const [nickname, setNickname] = useState("Burger")

  console.log("app/nickname:", nickname )

  return (
    <div>
        <h1>{nickname}'s Website</h1>
        <Navigation />
        <Outlet context={{
          nicknameObj: [nickname, setNickname]
        }}  />
    </div>

  )
}

export default App