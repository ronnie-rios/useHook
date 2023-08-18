/* eslint-disable react/prop-types */
import React from 'react'

const Error = ({ error }) => {
  return (
    <div className='p-2 bg-red-200 rounded-sm'>
        <h1 className='text-red-800 my-2'>Error: {error.message}</h1>
    </div>
  )
}

export default Error