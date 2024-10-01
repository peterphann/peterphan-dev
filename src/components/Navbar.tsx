import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"
import { motion } from "framer-motion"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"

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
    <div className="w-screen h-20 flex justify-between bg-[#111111] p-2 fixed top-0 text-white shadow-md">
      <div className="flex">
        <Link className="ml-8" to="/">
          <motion.div className="hover:cursor-pointer" whileHover={{ scale: 1.1}} whileTap={{ scale: 0.9 }}>
            <img className="max-w-16" src={logo} alt="" draggable={false}/>
          </motion.div>
        </Link>

        <div className="flex flex-start justify-between items-center ml-20">
          {links.map(link => (
            <Link className={`mx-10 ${location.pathname === link.reference && "bg-gradient-to-r from-koifish-white to-koifish-red text-transparent bg-clip-text"}`} key={link.name} to={link.reference}>
              <motion.div whileHover={{ translateY: -2 }}>
                {link.name}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-start justify-between items-center ml-20 px-8">
        <Link className="mx-4" to="https://github.com/peterphann">
          <motion.img whileHover={{ scale: 1.1}} whileTap={{ scale: 0.9 }} src={github} className="w-7" alt="" />
        </Link>

        <Link className="mx-4" to="https://www.linkedin.com/in/peterlphan/">
          <motion.img whileHover={{ scale: 1.1}} whileTap={{ scale: 0.9 }} src={linkedin} className="w-7" alt="" />
        </Link>

        <Link className="mx-4" to="https://www.instagram.com/peterrdeter/">
          <motion.img whileHover={{ scale: 1.1}} whileTap={{ scale: 0.9 }} src={instagram} className="w-7" alt="" />
        </Link>

      </div>
    </div>
  )
}

export default Navbar;