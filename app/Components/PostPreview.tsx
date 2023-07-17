import Link from 'next/link'
import { PostMetaData } from './Interfaces/PostMetaData'



const PostPreview = (props: PostMetaData) => {
  return (

    (<Link href={`/posts/${props.slug}`}>

    <div className="grid mt-4 grid-cols-4 border border-gray-200 rounded-2 w-250">
    <div className=" h-24 col-span-1 py-2 lg:h-32">
        <img
          src={props.coverImage}
          className=" w-full h-full "
          alt={`portrait of ${props.coverImage}`}
        />
      </div>
      <div className="col-span-2 px-2 ">
        <h3 className="text-sm font-bold text-gray-700 lg:text-md xl:text-md overflow-hidden">
          {props.title}
        </h3>
        <p className="mt-4 text-xs text-right text-gray-400 lg:text-xs lg:mt-6 xl:text-sm">
          by {props.author.name}
        </p>
      </div>

  
    </div>

  </Link>)
  )
}

export default PostPreview
