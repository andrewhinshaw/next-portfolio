import React from 'react'

const AppWindowContent = () => {
  return (
    <div className="flex flex-grow overflow-hidden">

      {/* SIDE NAV */}
      <div className="hidden md:block basis-60 border-r-[1px] p-6 overflow-auto shrink-0 border-white/30 dark:border-gray-500/30"></div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col grow"></div>
    </div>
  )
}

export default AppWindowContent