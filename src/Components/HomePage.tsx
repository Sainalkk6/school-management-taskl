
import { Link } from "react-router-dom";
function HomePage() {
  return (

<div className="bg-black flex items-center justify-center flex-col text-white h-screen">   
    <span className="font-medium text-2xl mt-6" >Choose a Difficulty</span>
    <div className="grid grid-cols-1 sm:grid-cols-8 w-full bg-black text-white h-screen justify-center mx-auto gap-9 p-5 text-center items-center">
      <Link className="bg-green-600 hover:text-white transition duration-300 hover:scale-105 text-black h-20 rounded-lg font-medium text-2xl sm:col-span-2 flex justify-center" to="/easy"><button >Easy</button></Link>
     <Link to="/medium" className="bg-yellow-400 text-black h-20 rounded-lg font-medium text-2xl sm:col-span-2  hover:text-white transition duration-300 hover:scale-105 flex justify-center"> <button >Medium</button></Link>
     <Link className="bg-red-400 text-black h-20 rounded-lg font-medium text-2xl sm:col-span-2  hover:text-white transition duration-300 hover:scale-105 flex justify-center" to="/hard"><button>Hard</button></Link>
      <Link className="bg-red-900 text-black h-20 rounded-lg font-medium text-2xl sm:col-span-2  hover:text-white flex justify-center transition duration-300 hover:scale-105" to="/expert"><button >Expert</button></Link>
    </div>
    
    </div>
  )
}

export default HomePage

