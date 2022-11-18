import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../Layouts/Navbar'

const Error = () => {
  return (
    <>
      <div className='header'>
        <Navbar />
      </div>
      <div className='container-fluid mb-5' id='btn-error'>
        <h1 className='fs-1 text-center mt-5 mb-5'>Ups! Something went wrong!</h1>
        <h3 className='text-center mt-5'>Please, go back to home and try again</h3>
        <NavLink class='text-center btn btn-danger btn-lg mt-5' id='btn-error-home' to='/home' role='button'>Go back home</NavLink>
      </div>
    </>
  )
}

export default Error
