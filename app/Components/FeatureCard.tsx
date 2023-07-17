import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PostMetaData } from './Interfaces/PostMetaData'

const FeatureCard = (props: PostMetaData) => {
  return (
    <div className="w-5000 my-4 overflow-hidden bg-black mx-2 rounded-lg shadow-lg md:shadow-sm hover:shadow-lg">
      <Link href={`/posts/${props.slug}`}>
        <div className="h-64 w-96 relative pb-3/5 ">
          <Image
            loading="lazy"
            src={props.coverImage}
            alt={`cover of : ${props.title}`}
            fill
            className="object-cover w-full h-60"
        />
      </div>
       <h2 className="px-2 text-base font-bold leading-tight text-gray-700 capitalize ">
        {props.title}
       </h2>
       <p className="px-2 text-xs text-gray-600 "> {props.excerpt}</p>
      </Link>
      <div className="flex items-center mt-2 mb-2 ">
      <Link
        href={`/author${props.author.url}`}
       className="block w-10 h-10 ml-2 overflow-hidden rounded-full ring-2 ring-blue-400 focus:outline-none ">

      <img
          src={props.author.picture}
          className="object-cover w-full h-full "
           alt={props.author.name}
         />

       </Link>
       <div className="px-2 ">
         <p className="text-xs font-bold text-gray-700">
           <Link href={`/author${props.author.url}`} legacyBehavior>{props.author.name}</Link>
         </p>
       </div>
     </div>
    </div>
  )
}


export default FeatureCard;
