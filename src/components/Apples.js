import React from 'react'
import { useSelector } from 'react-redux'

function Apples () {
  const shakeClass = useSelector(state => state.reducer.shakeClass)

  const droppedClass = useSelector(state => state.reducer.droppedClass)
  return (
    <div className='apples'>
      <div className={`apple p1${droppedClass} ${shakeClass}-apple`}></div>
      <div className={`apple p2${droppedClass} ${shakeClass}-apple`}></div>
      <div className={`apple p3${droppedClass} ${shakeClass}-apple`}></div>
      <div className={`apple p4${droppedClass} ${shakeClass}-apple`}></div>
      <div className={`apple p5${droppedClass} ${shakeClass}-apple`}></div>
      <div className={`apple p6${droppedClass} ${shakeClass}-apple`}></div>
    </div>
  )
}
export default Apples
