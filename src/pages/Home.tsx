import Navbar from "../components/Navbar";
import headshot from "../assets/headshot.png"

function Home() {

  return (
    <div>
      <Navbar/>
      
      <div className="w-60">
        <img className="rounded-full" src={headshot} alt="" />
      </div>
    </div>
  )
}

export default Home;