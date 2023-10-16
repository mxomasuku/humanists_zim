import Link from "next/link"
import { FaBook, FaPeopleArrows, FaQuestion } from "react-icons/fa"


const items = [{
  'id': 0,
  'title': "Frequently Asked Questions (FAQ)",
  'url': '/about/faq',
  'coverIcon': <FaQuestion/>
},
{
  'id': 1,
  'title': "Humanist Resources",
  'url': "/resources",
  'coverIcon': <FaBook/>
},
{
  'id': 2,
  'title': "Online Communities",
  'url': "/network",
  'coverIcon': <FaPeopleArrows/>
}]

const ReadMore = () => {
  return (
    <div>

<h3 className="text-3xl font-bold text-center 'pb-4 mt-8 text-4xl bg-gradient-to-r from-pink-600 to-yellow-400 text-transparent bg-clip-text inline-block'">Curated Humanist Resources For You</h3>
  <div className="mb-8">
    <div className="flex justify-around gap-4 mt-8 flex-wrap ">
      {/* <h3 className="text-lg text-center">These might interest you</h3>
        <div className='mb={8}'> */}
          <div className="flex justify-around flex-wrap mt-8 gap-4 ">
              {items.map((item) =>{ return (
                <Link key={item.id} href={item.url}  >
                <div className="flex w-96 p-4 bg-gray-400 border-4 rounded-xl">
                  <button aria-label={'button for ' + `${item.title}` + 'section'} className="bg-gradient-to-r from-pink-600 to-yellow-400 text-white text-2xl p-4 rounded-xl">{item.coverIcon}</button>

                
                 
                  <h3 className="text-lg font-bold text-center ml-1">{item.title}</h3>
                </div>
                </Link>
              )
          })}
        </div>
    </div>

  </div>
{/* </div> */}
</div>
  )
}

export default ReadMore
