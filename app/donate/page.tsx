'use client'
import { Heading, Text, Box } from '@chakra-ui/react'

const Donate = () => {
  return (
    <Box p={{base: 4, md: 8, lg: 16 }} textAlign={'center'} >
    <Heading>DONATE</Heading>
    <Text>
      Our society is small and has limited resources. As such, we welcome all forms of help from you. This help can be through the following:
      1. Publicity & Networking
       - If you can give us access to platforms and link us with people who can help us grow our cause. 
      2. Services
       - We are in dire need of 3 specific skillsets
        i. Legal & PR
        ii. Software Developers 
        iii. Marketing and Designers
      3. Money & Equipment Donations
       - All donations we get are channelled towards developing our reach and the cause. 
       - The type of equipment we are looking for ranges from computers, cameras, printers, desks, projectors and any office equipment we can use.
      4. Strategic Suggestions
      - As we grow, we welcome new ideas, suggestions on key areas that we should focus on which can help us attain our goal of a Zimbabwe free of religious dogma
    </Text>
    </Box>
  )
}

export default Donate