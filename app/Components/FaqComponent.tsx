'use client'

import Accordion from "./Accordion"
import { SetStateAction, Dispatch } from "react"
import { FaArrowDown, FaArrowUp } from "react-icons/fa"

type Props = {
  question: string,
  answer: string,
  idx: number
}

interface FaqComponentProps{
  handleClick : React.MouseEventHandler<HTMLButtonElement>,
  isSomeActive: any,
  turn: boolean[],
  setTurn: Dispatch<SetStateAction<boolean[]>>,
  data: Props[]
}
const FaqComponent = ({handleClick, isSomeActive, data, turn, setTurn}: FaqComponentProps) => {
  return (
    <div className="items-center flex flex-col lg:7/12 lg:mt-7 w-full my-5 px-4 ">
      <span className="text-3xl px-6 py-3 text-white rounded-md bg-gradient-to-r from-pink-600 to-yellow-400">
        FREQUENTLY ASKED QUESTIONS</span>
      <div className="flex items-center justify-between w-full mb-6 lg:justify-end">

        <button onClick={handleClick} className="flex items-center mr-3 space-x-1 mt-6 bg-gray-700 rounded-md text-sm font-bold border-b lg:text-base lg:space-x-2 py-2 px-4 bg-slate-50">
          <span className='text-yellow-500 min-w-fit text-ellipsis'>
            {!isSomeActive? "Open All": "Close All"}</span>
          <div className={"relative transition-all  ease-in-out duration-200" + (isSomeActive ? "rotate-180" : "rotate-0")}>
            {!isSomeActive?  <FaArrowDown/> : <FaArrowUp/>}
          </div>
        </button>
      </div>


      {data.map((el, i) =>{
        return <div className="w-full" key={'quesions' + i}>
         <Accordion
         question={el.question}
         answer={el.answer}
         turn={turn}
         setTurn={setTurn}
         idx={el.idx}/>
        </div>
      }
      )}
    </div>
  )
}

export default FaqComponent
