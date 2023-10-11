'use client'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import {FaBars,  FaChevronCircleUp} from 'react-icons/fa'

const Header = () => {
const [display, setDisplay] = useState('hidden')
const routeLinks = [
  {'route': 'Home',
  id: 0,
url: '/'},
// {'route': 'Blog',
// url: '/posts',
// id: 1,},
// {'route': 'Store',
// id: 2,
// url: '/store'},
{'route': 'Join/Network',
id: 3,
url: '/network'},
{'route': 'About',
id: 4,
url: '/about'},
{'route': 'Support',
url: '/support',
id: 5}


]


  return (
    <>
    <div className='flex justify-between text-white bg-black'>
    <div className=''>
      <Link href={'/'}>
      <h4 >
          <Image 
          alt='logo'
          height={75}
          width={150}
          src={'/Logos/LogoName@2x.png'}/>
        </h4>
      </Link>
      
    </div>
    <div>
      <ul>
      <div  className='hidden md:flex mt-4 align-center justify-between ' >
         
          {routeLinks.map((route) => {return(
            <li key={route.id} className='px-4'>
              <Link href={route.url}>{route.route}</Link>
            </li>
          )})}
        </div>
      </ul>
      </div>
    
      <button aria-label='Open-Menu' className='text-pink-600 bg-black p-4 flex md:hidden'
      onClick={()=> setDisplay('flex')}>{<FaBars/>}</button>


    </div>
<div className='fixed flex bg-gray-200 block w-full h-96 mt-0 ml-0 overflow-y-auto flex-col z-20 hidden' >


  <div className=' flex justify-end text-3xl mr-4 mt-4' onClick={()=> setDisplay('hidden')} aria-label='Close Menu'>
 <FaChevronCircleUp/>
  </div>
<div className='flex flex-col align-center text-center'>
      <ul className="mb-4">
      {routeLinks.map((route) => {return(
            <li key={route.id} className="py-4 text-xl">
              <Link href={route.url} onClick={()=> setDisplay('hidden')}>
              {route.route}</Link>
            </li>
          )})}
          
    </ul>
      </div>
</div>
 
    </>
  )
}

export default Header