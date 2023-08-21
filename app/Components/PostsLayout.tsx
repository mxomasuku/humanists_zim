import getPostMetaData from "../Components/Interfaces/getPostMetaData"
import PostPreview from "./PostPreview"



const PostsLayout = () => {

  const postMetaData = getPostMetaData()
  const postPreviews = postMetaData.map((post) => (
  <PostPreview key={post.slug} {...post }/>))
  
    
  return (

    <div className="mx-8 mb-8">
      <p className="text-2xl bg-black inline-block p-4 mb-4">From our Blog</p>
    <div className="grid lg:grid-cols-3 lg:mx-16 ">
      {postPreviews}
    </div>
    </div>
 
  )
}

export default PostsLayout
