import React from 'react'
import Apples from '../components/Apples'
import Basket from '../components/Basket'

function Index () {
  return (
    <div className='container'>
      <div className='tree-zone'>
        <Apples />
        <Basket />
      </div>
    </div>
  )
}
export default Index
