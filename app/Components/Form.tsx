'use client'

import { FormControl, Box, Text,  Input, Button, Heading} from "@chakra-ui/react"
import Image from "next/image"

 {/* Use formik! */}
const Form = () => {
  return (
   
       
 
            <Box textAlign={'center'} bg={'black'} textColor={'white'} px={8} py={24} my={24}>
              <Box textAlign={'center'}>
                <div className="mx-auto">
                <Image
              alt="logo"
              src={'/Logos/MainIcon.svg'}
              width={75}
              height={75}/>
                </div>
             
              </Box>
             
                    <Heading as={'h3'} size={'md'} textAlign={'center'}>Subscribe to our newsletter</Heading>
                    <Text textAlign={'center'}>Get monthly updates about Humanism to your inbox</Text>
                <FormControl isRequired>
                    <Input type={'email'} placeholder={'enter your email'} width={{md: '50vw'}}/>
                </FormControl>
                <Button type={'submit'} mt={4} textColor={'black'} bgColor={'buttonPrimary.900'} >Subscribe</Button>
            </Box>



  )
}

export default Form