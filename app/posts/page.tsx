import getPostMetaData from "../Components/Interfaces/getPostMetaData"
import FeatureCard from "../Components/FeatureCard"



const Posts = () => {

  const postMetaData = getPostMetaData()
const featureCard = postMetaData.map((post) => (
<FeatureCard key={post.slug} {...post }/>))

  
return (<div className="mx-4 lg:mx-36 mt-32">
  <div className="lg:my-8">
  <h1 className='text-4xl mt-4  font-bold text-white bg-gradient-to-r from-pink-600 to-yellow-400 py-10 rounded-lg text-center'>Our Blog</h1>
  </div>
<div className="">
  <div className="my-24 md:grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
    {featureCard}
  </div>
  <p className="my-24">Want to contribute something? Fill in this <span className="text-pink-600"> <a href="">form</a></span> or email us at <span className="text-pink-600"><a href="mailto:admin@humanistszim.co.zw">admin@humanistszim.co.zw</a></span></p>

  <div>
{/* Share items go here */}
  </div>

</div>



  </div>)

}

export default Posts

