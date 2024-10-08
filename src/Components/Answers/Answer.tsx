import { useNavigate, useParams } from "react-router-dom";
import answers, { classObj } from "../../../public/answers";
import { useState } from "react";

function Answer() {
    const {id} = useParams()
    const navigate = useNavigate()
    const question = answers.find(q => q.id === Number(id));
    const [value,setValue] = useState<number | string>("")
    const [option,setOption] = useState(()=>{
        if(question?.type === "student"){
            return classObj.students[0].name
        } else if(question?.type === "subject"){
            return  classObj.students[0]?.marks[0]?.subject
        } 
        return ""
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=> setValue(Number(e.target.value))

    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>)=> setOption(e.target.value)
    const studentName = ["Ravi","Aju","Mini SS","Binu"]
    const subjects = ["English","Maths","Physics","Chemistry","Computer"]
   

    const result = question?.function ? question.function(classObj,option,Number(value)) : "";

  return (
    <div className="w-full min-h-screen flex flex-col gap-4 relative items-center justify-center bg-neutral-500 p-10 pt-0">
        <div className="bg-black w-[800px] text-white  min-h-[550px]  shadow-xl  rounded-xl text-3xl font-medium flex  p-3 ">
            {answers.map(answer=>(
                answer.id === Number(id) ?(
                    <div key={answer.id} className="flex flex-col gap-4 py-5 px-3">
                         <span><span className="text-red-600">{answer.id} . </span>{answer.question}</span> <br/>
                         {question?.type && <select value={option} onChange={(e)=>handleChange(e)} className="bg-gray-800 text-white text-lg p-2 rounded-md">
                            {question?.type === "student" && studentName.map((student,ind)=>(
                                <option key={ind} value={student}>{student}</option>
                            ))}

                            {question?.type === "subject" && subjects.map((subject,ind)=>(
                                <option key={ind} value={subject}>{subject}</option>
                            )) }
                            </select>}

                            {question?.needInput &&  <input
                                        type="number"
                                        value={value}
                                        onChange={handleInputChange}
                                        className="bg-gray-800 text-white text-lg p-2 rounded-md mt-2 focus:outline-none"
                                        
                                    />}
                         <span><span className="text-green-500">Ans.</span>  {result}</span>
                    </div>
                ) : null
            ))}
        </div>
        <button onClick={()=> navigate(-1)} className="bg-white px-4 py-2 font-medium text-xl  z-10  rounded-md shadow-md hover:scale-105 hover:bg-red-700 hover:text-white transition duration-200">Go back</button>
    </div>
  )
}

export default Answer
