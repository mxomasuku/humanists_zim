'use client'
import {Box, SimpleGrid, Text, Heading, Flex} from '@chakra-ui/react'
import Image from 'next/image'


const communities = [
    {
      'name': 'Atheist Republic',
      'description': 'The world’s largest atheist community',
      'service': 'Debate, Forum, Resources, News',
      'url': 'https://www.atheistrepublic.com/',
      'image': '/StaticResources/atheistRepublic.jpg'
    },
    {
      'name': 'Reddit Atheism',
      'description': 'The world’s largest and most active atheist forum',
      'service': '2.8 million users',
      'url': 'https://www.reddit.com/r/atheism/',
      'image': '/StaticResources/atheistRepublic.jpg'
    },
    {
      'name': 'Agnostic, Atheist and Non-Religious',
      'description': 'Non Religious people on Facebook',
      'service': '81k members',
      'url':  'https://www.facebook.com/groups/OAANR/',
      'image': '/StaticResources/atheistRepublic.jpg'
    },
    {
      'name': 'Forum : Atheist Republic',
      'description': 'Atheist Republic Forum',
      'service': 'est 2012. Book Club, Chat, Debate',
      'url':  'https://forum.atheistrepublic.com/',
      'image': '/StaticResources/atheistRepublic.jpg'
    }
  
  ]
  const magazines = [
    {
      'title': 'African Humanist',
      'image': '/StaticResources/afrohumie.png',
      'description': 'The Journal for United African Humanists',
      'scope': 'Members from over 12 countries in Africa',
      'url': 'https://freethinker.co.uk/'
      
    },
    {
      'title': 'Humanistically Speaking',
      'image':'/StaticResources/freethinker.png',
      'description': 'Online Magazine Speaking out for non-religious people',
      'scope': 'Based in the UK, global influence',
      'url': '//www.humanisticallyspeaking.org/'
    },
    {
      'title': 'Freethinker',
      'image': '/StaticResources/humanistspeaking.webp',
      'description': 'An exciting platform for the curious. Est 1881',
      'scope': 'Featuring authors from all over the world',
      'url': 'https://freethinker.co.uk/'
    },
    
  ]
  const podcasts = [
    {
      'title': 'Genetically Modified Skeptic',
      'url': 'https://www.youtube.com/c/geneticallymodifiedskeptic',
      'description': 'It will set you up to question everything and hold your doubts as a useful virtue',
      'image': '/StaticResources/gmskeptic.jpg'
    },
    {
      'title': 'Rational Black Thought',
      'url': 'https://open.spotify.com/show/0FeCfgT7quT60yhsEsTmNd',
      'description': 'A discussion of all topics as seen through the eyes of a Black Atheist, Skeptic, Humanist, Existentialist',
      'image': '/StaticResources/rbt.jpg'
    },
    {
      'title': 'Hagtivist Podcast',
      'url': 'https://podcasters.spotify.com/pod/show/hagtivist-podcast',
      'description': 'Conversations between Humanist allies across Ghana',
      'image': '/StaticResources/hagtivist.jpg'
  
    },
    {
      'title': 'The Humanist Agenda',
      'url': 'https://www.humanistagenda.com/',
      'description': 'A humanism podcast that is recorded by humanists (non-believers/atheists) in Canada.',
      'image': '/StaticResources/humanistAgenda.png'
    },
    {
      'title': 'New Humanists',
      'url': 'https://www.humanistagenda.com/',
      'description': "For the establishment of modern global culture of humanism",
      'image': "/StaticResources/newhumies.jpg",
     
    },
    {
      'title': 'Dark Matter 2525',
      'url': 'https://www.youtube.com/user/darkmatter2525',
      'description': "This is a pure comedy cartoon roasting religion",
      'image': "/StaticResources/darkmatter2525.jpg"
    }
    
  ]

const NetworkGrid = () => {
  return (
    <SimpleGrid columns={{ base: 1, md:2, lg:4}} gridGap={4} height={{lg: 650}} mb={12} >
    <Box bgColor={'gray.400'} py={4}>
      <Heading as={'h3'} size={'lg'} borderBottom={2} borderBottomColor={'brand.900'}>Local Communities</Heading>
    - WhatsApp
    - Zimbabwean Atheists and Agnosticism
    </Box>
    
    <Box p={4}>
      <Heading as={'h3'} size={'lg'}>International Communities</Heading>
      {communities.map((community)=>{
      return(
    <a href={community.url}
    target='blank'>
      <Heading as={'h4'} size={'sm'}>{community.name}</Heading>
      <Flex>
        <Image 
        alt={'logo for' + `${community.name}`}
        src={community.image}
        width={75}
        height={75}/>
        <Flex flexDir={'column'} px={4}>
          <Text fontSize={'xs'}>{community.description}</Text>
          <Text fontSize={'xs'}>{community.service}</Text>
        
        </Flex>
      </Flex>
    </a>
      )
    })}
    
    </Box>
    
    <Box bgColor={'brand.900'} textColor={'black'} p={4}>
      <Heading as={'h3'} size={'lg'}>Magazines and Blogs</Heading>
      {magazines.map((magazine)=>{
      return(
    <a href={magazine.url}
    target='blank'>
      <Heading as={'h4'} size={'sm'}>{magazine.title} </Heading>
      <Flex flexDir={'column'}>
        <Image 
        alt={'logo for' + `${magazine.title}`}
        src={magazine.image}
        width={300}
        height={100}/>
        <Flex flexDir={'column'} px={4}>
        <Text fontSize={'xs'}>{magazine.description}</Text>
          <Text fontSize={'xs'} pb={4}>{magazine.scope}</Text>
        </Flex>
      </Flex>
    </a>
      )
    })}
    </Box>
    
    
    <Box py={4}>
      <Heading as={'h3'} size={'lg'}>Podcasts and YouTube</Heading>
  
      {podcasts.map((podcast) => {
        return(
          <a href={podcast.url}
          target='blank'>
            <Box my={4}>
            <Heading as={'h4'} size={'sm'}>{podcast.title}</Heading>
            <Flex>
              <Box
              borderRadius={0}
              overflow={'hidden'}>
              
              <Image 
              alt={'logo for' + `${podcast.title}`}
              src={podcast.image}
              width={60}
              height={60}
              
              
      />
              </Box>
             
              <Box width={300} px={4}>
                <Text fontSize={'xs'}>{podcast.description}</Text>
               
              
              </Box>
            </Flex>
            </Box>
         
          </a>
    
        )
      })}
    </Box>
    
    </SimpleGrid>
  )
}

export default NetworkGrid
