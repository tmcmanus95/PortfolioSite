import "./Skills.scss";
import React, { useEffect } from "react";
import {
  FaPython,
  FaNodeJs,
  FaReact,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongoosedotws,
  SiJest,
  SiMongodb,
  SiPandas,
  SiSequelize,
} from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { PiFileSqlDuotone } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";
import { BsBootstrap } from "react-icons/bs";
import databases from "../../../../assets/images/database.png";
import libraries from "../../../../assets/images/libraries.jpg";
import languages from "../../../../assets/images/languages.png";
import toolkit from "../../../../assets/images/toolkit.jpg";

export default function Skills() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  function addAnimation(scrollers) {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller-inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        console.log(duplicatedItem);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  return (
    <section className="flex flex-col items-center">
      <h1 className="flex text-5xl justify-center mb-10">Skills</h1>

      <div className="scroller">
        <ul className="tag-list scroller-inner text-5xl">
          <li>
            <IoLogoJavascript />
          </li>
          <li>
            <FaNodeJs />
          </li>
          <li>
            <FaReact />
          </li>

          <li>
            <PiFileSqlDuotone />
          </li>
          <li>
            <SiMongodb />
          </li>
          <li>
            <DiPostgresql />
          </li>
          <li>
            <SiSequelize />
          </li>
          <li>
            <SiMongoosedotws />
          </li>

          <li>
            <FaCss3Alt />
          </li>
          <li>
            <SiTailwindcss />
          </li>
          <li>
            <FaBootstrap />
          </li>

          <li>
            <SiJest />
          </li>

          <li>
            <FaPython />
          </li>
          <li>
            <SiPandas />
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex shadow-lg p-10 rounded-xl my-10  bg-white">
          <div className="w-1/4">
            <p>Languages</p>
            <img className="h-32 w-32 object-cover" src={languages}></img>
          </div>
          <div className="flex-1 p-8">
            <h1 className="lg:flex text-4xl gap-10 text-left ">
              <IoLogoJavascript />
              <h1>JavaScript</h1>
            </h1>
            <h1 className="lg:flex text-4xl gap-10 text-left ">
              <FaPython />
              <h1>Python</h1>
            </h1>
          </div>
        </div>
        <div className="basis-1/3 lg:w-1/2 flex shadow-lg p-10 rounded-xl my-10  bg-white">
          <div className="w-1/4">
            <p>Frameworks and Libraries</p>
            <img className="h-32 w-32 object-cover" src={libraries}></img>
          </div>
          <div className="flex-1 p-8">
            <h1 className="lg:flex text-4xl gap-10 text-left">
              <FaNodeJs />
              <h1>Node.js</h1>
            </h1>
            <h1 className="lg:flex text-4xl gap-10 text-left">
              <FaReact />
              <h1>React</h1>
            </h1>
            <h1 className="lg:flex text-4xl gap-10 text-left ">
              <SiSequelize />
              <h1>Sequelize</h1>
            </h1>
            <h1 className="lg:flex text-4xl gap-10 text-left ">
              <SiJest />
              <h1>Jest</h1>
            </h1>
          </div>
        </div>
        <div className="basis-1/3 lg:w-1/2 flex shadow-lg p-10 rounded-xl my-10  bg-white">
          <div className="w-1/4">
            <p>Databases</p>
            <img className="h-32 w-32 object-cover" src={databases}></img>
          </div>
          <div className="flex-1 p-8">
            <h1 className="lg:flex text-4xl text-left">
              <PiFileSqlDuotone />
              <h1>SQL</h1>
            </h1>
            <h1 className="lg:flex text-4xl  text-left">
              <FaReact />
              <h1>MongoDB</h1>
            </h1>
            <h1 className="lg:flex text-4xl text-left ">
              <DiPostgresql />
              <h1>PostGresQL</h1>
            </h1>
          </div>
        </div>
        <div className="basis-1/3 lg:w-1/2 flex shadow-lg p-10 rounded-xl my-10  bg-white">
          <div className="w-1/4">
            <p className="border-t-1 ">Styling and Tookits</p>
            <img className="h-32 w-32 object-cover" src={toolkit}></img>
          </div>
          <div className="flex-1 p-8">
            <h1 className="lg:flex text-4xl  gap-10 text-left ">
              <FaCss3Alt />
              <h1>CSS</h1>
            </h1>
            <h1 className="lg:flex text-4xl gap-10 text-left">
              <SiTailwindcss />
              <h1>Tailwind CSS</h1>
            </h1>
            <h1 className="lg:flex text-4xl gap-10 text-left">
              <BsBootstrap />
              <h1>Boostrap</h1>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
