import html from "./imgs/html.png";
import css from "./imgs/css.png";
import js  from "./imgs/js.png"
import nodejs from "./imgs/nodejs.png"
import bootstarp from "./imgs/bootstrap.png"
import react from "./imgs/react.png"
import expressjs from "./imgs/expressjs.png"
import cpp from "./imgs/c++.png"
import git from "./imgs/git.png"
import java from "./imgs/java.png"
import mysql from "./imgs/mysql.png"
import firebase from './imgs/firebase.png'

const Skills = () => {
  const skills = [
    {
      img: html,
      title: "html5",
      style: "shadow-[#FF6D00]"
    },
    {
      img: css,
      title: "css3",
      style:"shadow-[#648FF5]"
    },
    {
      img: js,
      title: "javascript",
      style:"shadow-[#FFE00B]"
    },
    {
      img: nodejs,
      title: "nodejs",
      style:"shadow-[#7BB601]"
    },
    {
      img: bootstarp,
      title: "bootstarp",
      style:"shadow-[#563D7C]"
    },
    {
      img: react,
      title: "reactjs",
      style:"shadow-[#648FF5]"
    },
    {
      img: expressjs,
      title: "expressjs",
      style:"shadow-[#828282]"
    },
    {
      img: cpp,
      title: "c++",
      style:"shadow-[#007FCC]"
    },
    {
      img: java,
      title: "java",
      style:"shadow-[#C81F21]"
    },
    {
      img: git,
      title: "git",
      style:"shadow-[#DE4C36]"
    },
    {
      img: mysql,
      title: "mySql",
      style:"shadow-[#025E85]"
    },
    {
      img: firebase,
      title: "firebase",
      style:"shadow-[#FCCA3F]"
    },
  ];
  return (
    <section id="skills" className="">
      <div className="sm:w-10/12 px-5 max-w-[1560px] mx-auto mt-8 py-8">
        <div className="">
          <div className="sm:mt-[6.5rem] text-white w-[61.666667%] font-medium text-[27px] sm:text-[32px] sm:mx-7 flex items-center gap-2">
            <div className="">
              <span className="text-[#C778DD]">#</span>skills
            </div>
            <div className="line w-[61.666667%] h-px bg-[#C778DD]"></div>
          </div>
        </div>
        <div className="group w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-6 sm:px-0">
          {skills.map(({img,title,style}) => {
            return(
              <div className={`shadow-md ${style} hover:scale-105 duration-500 h-30 w-[7rem] border border-[#ABB2BF] mx-auto pt-2`}>
              <img
                className="  mx-auto mb-2"
                src={img}
                alt=""
              />
              <p className="border-y border-[#ABB2BF] text-white ">{title}</p>
            </div>
            )
            
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
