import styles from './page.module.css'
import Hero from './Components/Hero'
import InfoSection from './Components/InfoSection'
import ReadMore from './Components/ReadMore'
import Form from './Components/Form'
import PostsLayout from './Components/PostsLayout'



export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
     <InfoSection />
     <Form/>
     <ReadMore />


     {/* <PostsLayout/> */}
<h1 className='text-6xl text-white'>

</h1>
    </main>
  )
}
