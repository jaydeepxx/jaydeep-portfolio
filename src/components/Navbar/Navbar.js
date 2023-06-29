// eslint-disable-next-line
import { useState } from "react";
import {Link} from "react-scroll";
import "./style.css"
const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className=" fixed  top-0 left-0 right-0 bg-[#000000]">
        <div className="max-w-[1560px] mx-10 item-center justify-between flex pt-6 my-2">
          <Link className=" hover:scale-105 duration-500 text-white" to="home" spy={true} smooth={true} offset={-100} duration={500}>
            <div className="left flex  gap-2 items-center font-bold text-[#D9D9D9] text-base">
              {/* Logo */}
              <div className="img">
                <img src={require("./imgs/logo.png")} alt="" srcset="" />
              </div>
              Jaydeep
            </div>
          </Link>

          <div className="right flex items-center">
            <div
              className={`menu duration-300 flex-col justify-center md:flex-row flex fixed w-full ${
                toggle
                  ? " right-[-100%] top-0 bottom-0"
                  : "right-0 top-0 bottom-0"
              } bg-black md:static `}
            >
            <Link activeClass="actv" className="nav-item hover:scale-105 duration-500 text-white" to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setToggle(true)}>
                <li className="text-[#ABB2BF]  p-3 md:p-0 md-4 md:my-auto text-[32px] md:text-base list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>home
                </li>
              </Link>
            
              
              <Link activeClass="actv" className="nav-item hover:scale-105 duration-500 text-white" to="about" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setToggle(true)}>
                <li className="text-[#ABB2BF]  p-3 md:p-0 md-4 md:my-auto text-[32px] md:text-base list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>
                  about-me
                </li>
              </Link>
              <Link activeClass="actv" className="nav-item hover:scale-105 duration-500 text-white" to="skills" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setToggle(true)}>
                <li className="text-[#ABB2BF] p-3 md:p-0 md-4 md:my-auto text-[32px] md:text-base list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>skills
                </li>
              </Link>
              <Link activeClass="actv"  className="nav-item hover:scale-105 duration-500 text-white" to="projects" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setToggle(true)}>
                <li className="text-[#ABB2BF] p-3 md:p-0 md-4 md:my-auto text-[32px] md:text-base list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>projects
                </li>
              </Link>
              <Link activeClass="actv" className="nav-item hover:scale-105 duration-500 text-white" to="contacts" spy={true} smooth={true} offset={-48} duration={500} onClick={() => setToggle(true)}>
                <li className="text-[#ABB2BF] p-3 md:p-0 md-4 md:my-auto text-[32px] md:text-base list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>
                  contacts
                </li>
              </Link>
              <div
                onClick={() => setToggle(true)}
                className="close absolute block md:hidden right-3 top-3"
              >
                <img src={require("./imgs/close.png")} alt="" srcset="" />
              </div>
            </div>
            {/* Close & Open Btn*/}
            <div onClick={() => setToggle(false)} className="">
              <div className="open block md:hidden w-8">
                <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
