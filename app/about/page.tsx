import Link from 'next/link'
import Image from 'next/image'

const ourMission = 'To build an independent, self-sustaining, effective and interactive humanist society in Zimbabwe.'

const AboutPage = () => {
  return (
    <div className={'p-4 lg:px-64 mt-32'}>

      <h1 className='text-6xl font-bold text-white bg-gradient-to-r from-pink-600 to-yellow-400 py-10 rounded-lg'>Humanists Zimbabwe</h1>
      <div className={'mb-16'}>
        <h2 className={'pb-4 mt-8 text-4xl bg-gradient-to-r from-pink-600 to-yellow-400 text-transparent bg-clip-text inline-block'}>Our Mission</h2>
        <p className='text-2xl'>{ourMission}</p>
      </div>
      <div className={'mb-16'} >
<div>
  <h2 className={' my-8 font-bold text-2xl md:text-3xl'}>About us</h2>
    <p>Humanists Zimbabwe is a representative of the humanist movement in Zimbabwe and a member of the <span className="font-bold bg-gradient-to-r from-pink-600 to-yellow-400 text-transparent bg-clip-text inline-block"><a href="https://humanists.international/about/our-members/explore-our-members/?civiwp=CiviCRM&q=civicrm/profile/map&map=1&gid=19&reset=1" target='_blank'>global humanist movement</a></span> represented by <span className="font-bold bg-gradient-to-r from-pink-600 to-yellow-400 text-transparent bg-clip-text inline-block"><a href='https://humanists.international/' target='blank'>Humanists International</a></span> since 2022. We strive to build a society that is founded upon freethought, rational thinking, ethics and tolerance. 
We are humanists, which means at the core of our work is the realisation that this is the one life we get and it is our responsibility to make the most out of it, not only for ourselves but for the future of humanity.
</p>
</div>

<div>
<h2 className={' my-8 font-bold text-2xl md:text-3xl'}>Our History</h2>
<p className='mt-8'>
Humanists Zimbabwe was founded in 2023 by the merger of two secular organizations: Zimbabwean Atheists, an online community of atheists working to raise awareness of atheism in Zimbabwe since 2014, and PICH (Project for Integrating Cultures in Humanism), a platform for secular humanists and non-religious people to create content that spreads awareness of humanism and develops humanist thought from native knowledge systems, founded in 2019.
</p>
<p className='mt-8'>
In 2022, PICH became a member of Humanists International's global humanist network and was awarded a grant to create a Secular digital media hub, a necessary move given the stigma and censorship secularist ideas faced in mainstream media.
</p>

<p className='mt-8'>Today, Humanists Zimbabwe is a symbol and successor of the collective resilience of the non-religious movement in Zimbabwe, aimed at creating a self-sustaining and effective network for a more humane and rational society.</p>
</div>


<h2 className={' my-8 font-bold text-2xl md:text-3xl'}>About us</h2>

        <div className='text-start'>
     
      <p className='fold-semibold'>Humanists Zimbabwe adopted a common system of objectives used by the Global Humanist Organization Network:</p>
      <ul>
        <li>•	Create awareness</li>
        <li>•	Fight for Acceptance</li>
        <li>•	Campaign for secularism</li>
        <li>•	Promote a life stance</li>
      </ul>
      <br/>
      <p className='mt-8'>
      Our work goes beyond activism. We are concerned with the general well-being of our community. We have an open-door podcast development program, meant for building awareness of the humanist life stance and advocacy for living an ethical life.
      </p>
<p className='mt-8'>
With this program, we understand that humanism is still in its infancy in Zimbabwe, so we are collaborating with different youth organisations and community leaders to promote and preserve values which embody our value system as humanists.
</p>

{/* <Image
src={'/StaticResources/IMG_5404.jpg'}
alt={'decorative image'}
width={480}
height={240}/> */}
<p className='mt-8'>
So far, we have one running podcast show (Humanist Hubris) and a project with Amazone Fitness Centre as part of our Young Humanists Zimbabwe campaign in solidarity with the local anti-drug campaign.
</p>
     
        </div>

     
      </div>
      <div>
        <Link href={'/about/yhz'}>
        <h2 className={'text-3xl font-bold text-white px-2 bg-gradient-to-r from-pink-600 to-yellow-400 my-4 py-10 lg:text-center lg:mx-32 lg:mx-auto rounded-lg'}>Young Humanists Zimbabwe</h2>
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