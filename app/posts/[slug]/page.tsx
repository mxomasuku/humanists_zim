import fs from 'fs'
import Markdown from "markdown-to-jsx"
import matter from 'gray-matter'
import getPostMetaData from '@/app/Components/Interfaces/getPostMetaData'
import PostFooter from '@/app/Components/PostFooter'
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
return posts.map((post) =>{
  slug: post.slug
})
}

const Post = (props: any) => {
  const slug = props.params.slug
  const post = getPostContent(slug)
  return (
    <div>
        <h1 className=' text-2xl px-2 lg:text-4xl font-bold mt-8 text-center py-8 lg:px-32'>{post.data.title}</h1>
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
     <PostFooter/>


    
    </div>
  )
}

export default Post
