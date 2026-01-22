import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      id: 1,
      title: "Resume Skill Matcher",
      contents: [{ list: ["ResumeScan", "Skill Match Dashboard"] }],
    },
    {
      id: 2,
      title: "Quick Links",
      contents: [
        {
          list: ["Home", "Analyze", "How It Works"],
          hrefs: ["#home", "#resumeMatch", "#howItWork"],
        },
      ],
    },
    {
      id: 3,
      title: "Social",
      contents: [
        {
          list: ["GitHub", "LinkedIn", "Portfolio"],
          hrefs: [
            "https://github.com/Ayan-Frontend/",
            "https://linkedin.com/in/ayan-alam-dev",
            "https://ayan-frontend-portfolio.vercel.app",
          ],
        },
      ],
    },
  ];

  return (
    <section className="pt-14">
      <div className="bg-slate-100 px-10 sm:px-16 pt-10 pb-4">
        <div className="md:ml-15 xl:ml-30 grid md:grid-cols-2 xl:grid-cols-3 md:gap-x-20 md:gap-y-4 xl:gap-y-0 xl:gap-x-30 mt-3">
          {footerLinks.map((obj) => (
            <div key={obj.id} className={`${obj.id !== 3 && "mb-8 md:mb-0"}`}>
              <h3 className="md:mb-5 xl:mb-7 font-bold text-2xl">
                {obj.title}
              </h3>
              {obj.contents.map((item, idx) => (
                <p key={idx}>
                  {item.list.map((text, i) => (
                    <React.Fragment key={i}>
                      {obj.id === 1 ? (
                        <span className="block my-2 font-semibold text-lg md:text-[22px] xl:text-lg text-slate-700">
                          {text}
                        </span>
                      ) : (
                        <a
                          href={item.hrefs[i]}
                          target={obj.id === 3 ? "_blank" : undefined}
                          rel="noreferrer"
                          className="block my-2 font-semibold text-lg md:text-[22px] xl:text-lg text-slate-700 hover:text-slate-500 cursor-pointer"
                        >
                          {text}
                        </a>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center border-t border-slate-400">
          <p className="text-center font-semibold md:text-lg xl:text-[16px] text-slate-800 pt-4 ">
            <span className="text-[#E55E51]">© 2026</span> Ayan Alam{" "}
            <span className="text-[#E55E51]">|</span> Built with{" "}
            <span className="text-[#E55E51]">React</span> +{" "}
            <span className="text-[#E55E51]">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
