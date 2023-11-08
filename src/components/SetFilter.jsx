import React from 'react'
import {FaSlidersH} from "react-icons/fa"
import "./SetFilter.css"
import { Button } from 'react-bootstrap'

export const SetFilter = () => {
  return (
    <Button className='col btn-filter'>
      <span className='custom-span'>FILTRY</span>
      <FaSlidersH id="slider-icon"/>
    </Button>
  )
}
