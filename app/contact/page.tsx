'use client'
import { Box, Heading } from "@chakra-ui/react"
import Image from "next/image"


const Contact = () => {
  return (
    <Box p={{base: 4, md: 8, lg: 16 }} textAlign={'center'} >

    <Heading as={'h4'}>Email Us: hello@humanists.co.zw</Heading>
    <p><a href="mailto:hello@humanists.co.zw">Send email</a></p>
    </Box>
  )
}

export default Contact
