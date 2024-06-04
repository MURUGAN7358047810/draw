import React from 'react'
import './Menu.css'

const Menu = ({setBrushColor, setBrushOpacity, setBrushWidth}) => {
  return (
    <div className='Menu'>
      <label htmlFor="brush">Brush Color:</label>
      <input type="color" onChange={(e) => setBrushColor(e.target.value)} />

      <label htmlFor="brush_width">Brush Width:</label>
      <input type="range" name="" id="" min="3" max="20" onChange={(e) => setBrushWidth(e.target.value)} />

      <label htmlFor="brush_opacity">Brush Opacity:</label>
      <input type="range" min="0" max="5" onChange={(e) => setBrushOpacity(e.target.value)} />
    </div>
  )
}

export default Menu