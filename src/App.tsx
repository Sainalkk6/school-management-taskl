import { Route, Routes } from "react-router-dom"
import HomePage from "./Components/HomePage"
import Easy from "./Components/Easy/Easy"
import Answer from "./Components/Answers/Answer"
import Medium from "./Components/Medium"


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/easy" element = {<Easy/>}/>
      <Route path="/easy/:id" element={<Answer />} />
      <Route path="/medium" element = {<Medium/>} />
      <Route path="/medium/:id" element={<Answer />} />
    </Routes>

  )
}

export default App
