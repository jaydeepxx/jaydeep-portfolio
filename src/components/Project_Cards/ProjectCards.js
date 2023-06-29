const ProjectCards = ({ img, langs, title, desc,codelink,livelink }) => {
  return (
    <>
      <div className="hover:scale-105 duration-500 border mx-auto w-[98%] md:w-[48%] lg:w-[30%] border-[#ABB2BF] p-0">
        {/* img */}
        <div className="">
          <img className="w-full" src={img} alt="" srcset="" />
        </div>
        {/* Tech stack used */}
        <div className="flex flex-wrap gap-2 p-2 border-y border-[#ABB2BF]">
            {langs.map(e => {
                return <span className="text-[#ABB2BF]">{e}</span>
            })}
        </div>
          {/* desc */}
          <div className=" p-4">
            <h2 className="text-[#FFFFFF] text-2xl font-medium"> {title}</h2>
            <p className="py-4 text-[#ABB2BF]">{desc}</p>
            {/* btns */}
            <div className=" flex gap-2">
              <a href={codelink} target="_blank">
              <button className="py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33]" type="button">
                Code {"<"}~{">"}
              </button>
              </a>
              <a href="">
              <button className="py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33]" type="button">
                Live {"<"}~{">"}
              </button>
              </a>
             
            </div>
          </div>
        
      </div>
    </>
  );
};

export default ProjectCards;
