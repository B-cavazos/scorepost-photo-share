import Image from 'next/image'
import React from 'react'
import{
  MagnifyingGlassIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  Bars3Icon,
  PlusCircleIcon, //MenuIcon,
} from "@heroicons/react/24/outline"
import {HomeIcon} from "@heroicons/react/24/solid"
function Header() {
  return (
    <div>
        <div className='flex items-center justify-between max-w-6xl mx-5 lg:mx-auto'>
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
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon className='navBtn'/>
          <Bars3Icon className='h-6 md:hidden cursor-pointer'/>
          <div className='relative navBtn'>
            <PaperAirplaneIcon className='navBtn -rotate-45'/>
            <div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>3</div>{/* need to make dynamic */}
          </div>
          <PlusCircleIcon className='navBtn'/>
          <UserGroupIcon className='navBtn'/>
          <HeartIcon className='navBtn'/>

            <img src="https://links.papareact.com/3ke" alt="profile picture" className='h-10 rounded-full cursor-pointer'/>
        </div>
        </div>
    </div>
  )
}

export default Header
