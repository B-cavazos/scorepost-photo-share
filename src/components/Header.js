import Image from 'next/image'
import React from 'react'
import{
  MagnifyingGlassIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  Bars3Icon, //MenuIcon,
} from "@heroicons/react/24/outline"

function Header() {
  return (
    <div>
        <div className='flex justify-between max-w-6xl'>
        {/* Left - icons */}
        <div className='relative hidden lg:inline-grid w-24 h-24 cursor-pointer'>
            <Image src="http://links.papareact.com/ocw" fill contain/>
        </div>
        <div className='relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer'>
        <Image src="http://links.papareact.com/jjm" fill contain/>
        </div>
        {/* Middle - search input */}
        <div className='max-w-xs'>
          <div className='relative mt-1 p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <MagnifyingGlassIcon className='w-5 h-5 text-gray-500'/>
            </div>
            <input type="text" className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' placeholder='Search'/> {/* focus border not working */}
          </div>
        </div>

        {/* Right */}
        <div></div>
        </div>
    </div>
  )
}

export default Header
