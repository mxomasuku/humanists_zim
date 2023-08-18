'use client'
import './globals.css'
import { Providers } from "./providers";
import Header from './Components/Header';
import Footer from './Components/Footer';
import { ChakraProvider, Flex, extendTheme } from '@chakra-ui/react';
import GoogleAnalytics from './Components/GoogleAnalytics';
import CookieBanner from './Components/CookieBanner';


// export const metadata = {
//   title: 'Humanists Zimbabwe',
//   description: 'Humanists Zimbabwe Association',
//   keywords: 'humanism, humanist, humanists, atheism, blasphemy, Zimbabwe, Secularism, Secular, Africa, atheist, apatheist, agnostic, freethinker, godless, science, rationality'
// }

// extend theme
const colors = {
  brand: {
    900: '#DC214C'
  },
  buttonPrimary: {
    900: '#E3C90B'
  }
}
const theme = extendTheme(
{colors}
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID='G-G5EBGL9D5X'/>
      <body className='body'>
        
        <Providers>
          <ChakraProvider theme={theme}>
          <Flex minHeight={'100vh'} flexDir={'column'}>
        
        <Header/>
          {children}
       <CookieBanner/>
       <Footer/>
        </Flex>
          </ChakraProvider>
      
       
        </Providers>
      </body>
    </html>
  );
}


