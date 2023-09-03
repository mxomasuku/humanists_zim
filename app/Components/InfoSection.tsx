'use client'

import { Card, CardBody, CardFooter, CardHeader, Box, Heading, Text, SimpleGrid} from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"


const sectionData = [
  {"id": 0,
  'url': "/about/yhz",
"title" : "Young Humanists Zimbabwe",
"image": "/StaticResources/yhz.png",
"info": "Our section dedicated to Youths and the future of Humanism"
},
// {"id": 1,
// "title" : "Blog",
// 'url': "/posts",
// "image": "/StaticResources/blog.png",
// "info": "Local and international articles about Humanism"
// },

{"id": 1,
"title" : "Our Podcast",
'url': "/podcast",
"image": "/StaticResources/HumanistHubris.png",
"info": "Our Podcast"
},
{"id": 2,
'url': "/support",
"title" : "Support Us",
"image": "/StaticResources/Support.jpg",
"info": "Your support keep us moving. See how you can help and support our cause."
},
{"id": 3,
'url': "/network",
"title" : "Online Communities",
"image": "/StaticResources/world-humanist-day.webp",
"info": "Engage and interact with non-religious people local and around the world"

}
]
const aboutUs = "We are a secular and humanistic community. For us, humanism is a human way of life, based on science, which values welfare of the ecosystem in totality, independence, sovereign, justice, equality and ethical living. As such we oppose dogmatism, bigotry, hate speech, discrimination, injustice and all forms of oppression. Our aim is to bring together all non-religious people in building a freethinking Zimbabwe guided by science and empathy. We believe our society is much better when religion does not unfairly dominate discourse about public policy. As such we promote and support any group of people suffering from effects of religious bigotry."
const ourMission = 'Our mission is to build an effective and interactive humanist society in Zimbabwe.'

const InfoSection = () => {
  return (
    <>
        <Box mt={10} px={{base: 4, md: 8, lg: 16 }} >
        <Heading as={'h3'} size={'md'} color={'brand.900'}>WHO ARE WE?</Heading>
            <Text fontSize={'3xl'} fontWeight={'bold'}>{ourMission}</Text> 
            <Text>{aboutUs}</Text>
        </Box>



<SimpleGrid justifyContent={'center'} my={10}  columns={{base: 1, sm: 2, lg: 4}}  rowGap={4} columnGap={{sm: 4}}>
{sectionData.map((item) =>{ return (
           <Link href={item.url} key={item.id}>
            <Card w={{base: 300, sm: 300, md: 300}} h={300} className="mx-auto">
              <CardHeader>
                <Heading as={'h3'} size={'md'}>{item.title}</Heading>
              </CardHeader>
              <CardBody mt={-8}>
                <Box h={150} bgImage={item.image} bgPosition={'center'} bgSize={'cover'}></Box>
          
              </CardBody>
              <CardFooter fontSize={'sm'} mt={-8} textColor={'gray.600'}>
                {item.info}
              </CardFooter>
            </Card>
          </Link>
        )
})}
</SimpleGrid>
    </>
 
  )
}

export default InfoSection
