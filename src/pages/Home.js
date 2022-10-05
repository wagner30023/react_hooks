import React from 'react'
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookuseEffect from '../components/HookuseEffect'

// useContext
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'
import HookUseRef from '../components/HookUseRef'
import HookUseCallBack from '../components/HookUseCallBack'
import HookuseMemo from '../components/HookuseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookCustom from '../components/HookCustom'

const Home = () => {
  const {contextValue} = useContext(SomeContext)

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookuseEffect />
      <h2> useContext </h2>
      <p> Valor do contex: {contextValue}</p>
      <HookUseRef />
      <HookUseCallBack />
      <HookuseMemo />
      <HookUseLayoutEffect />
      <HookCustom />
    </div>
  )
}

export default Home