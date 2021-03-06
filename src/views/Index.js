import React from 'react'
import Apples from '../components/Apples'
import Basket from '../components/Basket'
import Tree from '../components/Tree'
import { connect } from 'react-redux'
import { shakeAndDropApples } from '../redux/actions'
function Index () {
  return (
    <div className='container'>
      <div className='tree-zone'>
        <Apples />
        <Tree />
        <Basket />
      </div>
      <div>
        <button onClick={shakeAndDropApples}>Shake!</button>
      </div>
    </div>
  )
}

export default connect(null)(Index)
