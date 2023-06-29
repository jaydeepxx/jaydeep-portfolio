import "./about.css";
import {Link} from "react-scroll";
const About = () => {
  return (
    <section id="home">
      <div className=" px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
        <div className="w-10/12 sm:w-7/12 mx-auto ">
          <h1 className="font-semibold text-[32px] text-white mb-3 md:mx-4 ">
            Hi I'm a <span className="text-[#C778DD] ">programmer</span> and{" "}
            <span className="text-[#C778DD]">web developer</span>.
          </h1>
          <p className="text-[#ABB2BF] my-6 md:mx-4">
            I'm currently into dsa, frontend Dev, backend Dev
          </p>
          <Link className=" hover:scale-105 duration-500 text-white" to="about" spy={true} smooth={true} offset={-100} duration={500}>
            <button className="text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33] md:mx-4">
              Scroll Down ↓
            </button>
          </Link>
        </div>
        <div className="mx-auto hover:scale-105 duration-500">
          <div className="">
            <img src={require("./imgs/mypic.png")} alt="" />
          </div>
          <div className="border border-[#ABB2BF] flex items-center p-2 gap-2 text-[#ABB2BF]">
            <div className="w-4 h-4 bg-[#C778DD]"></div>
            <div className=" ">
              Currently learning <span className="text-white">Reactjs</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 py-10 md:w-5/12 mx-auto">
        <img
          className="mx-auto hover:scale-105 duration-500"
          src={require("./imgs/quote.png")}
          alt=""
          srcset=""
        />
      </div>
    </section>
  );
};

export default About;
