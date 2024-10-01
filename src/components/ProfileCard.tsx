import { AcademicCapIcon, MapPinIcon } from "@heroicons/react/24/outline";
import headshot from "../assets/headshot.png"

interface ProfileCardProps {
  className?: string;
}

function ProfileCard({ className }: ProfileCardProps) {

  return (
    <div className={`p-4 inline-flex ${className}`}>
        <div className="w-60">
          <img className="rounded-full shadow-md" src={headshot} alt="" />
        </div>

        <div className="flex flex-col justify-between font-bold ml-8 py-7">
          <div className="">
            <p className="text-xl">Howdy, I'm</p>
            <p className="text-6xl">Peter Phan</p>
          </div>

          <div className="">
            <div className="flex">
              <AcademicCapIcon className="w-5 mr-2" strokeWidth={2}/>
              <p className="text-xl">Computer Science Student</p>
            </div>

            <div className="flex">
              <MapPinIcon className="w-5 mr-2" strokeWidth={2}/>
              <p className="text-xl">Texas A&M University</p>
            </div>
          </div>

        </div>
    </div>
  )
}

export default ProfileCard;