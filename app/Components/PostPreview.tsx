import Link from 'next/link'
import { PostMetaData } from './Interfaces/PostMetaData'



const PostPreview = (props: PostMetaData) => {
  return (

    (<Link href={`/posts/${props.slug}`}>

    <div className="grid mt-4 grid-cols-4 px-2 w-200 mx-2">
    <div className=" h-24 col-span-1 py-2  mx-2">
        <img
          src={props.coverImage}
          className=" w-full h-full "
          alt={`portrait of ${props.coverImage}`}
        />
      </div>
      <div className="col-span-2 px-2 pt-2 ">
        <h3 className="text-xs font-bold text-gray-700 lg:text-md xl:text-md overflow-hidden">
          {props.title}
        </h3>
        {/* <p className="mt-4 text-xs text-right text-gray-400 lg:text-xs lg:mt-6 xl:text-sm">
          by {props.author.name}
        </p> */}
      </div>

  
    </div>

  </Link>)
  )
}

export default PostPreview
