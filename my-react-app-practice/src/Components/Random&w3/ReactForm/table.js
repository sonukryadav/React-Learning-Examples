import React from 'react'
import Tabledata from './tabledata'

export default function Table({ d } ) {
  return (
    <>
          <table style={{ border:'1px'}}>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Address</th>
                      <th>Department</th>
                      <th>Salary</th>
                      <th>Martial Status</th>
                      <th>Image path</th>
                  </tr>

              </thead>
              <tbody>
                      {d.map((v, i) => <Tabledata key={ i} input={v} />)}
                      {/* <Tabletada /> */}
              </tbody>
          </table>
    </>
  )
}
