import React from 'react'
import Apples from '../components/Apples'
import Basket from '../components/Basket'
import Tree from '../components/Tree'
import { useDispatch } from 'react-redux'
import { shakeAndDropApples } from '../redux/actions'
/* import { useSelector } from 'react-redux' */
function Index () {
  /*   const shakeClass = useSelector(state => state.reducer.shakeClass) */
  const dispatch = useDispatch()
  return (
    <div className='container'>
      <div className='tree-zone'>
        <Apples />
        <Tree />
        <Basket />
      </div>
      <div>
        <button onClick={() => dispatch(shakeAndDropApples())}>Shake!</button>
      </div>
    </div>
  )
}

export default Index
