import React from 'react'
import Apples from '../components/Apples'
import Basket from '../components/Basket'
import Tree from '../components/Tree'
import { useDispatch } from 'react-redux'
import { shakeTree, dropApples } from '../redux/actions'

function Index () {
  const dispatchForTree = useDispatch()
  const dispatchForDrop = useDispatch()
  return (
    <div className='container'>
      <div className='tree-zone'>
        <Apples />
        <Tree />
        <Basket />
      </div>
      <div>
        <button
          onClick={() => {
            dispatchForTree(shakeTree())
            setTimeout(() => {
              dispatchForDrop(dropApples())
            }, 3500)
          }}
        >
          Shake!
        </button>
      </div>
    </div>
  )
}

export default Index
