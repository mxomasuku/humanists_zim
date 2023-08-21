'use client'
import { Heading, Button, Box, Text, List, ListItem, Accordion, AccordionItem, AccordionPanel, AccordionIcon, AccordionButton, Container } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

const ourMission = 'To build an independent, self-sustaining, effective and interactive humanist society in Zimbabwe.'
const faqs = [
  {'question': 'If it wasn’t god then who created the universe?',
  'answer': "The question is loaded. It assumes a “who” (some kind of being), instead of a 'what'. While a bunch of ideas exist that are yet to be supported, let’s cut to the chase: We don’t know. Just because we don’t know doesn’t make it credible to assert that a supreme being is responsible. Even so, it doesn’t mean we should worship it unconditionally. When we say that we don’t know, it means we don’t know – nothing more. We currently don’t have the means to answer this question, but we can explain the processes that led to the universe’s form as we know it. We don’t have the means to answer this question ‘yet’ but I imagine in the distant future our advanced descendants will be able to fully explain the universe's origins, even replicate the conditions that led to its rise."},
{'question': 'Do you (humanists/atheists) really believe in nothing?',
'answer': 'No! Our lack of belief in God doesn’t mean we don’t believe in anything. To understand what humanists and atheists believe, you must understand that God is just a story, a fable that people believed and disproportionately took too seriously because they didn’t have the means to contest it. We disregard the story of god(s) and accept a self-evident narrative that as human beings we only have one life to live and in this life, we freely engage in different activities in the pursuit of happiness and meaning. We believe that we should create a society whose institutions are built towards the enrichment and expansion of the human experience. Our position and modus operandi are backed and improved by science and philosophical investigation which we believe are the best and most rational tools to lead us towards achieving ecological balance.'
},
{'question': 'What is Humanism?',
'answer': 'Humanism isn’t a religion that worships humanity. It is an observation locally known as hunhu, ubuntu, or humunhu. These observations can be summarised as we know that we are irrevocably and inescapably human, and everything we know is a product of human perception. This observation implies that, even if we may not be unique from a biological point of view, our Being, our existence (our humanity) is the greatest resource that we have as a species. As such, we should ensure that we preserve and cultivate it to reach its fullest potential. Your greatest contribution to this world is your existence and you should be free to decide the nature of that existence before you die. You will notice that there is a strong relationship between science and humanism. This is because science has proven to be a great ally in human efforts to define the nature of existence. In Shona, we say “zviro zviedzwa” which implies the value of testing things before we assert what they are. This is what is commonly known as the scientific method and it has freed us from diseases and made humans reach greater heights with each discovery. Everywhere you go around, deep within each society’s culture you will find traces of these characteristics of humanism: Everyone has value. And because everyone has value, we reject all untested, unscientific claims which seek to limit the human experience. Humanism, therefore, is the idea that we should build an empathetic world, that enriches each person’s experiences in this one life we have.'}
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