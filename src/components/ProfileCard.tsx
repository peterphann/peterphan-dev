import { AcademicCapIcon, MapPinIcon } from "@heroicons/react/24/outline";
import headshot from "../assets/headshot.png";
import { motion } from "framer-motion";
import StaggeredText from "./StaggeredText";

interface ProfileCardProps {
  className?: string;
}

function ProfileCard({ className }: ProfileCardProps) {

  return (
    <div className={`p-4 inline-flex ${className}`}>
      <motion.div className="w-60"
        transition={{ type: "spring", duration: 1 }}
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}>

        <img className="rounded-full shadow-lg" src={headshot} alt="" />
      </motion.div>

      <div className="flex flex-col justify-between font-bold ml-8 py-7">
        <div>
          <StaggeredText
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            delayBetween={0.05}
            space={5}>
            Hello, I'm
          </StaggeredText>
          <StaggeredText
            className="text-4xl sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            delayBetween={0.05}
            delay={0.8}>
            Peter Phan
          </StaggeredText>
        </div>

        <div className="">
          <motion.div className="flex"
            transition={{ type: "spring", duration: 1, delay: 2 }}
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}>
            <AcademicCapIcon className="w-5 mr-2" strokeWidth={2} />
            <p className="text-xl">Computer Science Student</p>
          </motion.div>

          <motion.div className="flex"
            transition={{ type: "spring", duration: 1, delay: 2.4 }}
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}>
            <MapPinIcon className="w-5 mr-2" strokeWidth={2} />
            <p className="text-xl">Texas A&M University</p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

export default ProfileCard;