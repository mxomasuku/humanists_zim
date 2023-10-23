import {FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const buttonSocials = [
  {name: 'Facebook',
  url: 'https://www.facebook.com/humanistszim',
icon: <FaFacebook/> },
  {name: 'Twitter',
  url: 'https://twitter.com/HumanistsZim',
icon: <FaTwitter/>},
//   {name: 'Instagram',
//   url: '/network',
// icon: <FaInstagram/> },
//   {name: 'YouTube',
//   url: '/network',
// icon: <FaYoutube/>},
  
]

const footerButtons = [
  {
    name: 'Contact',
    url: '/contact',
    bgColor: 'white'
  },
  {
    name: 'Support',
    url: '/support',
    bgColor: 'buttonPrimary.900'
  },
  {
    name: 'Join',
    url: '/network',
    bgColor: 'white'
  }

]

const Footer = () => {
  return (
    <div className='bg-black text-gray-500 py-8 mt-16 text-center '>
       <div >
        {footerButtons.map((footerButton) => 
        { return( <Link key={footerButton.name} href={footerButton.url}><button className='rounded-md mx-2 mb-4 py-2 px-8 text-black bg-white'>{footerButton.name}</button></Link>)
        })}
       </div>

      <p>Connect with us </p>
<div>
  {buttonSocials.map((buttonSocial) =>{
    return(
      <a href={buttonSocial.url} target='blank'
      key={buttonSocial.name}>
          <button aria-label='button to our `${icon.name}$` link' className='bg-black text-pink-600 mx-2'>{buttonSocial.icon}</button>
      
      
    
      </a>
    
      
    )
  })}
</div>


<p className='text-center'>© Humanists Zimbabwe {new Date().getFullYear()}</p>
<div className='text-center'>
<Image
alt='organisation logo'
src={'/Logos/MainIcon.svg'}
width={50}
height={50}
className={'mx-auto block'}
/>
    
</div>

        </div>
  )
}

export default Footer