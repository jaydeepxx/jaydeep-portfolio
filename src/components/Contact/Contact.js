import email from "./imgs/email.png";

const Contact = () => {
  const skills = [
    {
      img: email,
      msg: "email",
      msgid: "jaydeepmeena62@gmail.com",
      title: "send message",
      style: "shadow-[#C778DD]",
    },
    {
      img: email,
      msg: "whatsapp",
      msgid: "635-0077-939",
      title: "send message",
      style: "shadow-[#C778DD]",
    },
    {
      img: email,
      msg: "call",
      msgid: "jaydeepmeena62@gmail.com",
      title: "send message",
      style: "shadow-[#C778DD]",
    },
  ];
  return (
    <section id="contacts">
      <div className=" sm:w-10/12 px-5 max-w-[1560px] mx-auto mt-8 py-8">
        <div className="">
          <div className="">
            <div className="mt-[7rem] text-white w-[61.666667%] font-medium text-[27px] sm:text-[32px] sm:mx-7 flex items-center gap-2">
              <div className="">
                <span className="text-[#C778DD]">#</span>contacts
              </div>
              <div className="line w-[61.666667%] h-px bg-[#C778DD]"></div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="mt-5 flex flex-wrap items-start justify-between">
          {/* left */}
          <div className="w-full md:w-[50%]">
            <p className="text-[#ABB2BF]  md:px-6 max-w-[1560px]   pt-0 pb-8">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </div>
          {/* right */}
          <div className="border border-[#ABB2BF] p-4 w-[20rem]">
            <h2 className="mb-4 text-white font-semibold">Message me here</h2>
            {/*  */}
            <div className="">
              {/*  */}
              <a  href="mailto:jaydeepmeena62@gmail.com">
                <div className="hover:scale-105 duration-500 flex flex-wrap gap-2 items-center h-10">
                  <img src={require("./imgs/email.png")} alt="" srcset="" />
                  <span className="text-[#ABB2BF]">
                    jaydeepmeena62@gmail.com
                  </span>
                </div>
              </a>

              <a href="tel:+916350077939">
                <div className="hover:scale-105 duration-500 flex flex-wrap gap-2 items-center h-10">
                  <img src={require("./imgs/call.png")} alt="" srcset="" />
                  <span className="text-[#ABB2BF]">6350077959</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
