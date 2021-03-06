import React from 'react'
import { useSelector } from 'react-redux'

function Tree () {
  const shakeClass = useSelector(state => state.reducer.shakeClass)

  const treeClass = `tree ${shakeClass}`
  return (
    <div className='tree-zone'>
      <div className={treeClass}>
        <div className='head h1' />
        <div className='head h2' />
        <div className='head h3' />
        <div className='head h4' />
        <div className='head h5' />
        <div className='head h6' />
        <div className='trunk' />
      </div>
    </div>
  )
}
export default Tree
