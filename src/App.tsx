import { Route, Routes } from "react-router-dom"
import HomePage from "./Components/HomePage"
import Easy from "./Components/Easy"
import Answer from "./Components/Answers/Answer"
import Medium from "./Components/Medium"
import Hard from "./Components/Hard"
import Expert from "./Components/Expert"
import answers from "../public/answers"
import { createContext } from "react"
import { AnswerType } from "./Types/Types"
export const DataContext = createContext<null | AnswerType[]>(null)

function App() {
  return (
    <DataContext.Provider value ={answers}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/easy" element = {<Easy/>} />
        <Route path="/easy/:id" element={<Answer />} />
        <Route path="/medium" element = {<Medium/>} />
        <Route path="/medium/:id" element={<Answer />} />
        <Route path="/hard" element= {<Hard/>}/>
        <Route path="/hard/:id" element={<Answer />} />
        <Route path="/expert" element = {<Expert/>}/>
        <Route path="/expert/:id" element= {<Answer/>}/>
      </Routes>
    </DataContext.Provider>

  )
}

export default App
