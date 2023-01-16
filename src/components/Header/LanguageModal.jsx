import React, { useRef } from 'react'
import { useHandleClickOutside } from '../../hooks'

function LanguageModal({ setLanguage, language }) {

  return (
    <div className="absolute top-0 md:top-10 z-20 right-0  bg-light rounded-md">
      <div className="mx-7 space-y-3 py-2">
        <div className="">English</div>
      </div>
    </div>
  )
}

export default LanguageModal