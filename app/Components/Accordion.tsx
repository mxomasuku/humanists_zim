'use client'
import {SetStateAction, Dispatch, useEffect, useRef} from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
type Props = {
    question: string,
    answer: string,
    idx: number,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
}

const Accordion = ({question, answer, turn, setTurn, idx}: Props) => {

 const contentRef = useRef<HTMLDivElement>(null)
 useEffect(()=>{
if(contentRef.current){
    contentRef.current.style.maxHeight = turn![idx]? `${contentRef.current.scrollHeight}px`: "0px"
}
 }, [contentRef, turn, idx])

 const toggleAccordian = () => {
 let newTurn = [...turn!]
 newTurn[idx] = !newTurn[idx]
 setTurn!(newTurn)
   } 

  return (
    <div className='flex flex-col items-center justify-center w-full px-2 text-lg pt-4 lg:text-base'>
      <button onClick={toggleAccordian}
      className={`bg-transparent px-5 shadow cursor-pointer w-full h-full ${turn![idx]}`}>
        <div className={'py-3'}>
            <div className={'flex items-center justify-between h-14 text-left'}>
                <span className='ml-2 font-medium lg:font-semibold lg:text-xl text-sm text-yellow-600'>{question}</span>
                <div>
                    {turn![idx] ? <FaMinus/> : <FaPlus/>}
                </div>
            </div>
            <div ref={contentRef} className='mx-4 overflow-hidden text-left transition-all  duration-500 h-full'>
                <p className='py-1 font-normal lead-normal text-justify whitespace-pre-line text-xs lg:text-lg'>
                    {answer}
                </p>
            </div>
        </div>
      </button>
    </div>
  )
}

export default Accordion
