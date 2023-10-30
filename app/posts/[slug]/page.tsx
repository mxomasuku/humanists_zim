import fs from 'fs'
import Markdown from "markdown-to-jsx"
import matter from 'gray-matter'
import getPostMetaData from '@/app/Components/Interfaces/getPostMetaData'

import Image from 'next/image'


const getPostContent = (slug : string) => {
  const folder = "posts/"
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, "utf8")
  const matterResult = matter(content)
  return matterResult
}
export const generateStaticParams = async () => {
  const posts = getPostMetaData()
return posts.map((post) =>({
  slug: post.slug
}))
//  return [{slug: "ethics-can-exist-in-a-world-without-religion-1"}]
}

//check for email

// const emailAvailable = () => {
// if(post.data.author.email)
// }

const PostPage = (props: any) => {
  const slug = props.params.slug
  const post = getPostContent(slug)
  return (
    <div>
        <h1 className=' text-2xl px-2 lg:text-4xl font-bold mt-32 text-center py-8 lg:px-32'>{post.data.title}</h1>
     <div className='align-center '>
     <Image
     alt={'decorative image'}
     height={700}
     width={480}
     src={post.data.coverImage}
     className='mx-auto block'
    />
     </div>
   
     <article className='prose lg:prose-lg lg:mx-auto mb-24 mx-4'>
     <Markdown>{post.content}</Markdown>
     </article>
<div className='prose lg:prose-lg lg:mx-auto mb-24 mx-4 border-t border-4 rounded-xl px-2 my-16 py-8'>
<p className='italic'> <span className='text-pink-600'>{post.data.author.name}</span> is a humanist author. For feedback you can contact <span className='text-pink-600'>{post.data.author.email}</span></p>

</div>

     

    
    </div>
  )
}

export default PostPage
