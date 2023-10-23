import fs from "fs"
import matter from "gray-matter"
import { PostMetaData } from "./PostMetaData"

const getPostMetaData = (): PostMetaData[] => {
    const folder = 'posts/'
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter((file => file.endsWith(".md")))
  
  
    //get Gray matter
    const posts = markdownPosts.map((fileName) => {
      const fileContents =  fs.readFileSync(`posts/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
      return{
        title: matterResult.data.title,
        date: matterResult.data.date,
        excerpt: matterResult.data.excerpt,
        coverImage: matterResult.data.coverImage,
        author: matterResult.data.author,
        slug: fileName.replace(".md", "")
      }
    })
    return posts
  }
  export default getPostMetaData