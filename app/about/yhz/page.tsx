import Image from "next/image"
const about = () => {
  return (
    <>
    <div className="text-center mt-36 md:mx-24 ">
        <h1 className='text-4xl font-bold text-white bg-gradient-to-r from-pink-600  to-yellow-400 my-4 py-10 lg:text-center lg:mx-32 rounded-lg'>Young Humanists Zimbabwe</h1>
        <h3 className="font-semibold text-gray-800 text-md">Humanism offers the youth an exciting chance to connect and experience the vibrancy of their lives and lead more meaningful lives</h3>
    </div>

<a href="https://docs.google.com/forms/d/e/1FAIpQLScRiGLg1T6SSSlDb8R-uB00Gg6SiBGy-ni0UDKUYikl66vvFw/viewform?usp=sf_link" target="_blank" className="text-center"><button type={'submit'} className="rounded-md mx-2 mb-4 py-2 px-8 text-white rounded-md bg-gradient-to-r from-pink-600 to-yellow-400 mt-4 hover:bg-black ">Sign Up</button></a>
  
    <div className={'text-center'}>
    <Image
    src={'/StaticResources/yhzelement.jpg'}
    width={640}
    height={480}
    alt={'infographic'}
    className='mx-auto block'/>
    </div>

    </>
  )
}

export default about