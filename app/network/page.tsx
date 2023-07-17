'use client'
import { Heading, Text, Box, Flex, Image} from '@chakra-ui/react'
import { FaFacebook, FaMastodon, FaReddit, FaWhatsapp, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Form from '../Components/Form'
import NetworkGrid from '../Components/NetworkGrid'
// import Image from 'next/image'


//Global data



//App starts here
const Network = () => {
  return (
    <Box px={{base: 4, md: 8, lg: 16 }} my={12}>
      <Box py={8}>
         <Heading as={'h1'} size={'xl'} textAlign={'center'}>Join the Growing Network!</Heading>

    <Text as={'h4'} fontSize={'2xl'} px={8}>Millions of freethinkers around the world and discover a new way of thinking full of endless possibilities in this one life we have.</Text>
      </Box>
   
<Box py={8}>
<Image
src={'/poster.png'}
/>
</Box>

<Form/>
<NetworkGrid/>
<Box textAlign={'center'}>
  <Heading as={'h4'} size={'md'}>Share our page in your community</Heading>
  <Flex gap={2} justifyContent={'center'} mt={4}>
  <FaMastodon/>
  <FaFacebook/>
  <FaWhatsapp/>
  <FaTwitter/>
  <FaReddit/>
 <FaLinkedin/>
  </Flex>

</Box>


    </Box>
  )
}

export default Network