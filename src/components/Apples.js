import React from 'react'
import { useSelector } from 'react-redux'

function Apples () {
  const shakeClass = useSelector(state => state.reducer.shakeClass)

  const dropedClass = useSelector(state => state.reducer.dropedClass)

  return (
    <div className='apples'>
      <div className={`apple p1${dropedClass} ${shakeClass}-apple`}></div>
      <div className={`apple p2${dropedClass} ${shakeClass}-apple`}></div>
      <div className={`apple p3${dropedClass} ${shakeClass}-apple`}></div>
      <div className={`apple p4${dropedClass} ${shakeClass}-apple`}></div>
      <div className={`apple p5${dropedClass} ${shakeClass}-apple`}></div>
      <div className={`apple p6${dropedClass} ${shakeClass}-apple`}></div>
    </div>
  )
}
export default Apples
