'use client'
import {Box, Text, Button, IconButton } from '@chakra-ui/react'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const buttonSocials = [
  {name: 'Facebook',
  url: 'https://www.facebook.com/humanistszim',
icon: <FaFacebook/> },
  {name: 'Twitter',
  url: '/donate',
icon: <FaTwitter/>},
  {name: 'Instagram',
  url: '/network',
icon: <FaInstagram/> },
  {name: 'YouTube',
  url: '/network',
icon: <FaYoutube/>},
  
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
    <Box bg={'black'} marginTop={'auto'} textColor={'gray.500'} pt={8} textAlign={'center'} pb={8}>
       <Box >
        {footerButtons.map((footerButton) => { return( <Link key={footerButton.name} href={footerButton.url}><Button borderRadius={0} mx={2} mb={4} px={8} textColor={'black'} bgColor={footerButton.bgColor}>{footerButton.name}</Button></Link>)
        })}
       </Box>

      <Text>Connect with us </Text>
<Box>
  {buttonSocials.map((buttonSocial) =>{
    return(
      <a href={buttonSocial.url} target='blank'>
          <IconButton
      key={buttonSocial.name}
      aria-label='button to our `${icon.name}$` link'
      icon={buttonSocial.icon}
      color={'brand.900'}
      bgColor={'black'}/>
      </a>
    
      
    )
  })}
</Box>


<Text textAlign={'center'}>© Humanists Zimbabwe {new Date().getFullYear()}</Text>
<Box textAlign={'center'}>
<Image
alt='organisation logo'
src={'/Logos/MainIcon.svg'}
width={50}
height={50}
className={'mx-auto block'}
/>
    
</Box>

        </Box>
  )
}

export default Footer