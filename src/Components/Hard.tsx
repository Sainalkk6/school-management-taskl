import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Button from "./Button"
import { DataContext } from "../App"


function Hard() {
    const [hardQuestions, setHardQuestions] = useState<any[]>([])
    const answers = useContext(DataContext)

    useEffect(()=>{
        if(answers){
            setHardQuestions(answers.slice(50,75))
        }
    },[])
  return (
    <div className="bg-gradient-to-r from-red-800 to-red-500 h-full flex">
        <div className="p-4 w-full h-full">
            <ul>
                {hardQuestions.map((question,ind)=>(
                    <li key={ind}>
                        <button className="mt-3 w-fit hover:text-white text-left transition cursor-pointer duration-100" onClick={question.function}>
                            <Link to={`/hard/${question.id}`}>
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

export default Hard
