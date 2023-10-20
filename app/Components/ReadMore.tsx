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
    <div className="bg-pink-600 py-16 mb-8">

<div className="bg-white rounded-3xl mx-2 py-4 lg:mx-48 lg:py-8">
<h3 className=" text-3xl font-bold text-center pb-4 text-4xl bg-gradient-to-r from-pink-600 to-yellow-400 text-transparent bg-clip-text inline-block'">Curated Humanist Resources For You</h3>
</div>

  <div className="mb-8">
    <div className="flex justify-around gap-4 mt-8 flex-wrap px-2 ">
      {/* <h3 className="text-lg text-center">These might interest you</h3>
        <div className='mb={8}'> */}
          <div className="flex justify-around flex-wrap mt-8 gap-4 ">
              {items.map((item) =>{ return (
                <Link key={item.id} href={item.url}  >
                <div className="flex w-80 md:w-96 p-4 border-4 rounded-3xl hover:bg-gray-400">
                  <button aria-label={'button for ' + `${item.title}` + 'section'} className="bg-gradient-to-r from-pink-600 to-yellow-400 text-white text-2xl p-4 rounded-xl">{item.coverIcon}</button>

                  <h3 className="text-xl font-bold text-center ml-1 text-white hover:text-gray-900">{item.title}</h3>
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
