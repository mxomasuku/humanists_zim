const Hero = () => {
  return (
    <>
    <div className='bg-auto bg-hero-pattern h-96 bg-black flex flex-col items-center justify-around bg-image'>
   <div></div>
    {/* bgImage={'/StaticResources/hero.png'} bgSize={'cover'} bgPosition={'top'} h={{base:'60vh',lg:'70vh'}} alignItems={'center'} flexDir={'column'} p={'8'}> */}
    <a href='https://humanisthubris.podbean.com/' target='_blank'><button className=' rounded-md bg-gradient-to-r from-pink-600 to-yellow-400 text-white mt-auto shadow px-6 py-3'>
   View Podcast</button></a>
    
    </div>
    </>
  )
}

export default Hero

