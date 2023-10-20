import Image from "next/image"
import Link from "next/link"


const sectionData = [
  {"id": 0,
  'url': "/about/yhz",
"title" : "Young Humanists Zimbabwe",
"image": "/StaticResources/yhz.png",
"info": "Our section dedicated to Youths and the future of Humanism"
},
// {"id": 1,
// "title" : "Blog",
// 'url': "/posts",
// "image": "/StaticResources/blog.png",
// "info": "Local and international articles about Humanism"
// },

{"id": 1,
"title" : "Our Podcast",
'url': "/podcast",
"image": "/StaticResources/HumanistHubris.png",
"info": "Our Podcast"
},
{"id": 2,
'url': "/support",
"title" : "Support Us",
"image": "/StaticResources/Support.jpg",
"info": "Your support keep us moving. See how you can help and support our cause."
},
{"id": 3,
'url': "/network",
"title" : "Online Communities",
"image": "/StaticResources/world-humanist-day.webp",
"info": "Engage and interact with non-religious people local and around the world"

}
]
const aboutUs = "We are a secular humanist community that values human welfare, freedom, equality, and ethical living. We oppose bigotry, hate speech, and all forms of oppression. We aim to promote secularism and build a freethinking, progressive Zimbabwe guided by science and human empathy. We believe that our society is better when people are free to live their lives without religious limitations on their understanding of the human condition and public policy discourse."
const ourMission = 'Our mission is to build an effective and interactive humanist society in Zimbabwe.'

const InfoSection = () => {
  return (
    <>
        <div className="mt-10 p-4 md:px-8 lg:px-16" >
        <h3 className="text-3xl text-pink-600">WHO ARE WE?</h3>
            <p className="text-3xl font-bold">{ourMission}</p> 
            <p>{aboutUs}</p>
        </div>




  <div className="grid grid-cols-1 md:grid-cols- lg:grid-cols-4 justify-center my-10 mx-2 gap-4">
{sectionData.map((item) =>{ return (
           <Link href={item.url} key={item.id}>
            <div className="mx-auto w-64 border-b border-gradient-to-r from-pink-600 via-orange-500 to-yellow-400 hover:shadow-lg mb-4">

                <h3 className="md p-2 text-white font-bold rounded-t-xl bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-400">{item.title}</h3>

              <div className="">
                <div className="h-40">
             <img src={item.image} className="h-full w-full"/>

                </div>
          
              </div>
              <div className="text-gray-600 text-sm h-12 mx-2 ">
                {item.info}
              </div>
            </div>
          </Link>
        )
})}
</div>
    </>
 
  )
}

export default InfoSection
