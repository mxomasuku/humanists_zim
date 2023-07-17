import getPostMetaData from "../Components/Interfaces/getPostMetaData"
import FeatureCard from "./FeatureCard"


const PostsLayout = () => {

  const postMetaData = getPostMetaData()
  const featureCard = postMetaData.map((post) => (
  <FeatureCard key={post.slug} {...post }/>))
  
    
  return (
    <div className="grid grid-cols-3">
      {featureCard}
    </div>
  )
}

export default PostsLayout
