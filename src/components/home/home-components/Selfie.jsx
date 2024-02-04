import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import thomasPic from "../../../assets/images/me.png";

export default function Selfie() {
  return (
    <section className="text-center ">
      <div className="p-5 md:p-10">
        <h2 className="text-3xl md:text-6xl font-medium text-black">
          Thomas McManus
        </h2>
        <h3 className="text-xl md:text-3xl">Full Stack Web Developer</h3>
        <p className="text-sm md:text-xl py-5 leading-8 text-gray-800 max-w-xl mx-auto">
          Join me in my quest to create a more accessible internet for everyone.
        </p>
      </div>
      <div className="text-3xl flex justify-center  gap-8 text-gray-600">
        <a
          href="https://www.linkedin.com/in/thomas-mcmanus-5a5366223/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="cursor-pointer" />
        </a>
        <a
          href="https://twitter.com/ThomasMcMa93752"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle className="cursor-pointer" />
        </a>
        <a
          href="https://github.com/tmcmanus95"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="cursor-pointer" />
        </a>
      </div>
      <div className="relative mx-auto mt-10 md:mt-20 bg-gradient-to-b from-teal-500 rounded-full w-40 md:w-80 h-40 md:h-80 overflow-hidden">
        <img
          src={thomasPic}
          className="w-full h-full object-cover"
          alt="Thomas McManus"
        />
      </div>
    </section>
  );
}
