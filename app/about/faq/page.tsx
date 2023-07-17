'use client'

import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text, Heading} from '@chakra-ui/react'


const faqs = [
  {'question': 'Who is god?',
'answer': 'A fictional character, no different from Spiderman, Harry Potter or any other superhero that mankind created to fulfill some void.'},
{'question': 'If it wasn’t god then who created the universe',
'answer': "The question is loaded. It’s assuming it’s a “who” (some kind of being), instead of a 'what'. While a bunch of ideas exist that have yet to be supported, let’s cut to the chase. We don’t know. Just because we don’t know doesn’t mean there’s any credibility to asserting that a supreme being is responsible. When we say that we don’t know, it means we don’t know – nothing more, nothing less. We currently don’t have the means to answer this question, but we can explain the processes that led to the universe’s form as we know it. We don’t have the means to answer this question ‘yet’ but I imagine in the distant future our advanced descendants will have the capability to fully explain the origins of the universe, even replicate the conditions that led to its rise. Humanity has a long history of investigating phenomena (such as lightning) that were thought to be supernatural (thrown by Zeus), only to find they’re perfectly natural phenomena (equalization of electrical charge between the upper atmosphere and the ground via electrostatic breakdown of the air)."},
{'question': 'Do you (humanists/atheists) really believe in nothing?',
'answer': 'No! Our lack of belief in god doesn’t mean we don’t believe in anything. For you to understand what humanists and atheists alike believe, you must understand that god is just a story, a fabble that people believed and disproportionately took too seriously because they didn’t have the means to contest it. We chose to disregard this story and chose to believe another story altogether. The story we believe is the self-evident story of human agency and that we only have one life to live. A story that human beings can achieve more and live happier and richer lives when they come to, live empathetically and open mindedly. Our preferred story is backed up and improved by science and philosophical investigation. It’s a story where WE have the power to decide the role we play.  In celebrating life and in mourning, we live, we laugh, we cry, we love, we make mistakes, we create things and finally we die. What we believe is that the only entity who can improve human life is the human'
},
{'question': 'What is a Humanism',
'answer': 'A fictional character, no different from Spiderman, Harry Potter or any other superhero that mankind created to fulfill some void.'}
]

const FAQ = () => {
  return (
    <Box mt={8}>
      <Heading textAlign={'center'}>Frequently Asked Questions</Heading>
    <Accordion defaultIndex={[0]} allowMultiple allowToggle mt={8} px={{md: 8, lg:12}}>

      {faqs.map((faq) => {return(
        <AccordionItem>
    <h2>
      <AccordionButton>
        <Text fontWeight={'bold'}>{faq.question}</Text>
        <AccordionIcon/>
      </AccordionButton>

    </h2>
<AccordionPanel pb={4}>
{faq.answer}
</AccordionPanel>
  </AccordionItem>
      )})}

  </Accordion>
    </Box>
    
  )
}

export default FAQ