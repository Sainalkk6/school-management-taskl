import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Button from "./Button"
import { DataContext } from "../App"


function Easy() {
    const answers = useContext(DataContext)

    const [easyQuestions, setEasyQuestions] = useState<any[]>([])
    useEffect(()=>{
        if(answers){
            setEasyQuestions(answers.slice(0,25))
        }
    },[])
  return (
    <div className="text-left bg-gradient-to-r from-green-900 to-green-500 h-full flex">
        <div className="p-4 w-full h-full">
            <ul>
                {easyQuestions.map((question,ind)=>(
                    <li key={ind}>
                        <button className="mt-3 w-fit hover:text-white text-left transition cursor-pointer duration-100" onClick={question.function}>
                            <Link to={`/easy/${question.id}`}>
                                <span className="font-medium  text-2xl">{question.id}. {question.question}</span>
                            </Link>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
        <Button/>
    </div>
  )
}

export default Easy
