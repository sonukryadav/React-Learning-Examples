import React from 'react'

export default function Button({
  name = 'Default button',
  color,
  bgColor,
  margin,
  pad
}) {
  return (
    <div>
      <button style={{padding:pad,color:color,backgroundColor:bgColor,margin:margin}}>{ name}</button>
    </div>
  )
}
