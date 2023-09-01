'use client'
import {Flex, Text, Button} from '@chakra-ui/react'
const Hero = () => {
  return (
    <>
    <Flex bgImage={'/StaticResources/hero.png'} bgSize={'cover'} bgPosition={'top'} h={{base:'60vh',lg:'70vh'}} alignItems={'center'} flexDir={'column'} p={'8'}>
    <Button color={'yellow.400'} w={200} bg={'black'} mt={'auto'} boxShadow={'0 0 20px yellow'}>
    <a href='https://humanisthubris.podbean.com/' target='_blank'>View Podcast</a></Button>
    
    </Flex>
    </>
  )
}

export default Hero