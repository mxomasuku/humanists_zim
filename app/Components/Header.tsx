'use client'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import {FaBars,  FaChevronCircleUp} from 'react-icons/fa'

const Header = () => {
const [display, setDisplay] = useState(false)

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
    <div className='flex justify-between text-white bg-black w-full top-0 right-0 left-0 z-10'>
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
      <div className='hidden md:flex mt-4 align-center justify-between ' >
         
          {routeLinks.map((route) => {return(
            <li key={route.id} className='px-4 hover:underline decoration-yellow-500 decoration-4'>
              <Link href={route.url}>{route.route}</Link>
            </li>
          )})}
        </div>
      </ul>
      </div>
    
      <button aria-label='Open-Menu' className='text-pink-600 bg-black p-4 flex md:hidden'
      onClick={()=> setDisplay(!display)}>
        {/* {<FaBars/>} */}
        {display ? ( <FaChevronCircleUp className='h-8 w-8'/>): (<FaBars className='h-8 w-8'/>)}
        </button>


    </div>
<div className={`fixed flex bg-black text-gray-200 block w-full h-96 mt-16 ml-0 overflow-y-auto flex-col z-20 ${ display ? 'block': 'hidden'} `} >
<div className='flex flex-col align-center text-center'>
      <ul className="mb-4">
      {routeLinks.map((route) => {return(
            <li key={route.id} className="py-4 text-xl hover:underline decoration-yellow-500">
              <Link href={route.url} onClick={()=> setDisplay(false)}>
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