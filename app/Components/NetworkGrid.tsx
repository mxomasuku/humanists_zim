import Image from 'next/image'


const communities = [
    {
      'name': 'Atheist Republic',
      'description': 'The world’s largest atheist community',
      'service': 'Debate, Forum, Resources, News',
      'url': 'https://www.atheistrepublic.com/',
      'image': '/StaticResources/atheistRepublic.jpg'
    },
    {
      'name': 'Reddit Atheism',
      'description': 'The world’s largest and most active atheist forum',
      'service': '2.8 million users',
      'url': 'https://www.reddit.com/r/atheism/',
      'image': '/StaticResources/reddit-logo.png'
    },
    {
      'name': 'Agnostic, Atheist and Non-Religious',
      'description': 'Non Religious people on Facebook',
      'service': '81k members',
      'url':  'https://www.facebook.com/groups/OAANR/',
      'image': '/StaticResources/facebook-logo.png'
    },
    {
      'name': 'Forum : Atheist Republic',
      'description': 'Atheist Republic Forum',
      'service': 'est 2012. Book Club, Chat, Debate',
      'url':  'https://forum.atheistrepublic.com/',
      'image': '/StaticResources/atheistRepublic.jpg'
    }
  
  ]
  const magazines = [
    {
      'title': 'African Humanist',
      'image': '/StaticResources/afrohumie.png',
      'description': 'The Journal for United African Humanists',
      'scope': 'Members from over 12 countries in Africa',
      'url': 'https://freethinker.co.uk/'
      
    },
    {
      'title': 'Humanistically Speaking',
      'image':'/StaticResources/humanistspeaking.webp',
      'description': 'Online Magazine Speaking out for non-religious people',
      'scope': 'Based in the UK, global influence',
      'url': '//www.humanisticallyspeaking.org/'
    },
    {
      'title': 'Freethinker',
      'image': '/StaticResources/freethinker.png',
      'description': 'An exciting platform for the curious. Est 1881',
      'scope': 'Featuring authors from all over the world',
      'url': 'https://freethinker.co.uk/'
    },
    
  ]
  const podcasts = [
    {
      'title': 'Genetically Modified Skeptic',
      'url': 'https://www.youtube.com/c/geneticallymodifiedskeptic',
      'description': 'It will set you up to question everything and hold your doubts as a useful virtue',
      'image': '/StaticResources/gmskeptic.jpg'
    },
    {
      'title': 'Rational Black Thought',
      'url': 'https://open.spotify.com/show/0FeCfgT7quT60yhsEsTmNd',
      'description': 'A discussion of all topics as seen through the eyes of a Black Atheist, Skeptic, Humanist, Existentialist',
      'image': '/StaticResources/rbt.jpg'
    },
    {
      'title': 'Hagtivist Podcast',
      'url': 'https://podcasters.spotify.com/pod/show/hagtivist-podcast',
      'description': 'Conversations between Humanist allies across Ghana',
      'image': '/StaticResources/hagtivist.jpg'
  
    },
    {
      'title': 'The Humanist Agenda',
      'url': 'https://www.humanistagenda.com/',
      'description': 'A humanism podcast that is recorded by humanists (non-believers/atheists) in Canada.',
      'image': '/StaticResources/humanistAgenda.png'
    },
    {
      'title': 'New Humanists',
      'url': 'https://www.humanistagenda.com/',
      'description': "For the establishment of modern global culture of humanism",
      'image': "/StaticResources/newhumies.jpg",
     
    },
    {
      'title': 'Dark Matter 2525',
      'url': 'https://www.youtube.com/user/darkmatter2525',
      'description': "This is a pure comedy cartoon roasting religion",
      'image': "/StaticResources/darkmatter2525.jpg"
    }
    
  ]

  const localCommunities = [
    {
      'name': 'Zimbabwean Atheists',
      'link' : 'https://www.facebook.com/TheZimbabweanAtheistAgnosticismandFreethikers',
      'logo' : '/StaticResources/zimAtheists.jpg',
      'description': 'Zim Atheists Facebook Page. Established 2015'
    },
    {
      'name': 'Humanists & Atheists (WhatsApp Group)',
      'link' : 'https://chat.whatsapp.com/HDhSBgNlHef087QwskqBxk?fbclid=IwAR3tHipL0YzsRDPZQjz3auDq1XtZ04VnTvHbj4F67JvRI--SUNhpxSFB2MY',
      'logo' : '/StaticResources/h-and-a.jpg',
      'description': 'Social Group for Freethinkers: Humanists and Atheists'
    },
    {
      'name': 'Talk2Humanists@5 (WhatsApp Group',
      'link': 'https://chat.whatsapp.com/IwtXulcrVjsFzXQzQJL5w9',
      'logo': '/StaticResources/hsz.jpg',
      'description': 'Contains a diverse membership. It was created to facilitate discussions between humanists and anyone interested in what they do.'
    }

  ]

const NetworkGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12 gap-4 h-124'>
    <div className='bg-gray-400 p-4'>
      <h2 className='text-3xl border-b font-bold text-pink-600 border-gray-pink.600 mb-4'>Local Communities</h2>
    {localCommunities.map((localCommunity)=>{
      return(
        <a href={localCommunity.link}
        key={localCommunity.name}
    
        target='blank'>
          <div className=' mb-4 pb-4 border-b border-white'>
          <h4 className='font-bold'>{localCommunity.name}</h4>
          <div className='flex'>
            <Image 
            alt={'logo for' + `${localCommunity.name}`}
            src={localCommunity.logo}
            width={75}
            height={75}/>
            <div className='flex flex-col px-4'>
              <p className='text-xs' >{localCommunity.description}</p>
            </div>
          </div>
        
          </div>
         
        </a>
      )
    })}
    </div>
    
    <div className='p-4'>
    
      <h2 className='text-3xl border-b font-bold border-pink.600 mb-4'>International Communities</h2>
      {communities.map((community)=>{
      return(
    <a href={community.url}
    key={community.name}
    
    target='blank'>
      <div className=' mb-4 pb-4 border-b border-gray-600'>
      <h4 className=' font-bold'>{community.name}</h4>
      <div className='flex'>
        <Image
        alt={'logo for' + `${community.name}`}
        src={community.image}
        width={75}
        height={75}/>
        <div className='px-4 flex flex-col'>
          <p className='text-xs'>{community.description}</p>
          <p className='text-xs'>{community.service}</p>
        
        </div>
      </div>
  
      </div>
     
    </a>
      )
    })}
    
    </div>
    
    <div className='bg-pink-600 text-black p-4'>
    <h2 className='text-3xl border-b font-bold border-gray-pink.600 mb-4'>Magazines and Blogs</h2>
      {magazines.map((magazine)=>{
      return(
    <a href={magazine.url}
    key={magazine.title}
    target='blank'>
      <div>
      <h4 className='font-bold'>{magazine.title} </h4>
      <div className='flex flex-col border-b border-black'>
        <Image 
        alt={'logo for' + `${magazine.title}`}
        src={magazine.image}
        width={300}
        height={100}/>
        <div className='flex flex-col px-4'>
        <p className='text-xs'>{magazine.description}</p>
          <p className='text-xs pb-4'>{magazine.scope}</p>
        </div>
      </div>
      </div>
     
    </a>
      )
    })}
    </div>
    
    
    <div className='py-4'>
    <h2 className='text-3xl border-b font-bold border-gray-pink.600 mb-2'>Podcasts and YouTube</h2>
  
      {podcasts.map((podcast) => {
        return(
          <a href={podcast.url}
          key={podcast.title}
          target='blank'>
            <div className='py-2'>
            <h4 className='font-bold'>{podcast.title}</h4>
            <div className='flex'>
              <div
              className='overflow-hidden'>
              
              <Image 
              alt={'logo for' + `${podcast.title}`}
              src={podcast.image}
              width={60}
              height={60}
              
              
      />
              </div>
             
              <div className='px-4 w-48'>
                <p className='text-xs'>{podcast.description}</p>
               
              
              </div>
            </div>
            </div>
        
          </a>
    
        )
      })}
    </div>
    
    </div>
  )
}

export default NetworkGrid
