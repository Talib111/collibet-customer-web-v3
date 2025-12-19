import React from 'react'

function SpacerHorizontal({ variant = 'primary', className = '', height = 1, ...props }) {
  const baseClasses = "w-full"
  
  const variantClasses = {
    primary: "bg-[#755698]",
    secondary: "bg-gray-500",
    success: "bg-green-500",
    danger: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500"
  }

  const classes = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`

  return (
    <div
      className={classes}
      style={{ height: `${height}px` }}
      {...props}
    />
  )
}

export default SpacerHorizontal

