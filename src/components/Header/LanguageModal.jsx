import React from 'react'

function LanguageModal({ setView, view }) {
    if(!view.language) return null
  return (
    <div className="absolute top-9 md:top-10 z-20 right-0 lg:right-auto bg-[#002366]">
    <div className="mx-7 space-y-3 py-2">
        <div className="">English</div>
    </div>
</div>
  )
}

export default LanguageModal