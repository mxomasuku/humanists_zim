'use client'
import { Flex, Heading, IconButton, Box} from "@chakra-ui/react"
import Link from "next/link"
import Form from "./Form"
import { FaBook, FaPeopleArrows, FaQuestion } from "react-icons/fa"


const items = [{
  'id': 0,
  'title': "Frequently Asked Questions (FAQ)",
  'url': '/about/faq',
  'coverIcon': <FaQuestion/>
},
{
  'id': 1,
  'title': "Humanist Resources",
  'url': "/resources",
  'coverIcon': <FaBook/>
},
{
  'id': 2,
  'title': "Online Communities",
  'url': "/network",
  'coverIcon': <FaPeopleArrows/>
}]

const ReadMore = () => {
  return (
    <>
  
<Heading as={"h3"} size={"lg"} textAlign={'center'}>These might interest you</Heading>
  <Box mb={8}>
  <Flex justify={'space-around'} flexWrap={'wrap'} rowGap={4} mt={8} >
    {items.map((item) =>{ return (
      <Link key={item.id} href={item.url}  >
        <Flex bgColor={'gray.400'} p={4} width={300} borderRadius={'lg'}>
        <IconButton
        aria-label={'button for ' + `${item.title}` + 'section'}
            bg={'brand.900'}
            textColor={'white'}
            icon={item.coverIcon}
            size={'lg'}/>
          <Heading as={'h3'} size={'md'} ml={1} alignItems={'center'}>{item.title}</Heading>
          
        </Flex>
     </Link>
    
    )
     
    })}
    </Flex>

  </Box>
  
      
    </>
  )
}

export default ReadMore
