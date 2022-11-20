import React from 'react'

export default function Tabledata({ input } ) {
  return (
      <>
          <tr>
            <td>{input.name}</td>
          <td>{input.age}</td>
          <td>{input.address}</td>
          <td>{input.Department}</td>
          <td>{input.salary}</td>
          <td>{input.Maritalstate}</td>
          <td>{input.photo}</td>
          </tr>
          
    </>
  )
}
