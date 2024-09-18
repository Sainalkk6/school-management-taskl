import { useEffect, useState } from "react"
import answers from "../../../public/answers"
import { Link } from "react-router-dom"


function Easy() {
    const [easyQuestions, setEasyQuestions] = useState<any[]>([])
    useEffect(()=>{
        setEasyQuestions(answers.slice(0,25))
    },[])

    console.log()
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
        <Link to="/" className="h-fit mt-5 mr-8 hover:scale-105 text-nowrap px-9 font-medium text-lg hover:bg-red-700 transition duration-200 hover:text-white  py-4 bg-white rounded-md">
            <button>Back to Home</button>
        </Link>
    </div>
  )
}

export default Easy
