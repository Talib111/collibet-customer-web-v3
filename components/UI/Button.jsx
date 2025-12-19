import React from 'react'

function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseClasses = "w-full px-6 py-2.5 font-medium text-xs leading-tight rounded transition duration-150 ease-in-out"
  
  const variantClasses = {
    primary: "bg-[#755698] text-white hover:bg-[#755698]/90 focus:bg-[#755698] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#755698] active:shadow-lg",
    outline: "text-[#755698] border cursor-pointer hover:text-black hover:bg-[#755698]/90 focus:bg-[#755698] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#755698] active:shadow-lg",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-lg",
    success: "bg-green-500 text-white hover:bg-green-600 focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg",
    warning: "bg-yellow-500 text-black hover:bg-yellow-600 focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg",
    info: "bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg"
  }

  const classes = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

