'use client'
import {Flex, Text, Button} from '@chakra-ui/react'
const Hero = () => {
  return (
    <>
    <Flex bgImage={'/StaticResources/2127116.jpg'} bgSize={'cover'} bgPosition={'top'} h={{base:'60vh',lg:'70vh'}} alignItems={'center'} flexDir={'column'} p={'8'}>
     <Text fontSize={{base: '2xl', lg:'4xl'}} fontWeight={'bold'} color={'brand.900'} justifyItems={['left', 'center']} textShadow={' 0 0 20px white'}  >For a meaningful human life without god</Text>
     <Button color={'yellow.400'} w={200} bg={'black'} mt={'auto'} boxShadow={'0 0 20px yellow'}>View Podcast</Button>
    </Flex>
    </>
  )
}

export default Hero