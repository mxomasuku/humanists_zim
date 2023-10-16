import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PostMetaData } from './Interfaces/PostMetaData'

const FeatureCard = (props: PostMetaData) => {
  return (
    <div className="mb-16 overflow-hidden lg:mx-4 rounded-lg shadow-lg md:shadow-sm hover:shadow-lg">
      <Link href={`/posts/${props.slug}`}>
        <div className=" h-36 lg:h-48 relative pb-3/5 ">
          <Image
            loading="lazy"
            src={props.coverImage}
            alt={`cover of : ${props.title}`}
            fill
            className="object-cover w-full h-60"
        />
      </div>
       <h2 className="px-2 text-xs font-bold leading-tight text-gray-600 capitalize lg:text-xs">
        {props.title}
       </h2>
       <p className="px-2 text-xs text-gray-500 "> {props.excerpt}</p>
    
      </Link>
      <div className="flex items-center m-2 px-2 ">
      <Link
        href={`/author${props.author.url}`}
       className="block w-10 h-10 ml-2 overflow-hidden rounded-full ring-2 ring-blue-400 focus:outline-none ">

      <img
          src={props.author.picture}
          className="none lg:object-cover lg:w-full lg:h-full "
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
