import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"
import { motion } from "framer-motion"

interface Link {
  name: string;
  reference: string;
}

function Navbar() {
  const location = useLocation();

  const links: Link[] = [
    { name: "home", reference: "/" },
    { name: "about", reference: "/about" },
    { name: "portfolio", reference: "/portfolio" },
    { name: "contact", reference: "/contact" },
  ]

  return (
    <div className="w-screen flex bg-[#111111] p-2 fixed top-0 text-white">
      <Link className="ml-8" to="/home">
        <motion.div className="hover:cursor-pointer" whileHover={{ scale: 1.1}} whileTap={{ scale: 0.9 }}>
          <img className="w-16" src={logo} alt="" draggable={false}/>
        </motion.div>
      </Link>

      <div className="flex flex-start items-center ml-20">
        {links.map(link => (
          <Link key={link.name} to={link.reference}>{link.name}</Link>
        ))}

      </div>
    </div>
  )
}

export default Navbar;