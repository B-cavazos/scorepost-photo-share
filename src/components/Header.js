import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
        <div className='flex justify-between max-w-6xl'>
        {/* Left */}
        <div className='relative hidden lg:inline-grid w-24 h-24 cursor-pointer'>
            <Image src="http://links.papareact.com/ocw" fill contain/>
        </div>
        <div className='relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer'>
        <Image src="http://links.papareact.com/jjm" fill contain/>
        </div>
        {/* Middle */}
        <div></div>
        {/* Right */}
        <div></div>
        </div>
    </div>
  )
}

export default Header
