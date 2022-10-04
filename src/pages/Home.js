import React from 'react'
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookuseEffect from '../components/HookuseEffect'
const Home = () => {
  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookuseEffect />
    </div>
  )
}

export default Home