'use client'
import { Heading, Button, Box, Text, List, ListItem, Accordion, AccordionItem, AccordionPanel, AccordionIcon, AccordionButton, Container } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

const ourMission = 'Our mission is to build an effective and interactive humanist society in Zimbabwe.'
const faqs = [
  {'question': 'Who is God?',
'answer': 'A fictional character, no different from Spiderman, Harry Potter or any other superhero that mankind created to fulfill some void.'},
{'question': 'Who is God?',
'answer': 'A fictional character, no different from Spiderman, Harry Potter or any other superhero that mankind created to fulfill some void.'},
{'question': 'Who is God?',
'answer': 'A fictional character, no different from Spiderman, Harry Potter or any other superhero that mankind created to fulfill some void.'},
{'question': 'Who is God?',
'answer': 'A fictional character, no different from Spiderman, Harry Potter or any other superhero that mankind created to fulfill some void.'}
]

const AboutPage = () => {
  return (
    <Box textAlign={'center'} p={36}>
      <Box>
        <Heading>About Humanists Zimbabwe</Heading>
        <Text fontSize={'3xl'}>{ourMission}</Text>
      </Box>
      <Box>
        <Heading>What we do</Heading>
        <Text> Some Lorem Ipsum goes here.</Text>
      </Box>
      <Box>
        <Link href={'/about/yhz'}>
        <Heading>Young Humanists Zimbabwe</Heading>
          <Container>
          <Image
          alt='Young Humanists Zim wallpaper'
          src={'/youthie.png'}
          width={700}
          height={400}
          />
          </Container>
          </Link>
      </Box>
      <Box>
        <Heading>Our Vision For The Future</Heading>
        //These should be articles
       <List>
          <ListItem>1. Humanists Ceremonies: A better way of celebrating your life, love and significant events</ListItem>
          <ListItem>2. Tauya Chinama: Raising Democratic Freethinkers</ListItem>
          <ListItem>3. Shingai Ndoro: Just Imagine - A Zimbabwe Free of Religion</ListItem>
        </List>
      </Box>
      <Box className={'section'}>
          <Heading>Prominent Humanist Figures In Zimbabwe</Heading>
          <Text> 1. Tauya Chinama</Text>
          <Text> 2. Linda Tiley</Text>
          <Text> 3. Takudzwa Mazwienduna</Text>
          <Text> 4. Mxolisi Masuku</Text>
          <Text> 5. Shingai Ndoro
          </Text>
      </Box>
      <Box>
        <Heading> Frequently Asked Questions About Atheism and Humanism</Heading>
          <Box >
            <Accordion  allowMultiple allowToggle mt={8} px={{md: 8, lg:12}}>
              {faqs.map((faq) => {return(
                  <AccordionItem my={4}>
                    <h2>
                    <AccordionButton>
                      <Text fontWeight={'bold'}>{faq.question}</Text>
                      <AccordionIcon/>
                    </AccordionButton>
                    </h2>
                  <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
                  </AccordionItem>
              )})}
            </Accordion>
          </Box>
             <Link href={'/about/faq'}><Button mt={8} px={4} textColor={'white'} bgColor={'black'} borderRadius={0}>View More Questions</Button></Link>
      </Box>

    </Box>
  )
}

export default AboutPage