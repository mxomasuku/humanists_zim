'use client'
import {useState } from 'react'
import FaqComponent from '@/app/Components/FaqComponent'
import data from '../../../public/faq.json'


const FAQ = () => {
  const [active, setActive ] = useState([false, false, false, false])

  const isSomeActive = active.some((element) => element)

  const handleClick = () => {
    isSomeActive ? setActive([false, false, false, false]) : setActive([true, true, true, true])
  }

  return (
    <div className='lg:px-36 mt-8'>
 <FaqComponent 
 handleClick={handleClick}
 isSomeActive={isSomeActive}
 data={data}
 turn={active}
 setTurn={setActive}
 
 />
    </div>
  )
}

export default FAQ









































// import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text, Heading} from '@chakra-ui/react'


// const faqs = [
//   {'question': 'Who is God?',
//   'answer': 'Depending on whom you ask, the answer will be different. But the most common you will hear is that God is the Creator. This answer is not only incomplete but wrongly presumptuous. God is a fictional representation of what a person or group of people consider to be the most functional explanation for the order of things around them. Throughout history, gods are given characteristics that embody what each society or civilization considers to be the most puzzling question of their time. Zeus and Thor served in the Western world as gods of thunder and lightning up until mankind discovered where these two came from. Or maybe they just stopped caring! Who knows? In our time, the god(s) that most people worship promise eternal life through sacrifice. The simple reason is that the most puzzling questions of our time are death and the damning meaninglessness and futility of our lives. In practice, “whatever a person values the most is their god”. So, to answer the question more aptly: There are no literal gods, as in supernatural Beings monitoring us to follow their notion of what’s good so that we can be rewarded by an eternity of worshipping them and following their rules. God is a lie! A work of fiction. A fairytale designed to make human ignorance look and feel gracefully comforting.'},
//   {'question': 'If it wasn’t god then who created the universe?',
//   'answer': "The question is loaded. It assumes a “who” (some kind of being), instead of a 'what'. While a bunch of ideas exist that are yet to be supported, let’s cut to the chase: We don’t know. Just because we don’t know doesn’t make it credible to assert that a supreme being is responsible. Even so, it doesn’t mean we should worship it unconditionally. When we say that we don’t know, it means we don’t know – nothing more. We currently don’t have the means to answer this question, but we can explain the processes that led to the universe’s form as we know it. We don’t have the means to answer this question ‘yet’ but I imagine in the distant future our advanced descendants will be able to fully explain the universe's origins, even replicate the conditions that led to its rise."},
// {'question': 'Do you (humanists/atheists) really believe in nothing?',
// 'answer': 'No! Our lack of belief in God doesn’t mean we don’t believe in anything. To understand what humanists and atheists believe, you must understand that God is just a story, a fable that people believed and disproportionately took too seriously because they didn’t have the means to contest it. We disregard the story of god(s) and accept a self-evident narrative that as human beings we only have one life to live and in this life, we freely engage in different activities in the pursuit of happiness and meaning. We believe that we should create a society whose institutions are built towards the enrichment and expansion of the human experience. Our position and modus operandi are backed and improved by science and philosophical investigation which we believe are the best and most rational tools to lead us towards achieving ecological balance.'

// },
// {'question': 'What is Humanism?',
// 'answer': 'Humanism isn’t a religion that worships humanity. It is an observation locally known as hunhu, ubuntu, or humunhu. These observations can be summarised as we know that we are irrevocably and inescapably human, and everything we know is a product of human perception. This observation implies that, even if we may not be unique from a biological point of view, our Being, our existence (our humanity) is the greatest resource that we have as a species. As such, we should ensure that we preserve and cultivate it to reach its fullest potential. Your greatest contribution to this world is your existence and you should be free to decide the nature of that existence before you die. You will notice that there is a strong relationship between science and humanism. This is because science has proven to be a great ally in human efforts to define the nature of existence. In Shona, we say “zviro zviedzwa” which implies the value of testing things before we assert what they are. This is what is commonly known as the scientific method and it has freed us from diseases and made humans reach greater heights with each discovery. Everywhere you go around, deep within each society’s culture you will find traces of these characteristics of humanism: Everyone has value. And because everyone has value, we reject all untested, unscientific claims which seek to limit the human experience. Humanism, therefore, is the idea that we should build an empathetic world, that enriches each person’s experiences in this one life we have.'}
// ]

// const FAQ = () => {
//   return (
//     <Box mt={8}>
//       <Heading textAlign={'center'}>Frequently Asked Questions</Heading>
//     <Accordion defaultIndex={[0]} allowMultiple allowToggle mt={8} px={{md: 8, lg:12}}>

//       {faqs.map((faq) => {return(
//         <AccordionItem>
//     <h2>
//       <AccordionButton>
//         <Text fontWeight={'bold'}>{faq.question}</Text>
//         <AccordionIcon/>
//       </AccordionButton>

//     </h2>
// <AccordionPanel pb={4}>
// {faq.answer}
// </AccordionPanel>
//   </AccordionItem>
//       )})}

//   </Accordion>
//     </Box>
    
//   )
// }

// export default FAQ