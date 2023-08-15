'use client'
import { Heading, Text, Box } from '@chakra-ui/react'
import Image from 'next/image'

const Donate = () => {
  return (
    <Box p={{base: 4, md: 8, lg: 16 }} textAlign={'center'} >

    <Heading as={'h3'}>THIS PAGE IS UNDER CONSTRUCTION </Heading>
    <Image 
          alt='logo'
          height={720}
          width={1000}
          src={'/Logos/LogoName@2x.png'}/>
    </Box>
  )
}

export default Donate