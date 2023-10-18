import { FaFacebook, FaMastodon, FaReddit, FaWhatsapp, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Form from '../Components/Form'
import NetworkGrid from '../Components/NetworkGrid'
import Image from 'next/image'
// import Image from 'next/image'


//Global data



//App starts here
const Network = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 my-12'>
      <div className='py-8'>
         <h1 className='text-4xl px-2 font-bold text-white bg-gradient-to-r from-pink-600 to-yellow-400 my-4 py-10 lg:text-center lg:mx-32 lg:mx-auto rounded-lg'>Join the Growing Network!</h1>

    <h4 className='text-2xl px-8'>Millions of freethinkers around the world and discover a new way of thinking full of endless possibilities in this one life we have.</h4>
      </div>
   
<div className='py-8'>
<Image
className='mx-auto'
alt='promo banner'
src={'/StaticResources/hero.png'}
width={'720'}
height={'1080'}
/>
</div>

<Form/>
<NetworkGrid/>
<div className='center'>
  <h4 className='text-md text-center'>Share our page in your community</h4>
  <div className='flex justify-center mt-4 gap-2'>
  <FaMastodon/>
  <FaFacebook/>
  <FaWhatsapp/>
  <FaTwitter/>
  <FaReddit/>
 <FaLinkedin/>
  </div>

</div>


    </div>
  )
}

export default Network