import './globals.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
// import GoogleAnalytics from './Components/GoogleAnalytics';
// import CookieBanner from './Components/CookieBanner';
export const metadata = {
  title: 'Humanists Zimbabwe',
  description: 'Humanists Zimbabwe Association',
  keywords: 'humanism, humanist, humanists, atheism, blasphemy, Zimbabwe, Secularism, Secular, Africa, atheist, apatheist, agnostic, freethinker, godless, science, rationality'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <GoogleAnalytics GA_MEASUREMENT_ID='G-G5EBGL9D5X'/> */}
      <body className='body'>

          <div className='flex flex-col h-full'>

        <Header/>
          {children}
       <Footer/>
        </div>
      </body>
    </html>
  );
}


