import getPostMetaData from "../Components/Interfaces/getPostMetaData"
import FeatureCard from "../Components/FeatureCard"



const Posts = () => {

  const postMetaData = getPostMetaData()
const featureCard = postMetaData.map((post) => (
<FeatureCard key={post.slug} {...post }/>))

  
return (<div>
  <div className="lg:m-8">
  <h1 className="text-4xl font-bold text-center">Our Blog: Letters to Humanity</h1>
  </div>
<div className="mx-8">
  <div className="my-24 lg:grid lg:grid-cols-3">
    {featureCard}
  </div>
  <p className="my-24">Want to contribute something? Fill in this form or email Admin at admin@humanistszim.co.zw</p>

  <div>
Share items go here
  </div>

</div>



  </div>)

}

export default Posts

