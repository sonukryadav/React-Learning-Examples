import React from 'react'
import './StyleSeet.css'
import styles from './ModuleCSS.module.css'
import '../SASS/muSass.scss'


export default function CSSStyle() {

    const objStyle = {
        color: 'green',
        textAlign: 'center',
        boxShadow: '0 0 10px black',
        padding: '10px'
    }

  return (
    <>
        {/* Inline styling :-------------------------------------*/}
        <h3 style={{ color: 'red', fontSize: '30px' }}>Inline style</h3>
        
        {/* As JavaScript Object:-------------------------------*/}
        <h2 style={objStyle}>Style via Javascript object</h2>
        
        {/* CSS Stylesheet:-------------------------------------*/}
        <p className='stlSheet'> CSS Stylesheet</p>
        
      {/* CSS Module:-------------------------------------------*/}
      <p className={styles.bigblue}>It's the css module</p>

      {/* Styling React Using Sass:-----------------------------*/}
      <p className='scss1'> I am styled by sass.</p>


    </>
  )
}
