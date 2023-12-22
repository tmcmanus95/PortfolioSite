import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import thomasPic from "../../../assets/images/me.png";

export default function Selfie() {
  return (
    <section>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-black font-medium md:text-6xl">
          Thomas McManus
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl">Full Stack Web Developer</h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
          Join me in my quest to create a more accessible internet for everyone.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-20 text-gray-600">
        <a
          href="https://www.linkedin.com/in/thomas-mcmanus-5a5366223/"
          target="_blank"
        >
          <AiFillLinkedin className="cursor-pointer " />
        </a>
        <a href="https://twitter.com/home" target="_blank">
          <AiFillTwitterCircle className="cursor-pointer " />
        </a>
        <a href="https://github.com/tmcmanus95" target="_blank">
          <FaGithub className="cursor-pointer " />
        </a>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
        <img src={thomasPic} layout="fill" objectFit="cover" />
      </div>
    </section>
  );
}
