import React from 'react'
import Apples from '../components/Apples'
import Basket from '../components/Basket'
import Tree from '../components/Tree'
function Index () {
  return (
    <div className='container'>
      <div className='tree-zone'>
        <Apples />
        <Tree />
        <Basket />
      </div>
    </div>
  )
}
export default Index
