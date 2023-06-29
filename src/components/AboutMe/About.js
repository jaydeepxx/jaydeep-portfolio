import dowonlaod from "./imgs/down.png";

const About = () => {
  return (
    <section className="" id="about">
      <div className="sm:w-10/12 px-5 max-w-[1560px] mx-auto  py-20">
        <div className=" flex flex-wrap items-center justify-between">
          <div className="md:w-[50%] w-full">
            {/* Title */}
            <div className="mb-12">
              <div className="sm:mt-[4.5rem] text-white w-[61.666667%] font-medium text-[27px] sm:text-[32px] md:mx-7 flex flex-wrap  items-center gap-2">
                <div className="">
                  <span className=" text-[#C778DD]">#</span>about-me
                </div>
                <div className="line w-[68.666667%] h-px bg-[#C778DD]"></div>
              </div>
            </div>
            {/* Desc */}
            <p className=" w-full text-[#ABB2BF]  md:px-6 max-w-[1560px]   pt-0 pb-8  ">
              Hello, i’m Jaydeep!
              <br />
              <br />
              I’m a self-taught front-end developer based in Jaipur, Rajasthan.
              I can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
              <br />
              <br />I am an Information Technology With Business Informatics
              undergraduate from IIITA. I am very passionate about improving my
              coding skills & developing applications & websites.
              <br />
              I always strive to learn about the newest technologies and frameworks.
            </p>
            {/* button */}
            <div className=" mx-auto flex flex-wrap mt-1 md:ml-6">
              <a
                href=""
                className=" hover:bg-[#C778DD33] border border-[#C778DD] pl-3 pr-0  text-white  max-w-[1560px]  "
              >
                <button className="flex flex-wrap mx-auto jus"><span className="mx-auto mt-3">Resume</span> <img className="" src={dowonlaod} alt="" /></button>
              </a>
            </div>
            
          </div>
          <div className=" hover:scale-105 duration-500 mx-auto sm:mx-0">
              <img className="mx-auto mt-[5rem] sm:mx-0" src={require("./imgs/aboutmeimg.png")} alt="" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
