import { Link } from "react-router-dom"

function Button() {
  return (
    <Link to="/" className="h-fit mt-5 mr-8 hover:scale-105 text-nowrap px-9 font-medium text-lg hover:bg-red-700 transition duration-200 hover:text-white  py-4 bg-white rounded-md sticky top-6">
        <button>Back to Home</button>
    </Link>
)
}

export default Button
