import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

function FooterList({item}) {
    const [view, setView] = useState(false)
    return (
        <>
            <div className="py-4 border-text border-b-2 space-y-2 md:border-none" key={item}>
                <div
                    className="flex justify-between items-center"
                    onClick={() => setView(!view)}
                >
                    <div className="font-medium">{item?.title}</div>
                    <div className="md:hidden text-lg mb-2">
                        {view ? (
                            <AiOutlineUp />
                        ) : (
                            <AiOutlineDown />
                        )}
                    </div>
                </div>
                {view &&
                    item?.navLinks?.map((links, index) => (
                        <div className="space-y-2 md:hidden" key={index}>
                            <div className="text-sm">
                                {links?.name}
                            </div>
                        </div>
                    ))}
                {item?.navLinks?.map((links, index) => (
                    <div className="space-y-2 hidden md:block" key={index}>
                        <div className="text-sm">{links?.name}</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FooterList