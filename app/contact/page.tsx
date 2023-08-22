'use client'
import { Box, Heading } from "@chakra-ui/react"
import Image from "next/image"


const Contact = () => {
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

export default Contact
