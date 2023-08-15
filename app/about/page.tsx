'use client'
import { Heading, Button, Box, Text, List, ListItem, Accordion, AccordionItem, AccordionPanel, AccordionIcon, AccordionButton, Container } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

const ourMission = 'To build an independent, self-sustaining, effective and interactive humanist society in Zimbabwe.'
const faqs = [
  {'question': 'Who is God?',
  'answer': 'Depending on whom you ask, the answer will be different. But the most common you will hear is that God is the Creator. This answer is not only incomplete but wrongly presumptuous. God is a fictional representation of what a person or group of people consider to be the most functional explanation for the order of things around them. Throughout history, gods are given characteristics that embody what each society or civilization considers to be the most puzzling question of their time. Zeus and Thor served in the Western world as gods of thunder and lightning up until mankind discovered where these two came from. Or maybe they just stopped caring! Who knows? In our time, the god(s) that most people worship promise eternal life through sacrifice. The simple reason is that the most puzzling questions of our time are death and the damning meaninglessness and futility of our lives. In practice, “whatever a person values the most is their god”. So, to answer the question more aptly: There are no literal gods, as in supernatural Beings monitoring us to follow their notion of what’s good so that we can be rewarded by an eternity of worshipping them and following their rules. God is a lie! A work of fiction. A fairytale designed to make human ignorance look and feel gracefully comforting.'},
{'question': 'What is Humanists International?',
'answer': 'Humanists International is the global representative body of the humanist movement. It was founded in 1952 and was originally known as IHEU (International Humanist and Ethical Union) until 2019/20 when it changed names to Humanists International. It is made up of over 160 member organizations of atheists, rationalists, agnostics, sceptics and freethinkers in over 80 countries across the globe. The main objective of the organisation is the advancement of humanist and rationalist thinking (these two although they are not the same are often used interchangeably in this respect) Among many other duties, Humanists International supports humanists at risk of persecution in extremely religious countries and funds efforts to develop self-sustaining Humanist organizations and communities. https://humanists.international'},
{'question': 'Who is God?',
'answer': 'A fictional character, no different from Spiderman, Harry Potter or any other superhero that mankind created to fulfill some void.'},
{'question': 'Who is God?',
'answer': 'A fictional character, no different from Spiderman, Harry Potter or any other superhero that mankind created to fulfill some void.'}
]

const AboutPage = () => {
  return (
    <Box textAlign={'center'} p={36}>
      <Box mb={16}>
        <Heading textDecoration={'underline'} pb={4} textDecorationColor={'brand.900'}>Our Mission</Heading>
        <Text fontSize={'2xl'}>{ourMission}</Text>
      </Box>
      <Box mb={16}>
        <Heading textDecoration={'underline'} textDecorationColor={'brand.900'} pb={4}>What we do</Heading>
        <Text> Our work so far is</Text>
      </Box>
      <Box>
        <Link href={'/about/yhz'}>
        <Heading pb={4} textDecoration={'underline'} textDecorationColor={'brand.900'}>Young Humanists Zimbabwe</Heading>
          <Container>
          <Image
          alt='Young Humanists Zim wallpaper'
          src={'/StaticResources/YhzName.png'}
          width={700}
          height={400}
          />
          </Container>
          </Link>
      </Box>
      <Box>
        <Heading textDecoration={'underline'} textDecorationColor={'brand.900'}>Our Vision For The Future</Heading>
        //These should be articles
       <List>
          <ListItem>1. To establish a digital hub and independent studio for non-religious content creators</ListItem>
          <ListItem>2. Tauya Chinama: Raising Democratic Freethinkers</ListItem>
          <ListItem>3. Shingai Ndoro: Just Imagine - A Zimbabwe Free of Religion</ListItem>
        </List>
      </Box>
      {/* <Box className={'section'}>
          < >Prominent Humanist Figures In Zimbabwe</>
          <Text> 1. Tauya Chinama</Text>
          <Text> 2. Linda Tiley</Text>
          <Text> 3. Takudzwa Mazwienduna</Text>
          <Text> 4. Mxolisi Masuku</Text>
          <Text> 5. Shingai Ndoro
          </Text>
      </Box> */}
      <Box>
        <Heading textDecoration={'underline'} textDecorationColor={'brand.900'}> Frequently Asked Questions About Atheism and Humanism</Heading>
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