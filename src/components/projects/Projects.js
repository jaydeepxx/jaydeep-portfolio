import ProjectCards from "../Project_Cards/ProjectCards";
import portfolioImg from "./imgs/projectPortfolio.png"
import myportfolio from "./imgs/myportfolio.png"


const Projects = () => {
  const projects = [
    {
      img: portfolioImg,
      langs: ["html", "css", "js", "nodeJs", "nodeExpress", "mySql"],
      title: "IIITApfolio",
      desc: "Acads/Non-Acads Portfolio Of IIIT-A Students",
      codelink:"https://github.com/jaydeepxx/IIITAPfollio",
      livelink:"",
    },
    {
      img: "",
      langs: ["html", "css", "js", "php", "mySql"],
      title: "Online Food Delivery System",
      desc: "online food delivery system with user panel, admin panel & delivery boy panel",
      codelink:"https://github.com/jaydeepxx/IIITAPfollio",
      livelink:"",
    },
    {
      img: myportfolio,
      langs: ["reactjs","tailwindCss","netlify"],
      title: "My Portfolio",
      desc: "my fully responsive portfolio made by Reactjs",
      codelink:"https://github.com/jaydeepxx/IIITAPfollio",
      livelink:"",
    },
  ];

  return (
    <section id="projects">
      <div className="sm:w-10/12 px-5 max-w-[1560px] mx-auto mt-12 py-12 ">
        <div className="flex justify-between items-center gap-5 ">
          <div className="sm:mt-[4.5rem] text-white w-[61.666667%] font-medium text-[27px] sm:text-[32px] sm:mx-7 flex items-center gap-2">
            <div className="">
              <span className="text-[#C778DD]">#</span>projects
            </div>
            <div className="line w-[61.666667%] h-px bg-[#C778DD]"></div>
          </div>
          
        </div>
        {/* bottom */}
        <div className=" flex flex-wrap justify-between gap-4 md:px-5 my-7 ">
          {projects.map((e) => {
            return (
              <>
                <ProjectCards
                  img={e.img}
                  langs={e.langs}
                  title={e.title}
                  desc={e.desc}
                  codelink={e.codelink}
                  livelink={e.livelink}
                />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
