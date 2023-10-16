import Link from 'next/link'
import Image from 'next/image'

const ourMission = 'To build an independent, self-sustaining, effective and interactive humanist society in Zimbabwe.'

const AboutPage = () => {
  return (
    <div className={'text-center p-4 lg:px-36'}>

      <h1 className='text-6xl font-bold text-white bg-gradient-to-r from-pink-600 to-yellow-400 py-10 rounded-lg'>Humanists Zimbabwe</h1>
      <div className={'mb-16'}>
        <h2 className={'pb-4 mt-8 text-4xl bg-gradient-to-r from-pink-600 to-yellow-400 text-transparent bg-clip-text inline-block'}>Our Mission</h2>
        <p className='text-2xl'>{ourMission}</p>
      </div>
      <div className={'mb-16'} >
        <h2 className={'pb-4 mt-8 text-4xl bg-gradient-to-r from-pink-600 to-yellow-400 text-transparent bg-clip-text inline-block'}>What we do</h2>

        <div className='text-start'>
        <p className='font-bold'> In 2023, Humanists Zimbabwe, formerly PICH received a grant from Humanists International to launch a media hub called the Project for Integrating Cultures in Humanism (PICH). </p>
      <p>The goal of PICH was to provide a platform for secular humanists and non-religious people to create content that spreads awareness of humanism and develops humanist thought from native knowledge systems.</p>
<br/>
      <p className='fold-semibold'>Humanists Zimbabwe adopted a common system of objectives used by the Global Humanist Organization Network:</p>
      <ul>
        <li>•	Create awareness</li>
        <li>•	Fight for Acceptance</li>
        <li>•	Campaign for secularism</li>
        <li>•	Promote a life stance</li>
      </ul>
      <br/>
      <p>
      With the grant, Humanists Zimbabwe is building an open-door studio to find as many interested, talented, and willing humanists and non-religious people as possible to help them get their message out there into the world: "Let's all be humanists. This is our one life and we are better off if we live it freely to the max." So far, we have one running podcast show (Humanist Hubris), and many more to come.
      </p>

      <p>In the future, Humanists Zimbabwe will integrate all these ideas into one voice to create a portfolio of varied products. They aim to be a well-represented, diversified organization of humanists working together as one to make Zimbabwe and the world a better place.</p>
        </div>

     
      </div>
      <div>
        <Link href={'/about/yhz'}>
        <h2 className={'text-3xl font-bold text-white bg-gradient-to-r from-pink-600 to-yellow-400 my-4 py-10 lg:text-center lg:mx-32 lg:mx-auto rounded-lg'}>Young Humanists Zimbabwe</h2>
          <div className='items-center'>
          <Image
          alt='Young Humanists Zim wallpaper'
          src={'/StaticResources/yhz.png'}
          width={700}
          height={400}
          />
          </div>
          </Link>
      </div>
 
      

    </div>
  )
}

export default AboutPage