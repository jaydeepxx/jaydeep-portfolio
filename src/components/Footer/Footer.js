
import {Link} from "react-scroll";

const Footer = () => {
    return (
        <>

       {/* line */}
      <div  className="w-full h-px bg-[#ABB2BF] mt-20 mb-8"></div>
      {/* footer */}
        {/* top */}
        <div className=" sm:w-10/12 px-5 max-w-[1560px] mx-auto mt-8 py-8 flex justify-between gap-y-10 flex-wrap">
          {/* left */}
          <div className="mx-auto md:mx-0">
            <div className=" flex items-center gap-8 mb-3 ">
              {/* logo */}
              <Link className=" hover:scale-105 duration-500 text-white" to="home" spy={true} smooth={true} offset={-100} duration={500}>
              <div className=" flex gap-2 items-center text-2xl text-white font-bold">
                <img src={require("./imgs/logo.png")} alt="" />
                <span>Jaydeep</span>
              </div>
              </Link>
              
              {/* email */}
              <span className="text-[#ABB2BF]"></span>
            </div>
            {/* disc */}
            <div className="text-[#ffffff]">
              <p>programmer and web developer based in jaipur</p>
            </div>
          </div>
          {/* right */}
          <div className=" mx-auto md:mx-0">
            {/* title */}
            <h2 className="ml-4 sm:ml-0 text-white text-2xl font-medium mb-3">Media</h2>
            {/* media */}
            <div className="flex items-center gap-2">
              <a href="https://github.com/jaydeepxx" target="_blank" rel="noopener noreferrer">
                <img className="hover:scale-110 duration-500" src={require("./imgs/github.png")} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/jaydeepxx/" target="_blank" rel="noopener noreferrer">
                <img className="hover:scale-110 duration-500" src={require("./imgs/linkedin.png")} alt="" />
              </a>
              <a href="https://www.facebook.com/jaydeepxx/#" target="_blank" rel="noopener noreferrer">
                <img className="hover:scale-110 duration-500" src={require("./imgs/facebook.png")} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="text-center text-[#ABB2BF] pb-8 mt-12">
          © Copyright 2023. Made by Jaydeep
        </div>
    

        </>
    )

}

export default Footer;