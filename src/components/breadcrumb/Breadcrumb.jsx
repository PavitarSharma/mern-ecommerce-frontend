import React from 'react'
import { Link } from "react-router-dom"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import "./Breadcrumb.css"
const Breadcrumb = ({ page }) => {
  return (
    <div className='d-flex align-items-center'>
        <Link to="/" className='home mb-0'>Home</Link>
        <MdOutlineKeyboardArrowRight size={24} style={{ opacity: "0.5"}} />
        <p className='page mb-0'>{page}</p>
    </div>
  )
}

export default Breadcrumb