import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

function Navbar() {

  return (
    <div className="w-screen flex bg-[#111111] p-2 fixed top-0 text-white">
      <div className="ml-8">
        <img className="w-16" src={logo} alt="" />
      </div>

      <div>
        <Link to={"/about"}>Heloo</Link>
      </div>
    </div>
  )
}

export default Navbar;