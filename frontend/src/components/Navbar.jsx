import { RiFootballLine } from "react-icons/ri";
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className="p-3 font-sf">
           <div className="flex justify-between items-center">
           <Link to="/">
                <div className="flex justify-center items-center gap-2">
                    <RiFootballLine className="text-3xl" />
                    <h2 className="text-white text-2xl hidden sm:block font-bold">Jerseys For You</h2>
                </div>
            </Link>
            <div className="">
                <p>Lorem ipsum dolor sit,!</p>
            </div>
           </div>
        </div>
    )
}

export default Navbar