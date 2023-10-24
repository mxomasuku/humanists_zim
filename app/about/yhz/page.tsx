import Image from "next/image"
const about = () => {
  return (
    <>
    <div className="text-center mt-36 ">
        <h1 className='text-4xl font-bold text-white bg-gradient-to-r from-pink-600  to-yellow-400 my-4 py-10 lg:text-center lg:mx-32 rounded-lg'>Young Humanists Zimbabwe</h1>
        <h3>Humanism offers the youth an exciting chance to connect and experience the vibrancy of their lives and lead more meaningful lives</h3>
    </div>
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