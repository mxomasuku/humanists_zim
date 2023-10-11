import Image from "next/image"

const podcastStores = [
  {'Store' :  'Google Podcasts',
  'link': 'https://podcasts.google.com/search/Humanist%20Hubris',
  'icon': '/Podcast/googlePodcasts.png'
  },
  {'Store' :  'Apple Podcasts',
  'link': 'https://podcasts.apple.com/us/podcast/the-humanist-hubris-podcast/id1704132813',
  'icon': '/Podcast/applePodcasts.png'
  },
  
  // {'Store' :  'iHeartRadio',
  // 'link': 'https://www.iheart.com/podcast/338-the-humanist-hubris-podcas-121735539/?utm_medium=email&utm_campaign=PB-sendgrid-emails&utm_source=sendgrid',
  // 'icon': '/Podcast/iheartradio.png'
  // },
  {'Store' :  'Amazon Music',
  'link': 'https://music.amazon.com/podcasts/23aa24b8-a178-4e34-acc2-87e80b55ca27',
  'icon': '/Podcast/amazonmusic.png'
  },
 
  // {'Store' :  'Player FM',
  // 'link': 'https://player.fm/series/3505272?utm_source=sendgrid&utm_medium=email&utm_campaign=PB-sendgrid-emails',
  // 'icon': '/Podcast/playerFm.png'
  // },
  // {'Store' :  'Spotify',
  // 'link': 'https://podcasters.spotify.com/pod/show/mxolisi-masuku/episodes/Discussion-Is-Zimbabwe-a-Christian-Nation-e28gppn',
  // 'icon': '/Podcast/spotify.png'
  // },
  // {'Store' :  'Podchaser',
  // 'link': 'https://www.podchaser.com/podcasts/the-humanist-hubris-podcast-5452766?utm_source=sendgrid&utm_medium=email&utm_campaign=PB-sendgrid-emails',
  // 'icon': '/Podcast/podchaser.png'
  // },
  {'Store' :  'Tune IN',
  'link': 'https://tunein.com/radio/The-Humanist-Hubris-Podcast-p3853561/',
  'icon': '/Podcast/tunein.png'
  }
]



const page = () => {
  return (

  
    <div className='mx-auto my-16'>
     
<div className="mb-4">
<h3 className="text-3xl">The Humanist Hubris Podcast </h3>
        <p className="text-center text-xs">by Mxolisi B Masuku & Tauya Chinama</p>

</div>
<p className='text-center'>Click <a href="https://humanisthubris.podbean.com/" className="text-blue-900 text-center font-bold">here</a> to visit the podcast homepage on PodBean</p>
      <Image
      src={'/StaticResources/HumanistHubrisLogo.png'}
      width={'250'}
      height={'250'}
      alt="mfmfjjfmfnfnnfnfnfnfn"
      className='mx-auto'
      />


<h4 className='mx-auto text-blue-600 text-md font-bold'>Click any of the links below to open your favourite store</h4>


<div className="flex justify-between mt-4 align-center">
      {podcastStores.map((podstore) => {
        return(
<div key={podstore.Store}><a href={podstore.link} target="blank">
<div className="h-8 md:h-12 lg:h-16 w-8 md:w-12 lg:w-16"> 
  <img src={podstore.icon} alt={'podcast store icon'}/>
</div>
 
  </a></div>

        )
      })}

</div>




{/*

       <iframe
  title="The Humanist Hubris Podcast"
  className="w-1000, h-100, scrolling-no"
  data-name="pb-iframe-player"
  src="https://www.podbean.com/player-v2/?i=29cqf-1027f26-pbblog-playlist&share=1&download=1&rtl=0&fonts=Arial&skin=1&font-color=auto&logo_link=episode_page&order=episodic&limit=10&filter=all&ss=a713390a017602015775e868a2cf26b0&btn-skin=ff6d00&size=315"
  loading="lazy"
/> */}

{/* <iframe src="https://tunein.com/embed/player/p3853561/"
// style={{"width" :"100%"} {height:100px;" scrolling="no" frameborder="no"}}
className="w-640, h-100, scrolling-no">

</iframe> */}
    </div>
  )
}

export default page
