import React from 'react'

const Customtooltip = ({active, payload}) => {
  if (active && payload && payload.length) {
    return (
        <div className='bg-white shadow-md rounded-lg p-2 border border-gray-300'>
            <p className='text-xs font-semibold text-purple-800 mb-1'>{payload[0].name}</p>
            <p className='text-sm text-gray-600'>
                Amount: <span className='text-sm text-gray-900'>Rp{payload[0].value}</span>
            </p>
        </div>
    )
  }
}

export default Customtooltip