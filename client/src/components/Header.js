import React from 'react'

function Header() {
  return (
    <div className='p-5 bg-primary flex justify-between header'>
      <h1 className='text-secondary text-4xl font-semibold'>A</h1>
      <h1 className='text-white text-4xl font-semibold'>K</h1>
      <div className='flex flex-col items-center'>
        <h1 className='text-tertiary text-4xl font-semibold'>P</h1>
      </div>
    </div>
  )
}

export default Header