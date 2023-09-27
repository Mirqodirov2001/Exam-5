import "./style.scss"
import javascript from "../../assets/icons/icon-javscript.svg"
import typescript from "../../assets/icons/icon-typescript.svg"
import react from "../../assets/icons/icon-react.svg"
import next from "../../assets/icons/icon-nextjs.svg"
import nodejs from "../../assets/icons/icon-nodejs.svg"
import express from "../../assets/icons/icon-express.svg"
import nest from "../../assets/icons/icon-nest.svg"
import socket from "../../assets/icons/icon-socket.svg"
import sql from "../../assets/icons/icon-postgresql.svg"
import mongodb from "../../assets/icons/icon-mongodb.svg"
import sass from "../../assets/icons/icon-sass.svg"
import tailwind from "../../assets/icons/icon-tailwindcss.svg"
import php from "../../assets/icons/image 7.svg"
import vue from "../../assets/icons/image 5.svg"
import nuxt from "../../assets/icons/image 6.svg"
import git from "../../assets/icons/icon-git.svg"


const skills = () => {
  return (
    <section className=" mb-[120px]">
      <nav>
        <div className="wrapper">
          <h1 className=" stills text-[14px] font-medium text-[inter] text-[#4B5563] leading-[20px] hover:bg-sky-700 hover:text-white cursor-pointer mx-auto mb-4">Skills</h1>
          <p className=" text-[20px] font-normal text-[inter] text-[#4B5563] leading-7 text-center mb-[48px]">The skills, tools and technologies I am really good at:</p>
          <ul className="icon flex gap-[90px] text-center items-center justify-center flex-wrap">
            <li className="icons px-4 py-6 rounded-lg  transition duration-500 hover:scale-105 hover:border-gray-600 flex-wrap">
              <img className=" mb-2" src={javascript} alt="" />
              <p className=" name text-[18px] font-normal text-[inter] text-[#4B5563] -ml-2">JavaScript</p>
            </li>
            <li className="icons px-4 py-6 rounded-lg transition duration-500 hover:scale-105 hover:border-gray-600">
              <img className=" mb-2" src={typescript} alt="img" />
              <p className=" name text-[18px] font-normal text-[inter] text-[#4B5563] -ml-2">Typescript</p>
            </li>
            <li className="icons mt-2 px-4 py-6 rounded-lg transition duration-500 hover:scale-105 hover:border-gray-600">
              <img className=" mb-2" src={react} alt="" />
              <p className=" name text-[18px] font-normal text-[inter] text-[#4B5563]">React</p>
            </li>
            <li className="icons px-4 py-6 rounded-lg transition duration-500 hover:scale-105 hover:border-gray-600">
              <img className=" mb-2" src={tailwind} alt="" />
              <p className=" name text-[18px] font-normal text-[inter] text-[#4B5563]">Tailwindcss</p>
            </li>
            <li className="icons px-4 py-6 rounded-lg transition duration-500 hover:scale-105 hover:border-gray-600">
              <img className=" mb-2" src={git} alt="" />
              <p className=" name text-[18px] font-normal text-[inter] text-[#4B5563]">Github</p>
            </li>
            <li className="icons px-4 py-6 rounded-lg transition duration-500 hover:scale-105 hover:border-gray-600">
              <img className=" mb-2" src={sass} alt="" />
              <p className=" name text-[18px] font-normal text-[inter] text-[#4B5563]">Sass/Scss</p>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  )
}

export default skills