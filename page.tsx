'use client'
import { Heading, Button, Box, Text, Divider, List, ListItem, Accordion, AccordionItem, AccordionPanel, AccordionIcon, AccordionButton, Container } from '@chakra-ui/react'
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
    <div className='text-center p-4 lg:p-36'>
      <div className='mb-16' >
        <h2 className='text-4xl underline pb-4 font-bold'>Our Mission</h2>
        <p className='text-2xl'>{ourMission}</p>
      </div>
      <div className='mb-16'>
        <h2 className='text-4xl underline pb-4 font-bold'>What we do</h2>

        <div className='text-start'>
        <p className='font-bold'> In 2023, Humanists Zimbabwe, formerly PICH received a grant from Humanists International to launch a media hub called the Project for Integrating Cultures in Humanism (PICH). </p>
      <p>The goal of PICH was to provide a platform for secular humanists and non-religious people to create content that spreads awareness of humanism and develops humanist thought from native knowledge systems.</p>
<br/>
      <p className='semibold'>Humanists Zimbabwe adopted a common system of objectives used by the Global Humanist Organization Network:</p>
      <ol>
        <li>•	Create awareness</li>
        <li>•	Fight for Acceptance</li>
        <li>•	Campaign for secularism</li>
        <li>•	Promote a life stance</li>
      </ol>
      <br/>
      <p>
      With the grant, Humanists Zimbabwe is building an open-door studio to find as many interested, talented, and willing humanists and non-religious people as possible to help them get their message out there into the world: "Let's all be humanists. This is our one life and we are better off if we live it freely to the max." So far, we have one running podcast show (Humanist Hubris), and many more to come.
      </p>

      <p>In the future, Humanists Zimbabwe will integrate all these ideas into one voice to create a portfolio of varied products. They aim to be a well-represented, diversified organization of humanists working together as one to make Zimbabwe and the world a better place.</p>
        </div>

     
      </div>
      <div>
        <Link href={'/about/yhz'}>
        <h2 className='text-4xl underline pb-4 font-bold'>Young Humanists Zimbabwe</h2>
          <div className='container'>
          <Image
          alt='Young Humanists Zim wallpaper'
          src={'/StaticResources/yhz.png'}
          width={700}
          height={400}
          />
          </div>
          </Link>
      </div>
      {/* <Box>
        <Heading textDecoration={'underline'} textDecorationColor={'brand.900'}>Our Vision For The Future</Heading>
     
       <List>
          <ListItem>1. To establish a digital hub and independent studio for non-religious content creators</ListItem>
          <ListItem>2. Tauya Chinama: Raising Democratic Freethinkers</ListItem>
          <ListItem>3. Shingai Ndoro: Just Imagine - A Zimbabwe Free of Religion</ListItem>
        </List>
      </Box> */}

      <div>
        <h2 className='text-4xl underline pb-4 font-bold'> Frequently Asked Questions About Atheism and Humanism</h2>
          <div>
            <Accordion  allowMultiple mt={8} px={{md: 8, lg:12}}>
              {faqs.map((faq) => {return(
                  <AccordionItem my={4}
                  key={faq.question}>
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
          </div>
             <Link href={'/about/faq'}><Button mt={8} px={4} textColor={'white'} bgColor={'black'} borderRadius={0}>View More Questions</Button></Link>
      </div>

    </div>
  )
}

export default AboutPage