import ProjectCards from "../Project_Cards/ProjectCards";
import portfolioImg from "./imgs/projectPortfolio.png"
import cryptrack from "./imgs/cryptrack.png";
import sharebuddy from "./imgs/sharebuddy.png"

const Projects = () => {
  const projects = [
    {
      img: portfolioImg,
      langs: ["HTML", "CSS", "JS", "Bootstrap", "NodeJs", "ExpressJs", "MySql"],
      title: "IIITApfolio",
      desc: "Acads/Non-Acads Portfolio Of IIIT-A Students",
      codelink: "https://github.com/jaydeepxx/IIITAPfollio",
      livelink: "https://iiitapfolio.onrender.com/",
    },
    {
      img: sharebuddy,
      langs: ["AWS S3", "React", "NodeJs", "ExpressJs", "MongoDB", "Multer"],
      title: "ShareBuddy",
      desc: "Online Cloud Based File Sharing Web App Using AWS S3 Bucket",
      codelink: "https://github.com/jaydeepxx/ShareBuddy",
      livelink: "https://sharebuddyy.netlify.app/",
    },
    {
      img: cryptrack,
      langs: [
        "ReactJs",
        "Tailwind CSS",
        "ExpressJs",
        "RapidApi",
        "Lodash",
        "CoinGecko",
      ],
      title: "CrypTrack",
      desc: "CrypTrack is React based web app where user can see current coins price, trending coins & also can add their favourite coins into watchlist.",
      codelink: "https://github.com/jaydeepxx/CrypTrack",
      livelink: "https://cryptrackkk.netlify.app/",
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
