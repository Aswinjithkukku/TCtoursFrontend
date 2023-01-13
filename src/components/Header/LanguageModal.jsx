import React, { useRef } from 'react'
import { useHandleClickOutside } from '../../hooks'

function LanguageModal({ setLanguage, language }) {


      const languageRef = useRef()

    useHandleClickOutside(languageRef, () => setLanguage(false))
    if(!language) return null
  return (
    <div className="absolute top-9 md:top-16 z-20 right-0 lg:right-auto bg-light rounded-md">
    <div className="mx-7 space-y-3 py-2">
        <div className="">English</div>
    </div>
</div>
  )
}

export default LanguageModal