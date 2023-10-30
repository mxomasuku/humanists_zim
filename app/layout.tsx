import './globals.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Metadata } from 'next';
import GoogleAnalytics from './Components/GoogleAnalytics';
import CookieBanner from './Components/CookieBanner';
export const metadata: Metadata = {
  title: 'Humanists Zimbabwe',
  description: 'Humanists Zimbabwe ',
  keywords: 'humanism, humanist, humanists, atheism, blasphemy, Zimbabwe, Secularism, Secular, Africa, atheist, apatheist, agnostic, freethinker, godless, science, rationality',
icons: {
  icon: "/Logos/favicon.ico", 
  apple: "/Logos/apple-touch-icon.png"
}
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID='G-G5EBGL9D5X'/>
      <body className='body h-screen'>

          <div className='flex flex-col'>

        <Header/>
          {children}
       <Footer/>
        </div>
        <CookieBanner/>
      </body>
    </html>
  );
}


