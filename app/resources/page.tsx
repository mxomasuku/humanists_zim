'use client'

import { Heading, Text, Box, Container, Flex, OrderedList, ListItem, ListIcon } from "@chakra-ui/react"
import Image from "next/image"

const webPages = [
  {'title': "What is Humanism?",
'source': "Humanists International",
'url': "https://humanists.international/what-is-humanism/"},
{'title': "Good Without God: An Illustrated Guide To Humanism",
'source': "Humanists International",
'url': "https://humanists.international/wp-content/uploads/2021/04/Good-without-a-God.pdf"},

{'title': "What is the Humanistic Theory in Education?",
'source': "Chris Drew (PhD) @ HelpfulProfessor.com",
'url': "https://helpfulprofessor.com/humanist-theory-in-education/"},
{'title': "Humanism: Africa",
'source': "Encyclopedia.com",
'url': "https://www.encyclopedia.com/history/dictionaries-thesauruses-pictures-and-press-releases/humanism-africa"},
{'title': "Humanism Needs An Upgrade: Is Sentientism the Philosophy That Could Save the World?",
'source': "Secular Humanism : Free Inquiry",
'url': "https://www.secularhumanism.org/2019/04/humanism-needs-an-upgrade-is-sentientism-the-philosophy-that-could-save-the-world/"},


]
const academicPapers = [
  {'title': 'A Redescriptive History of Humanism and Hermeneutics in African Philosophy',
'author': 'Oladapo Jimoh Balogun : Department of Philosophy, Lagos State University, Ojo, Nigeria',
'url': 'https://www.scirp.org/journal/paperinformation.aspx?paperid=28024',},
{'title': 'African Humanism in Achebe in Relation to the West',
'author': 'Edeh Department of Philosophy, University of Abuja, Abuja, Nigeria',
'url': 'https://www.scirp.org/journal/paperinformation.aspx?paperid=28024',},
{'title': 'Scientific Humanisms and the Anthropocene, Or the Dream of Steering the Evolution of the Human and Natural World',
'author': 'Marianne Sommer (2020)',
'url': 'https://www.practicasdahistoria.pt/article/download/24293/17972/93860',},



]
const books = [
  {'title': 'Vehicle For Progress: Rethinking African Cultural Dynamics',
'author': 'Takudzwa Mazwienduna',
'url': 'https://www.amazon.co.uk/Vehicle-Progress-Rethinking-Cultural-Dynamics-ebook/dp/B09MZ924HP/ref=sr_1_1?crid=9OVTEZDCYUDQ&keywords=Vehicles+For+Progress&qid=1691836106&s=books&sprefix=vehicles+for+progre%2Cstripbooks%2C493&sr=1-1',
'image': '/StaticResources/vehicleForProgress.jpg' },
{'title': 'Little Book on Humanism',
'author': 'Andrew Copson & Alice Roberts',
'url': 'https://www.amazon.co.uk/Little-Book-Humanism-Universal-lessons/dp/0349425469',
'image': '/StaticResources/LitteBookOnHumanism.jpg' },
{'title': 'The Oxford Handbook of Humanism',
'author': 'ed. by Anthony B Pinn',
'url': 'https://academic.oup.com/book/36311',
'image': '/StaticResources/handbook.jpg' },




]
const essays = [
  {'title': 'Humanist Manifesto I (1933)',
'url': 'https://americanhumanist.org/what-is-humanism/manifesto1/'},
{'title': 'Humanist Manifesto II (1973)',
'url': 'https://americanhumanist.org/what-is-humanism/manifesto2/'},
{'title': 'Humanist Manifesto III: Humanism and its Aspirations (2003)',
'url': 'https://americanhumanist.org/what-is-humanism/manifesto3/'},
{'title': 'The Promise of Humanism',
'url': 'https://americanhumanist.org/what-is-humanism/the-promise-of-humanism/'},
]



const Resources = () => {
  return (
    <Box>
       <Text color={'brand.900'} textAlign={'center'} fontSize={'md'} fontWeight={'semibold'}>This page contains links to books and resources, for some light reading for those who are curious about the conversations which humanists have about humanity</Text>
      <Box my={8}>
      <Heading as={'h3'} size={'xl'} mb={4} textAlign={'center'}>Explore the Humanist Lifestance from reliable Sources</Heading>
     <Image
     src={'/StaticResources/LearnMore.jpg'}
     width={1000}
     height={100}
     alt="decorative"
     className='mx-auto block' 
     />
      </Box>
      <Container mt={8}>
    
   
     
    

<Box>
  <Box mb={8}>
  <Heading as={'h4'} textDecoration={'underline'} mb={2} textAlign={'center'} textDecorationColor={'brand.900'}>Web Pages</Heading>
<OrderedList>

{webPages.map((webPage) =>{
  return(
    <ListItem key={webPage.title}  mb={4}>
      <a href={webPage.url} className="text-blue-900 text-xl">
        {webPage.title}
      </a>
      <Text>Source: {webPage.source}</Text>


      </ListItem>
  )
})}
</OrderedList>

  </Box>




<Box mb={8}>
    <Heading textDecoration={'underline'} mb={2} textAlign={'center'} textDecorationColor={'brand.900'}>Academic Papers</Heading>
<OrderedList>
{academicPapers.map((academicPaper)=>{
  return(
    <ListItem mb={4} key={academicPaper.title}>
      <a href={academicPaper.url} className="text-blue-900 text-xl">{academicPaper.title}</a>
      <Text>Author: {academicPaper.author}</Text>
    </ListItem>

  )
})}
</OrderedList>


 <Text color={'brand.900'} fontSize={'xs'}>Click below to help us locate this paper</Text>
  <a href="https://worldcat.org/title/869755918" className="text-blue-900 text-xl">Hunhuism or ubuntuism : a Zimbabwe indigenous political philosophy </a>
  <Text>by Thompson Samkange (1980)</Text>


</Box>
 
<Box mb={8}>
<Heading textDecoration={'underline'} mb={2} textAlign={'center'} textDecorationColor={'brand.900'}>Essays</Heading>
<OrderedList>
{essays.map((essay)=>{
return(
  <ListItem mb={4} key={essay.title}>
    
    <a href={essay.url}  className="block text-blue-900 text-xl">{essay.title} </a>
  
   
  </ListItem>
  
)
})}

</OrderedList>
</Box>
 



<Box mb={16}>
<Heading textDecoration={'underline'} textAlign={'center'} textDecorationColor={'brand.900'} mb={2}>Books</Heading>
<OrderedList>
{books.map((book) =>{
  return(
    <ListItem key={book.title}>
        <Flex  mb={4}>
      <Box w={75} h={75}  mr={8} bgImage={book.image} backgroundPosition={'center'} backgroundSize={'contain'}></Box>

      <Box>
      <a href={book.url} className="block text-blue-900  text-md lg:text-xl">
      {book.title}
      </a>
      <Text> Author: {book.author}</Text>
      </Box>
 

    </Flex>
    </ListItem>
  
  )
})}
</OrderedList>

</Box>



</Box>
   
    </Container>
    </Box>
 
  )
}

export default Resources
