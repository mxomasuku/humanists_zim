'use client'
import {Box, Flex, Heading, List, ListItem, HStack, IconButton, Button, Image} from '@chakra-ui/react'
import Link from 'next/link'
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons'
import { useState } from 'react'
// import Image from 'next/image'

const Header = () => {
const [display, setDisplay] = useState('none')
const routeLinks = [
  {'route': 'Home',
  id: 0,
url: '/'},
{'route': 'Blog',
url: '/posts',
id: 1,},
{'route': 'Store',
id: 2,
url: '/store'},
{'route': 'Join/Network',
id: 3,
url: '/network'},
{'route': 'About',
id: 4,
url: '/about'},
{'route': 'Support/Donate',
url: '/donate',
id: 5}


]


  return (
    <>
    <Flex justifyContent={'space-between'} textColor={'white'} bgColor={'black'}>
    <Box px={8}>
        <Heading as={'h4'} >
          <Image 
          width={150}
          src={'/Logos/logoName@2x.png'}/>
        </Heading>
    </Box>
    <Box>
      <List>
      <Flex justify={'space-between'} alignItems={'center'} mt={4} gap={4} display={{base: 'none', md: 'flex', lg: 'block'}}>
          <HStack spacing={"30px"} pr={20}> 
          {routeLinks.map((route) => {return(
            <ListItem key={route.id}>
              <Link href={route.url}>{route.route}</Link>
            </ListItem>
          )})}
          </HStack>
        </Flex>
      </List>
      </Box>
    
      <IconButton
      aria-label='Open-Menu'  
      icon={<HamburgerIcon/>}
      color={'brand.900'}
      bgColor={'black'}
      display={{base: 'flex', md: 'none', lg: 'none'}}
      onClick={()=> setDisplay('flex')}
     />

    </Flex>
<Flex 
display={display}
w={'100vw'}
h={'60vh'}
pos={'fixed'}
bgColor={'gray.200'}
top={0}
left={0}
overflowY={'auto'}
zIndex={20}
flexDir={'column'}>

  <Flex justify={'flex-end'}>
    <IconButton
    aria-label='Close Menu'
    icon={<CloseIcon/>}
    size={'xl'}
    mr={4}
    mt={4}
    onClick={()=> setDisplay('none')}
    />
  </Flex>
<Flex
    flexDir={'column'} alignItems={'center'}>
      <List mb={4}>
      {routeLinks.map((route) => {return(
            <ListItem key={route.id} py={4} fontSize={'xl'}><Link href={route.url} onClick={()=> setDisplay('none')}>
              {route.route}</Link>
            </ListItem>
          )})}
          
    </List>
      </Flex>
</Flex>
 
    </>
  )
}

export default Header