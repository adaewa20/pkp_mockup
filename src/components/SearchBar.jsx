import React from 'react'
import {FaSearch} from "react-icons/fa"
import "./SearchBar.css"

export const SearchBar = () => {
  return (
    <div className='input-wrapper'>
      <input placeholder='Szukaj biletu' className='ml-15'/>
      <FaSearch id="search-icon"/>
    </div>
  )
}
