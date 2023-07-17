'use client'
import {Flex, Heading, Button} from '@chakra-ui/react'
const Hero = () => {
  return (
    <>
    <Flex bgImage={'/humies.png'} h={{base:'60vh',lg:'70vh'}} alignItems={'center'} flexDir={'column'} p={'8'}>
     <Heading as={'h2'} color={'white'} textShadow={'black'} >World Humanists Congress 2023</Heading>
     <Button color={'yellow.400'} w={20} mt={'auto'}>View</Button>
    </Flex>
    </>
  )
}

export default Hero