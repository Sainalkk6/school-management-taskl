import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Button from "./Button"
import { DataContext } from "../App"



function Expert() {
    const [expertQuestions, setExpertQuestions] = useState<any[]>([])
    const answers = useContext(DataContext)

    useEffect(()=>{
        if(answers){
            setExpertQuestions(answers.slice(75,101))
        }
    },[])

  return (
    <div className="text-left bg-gradient-to-r from-amber-900 to-red-900 h-full flex">
        <div className="p-4 w-full h-full">
            <ul>
                {expertQuestions.map((question,ind)=>(
                    <li key={ind}>
                        <button className="mt-3 w-fit hover:text-white text-left transition cursor-pointer duration-100" onClick={question.function}>
                            <Link to={`/expert/${question.id}`}>
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

export default Expert
