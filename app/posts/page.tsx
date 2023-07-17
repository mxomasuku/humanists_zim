import getPostMetaData from "../Components/Interfaces/getPostMetaData"
import PostPreview from "../Components/PostPreview"
import { EmailShareButton, EmailShareCount } from "react-share"



const Posts = () => {

  const postMetaData = getPostMetaData()
const postPreviews = postMetaData.map((post) => (
<PostPreview key={post.slug} {...post }/>))

  
return (<div>
  <div className="lg:m-8">
  <h1 className="text-4xl font-bold text-center">Our Blog: Letters to Humanity</h1>
  </div>
<div className="lg:mx-16">
  <div className="my-24 md:flex md:flex-col-4">
    {postPreviews}
  </div>
  <p className="my-24">Want to contribute something? Fill in this form or email Admin at @humanistszim.co.zw</p>

  <div>
<EmailShareButton shar/>
  </div>

</div>



  </div>)

}

export default Posts

