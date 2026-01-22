const skillShowcase = () => {
  const skillsBreakdown = [
    {
      id: 1,
      title: "matched skills",
      lists: ["sql", "javascript", "python"],
    },

    {
      id: 2,
      title: "missing skills",
      lists: ["java", "postgresql", "maven", "rest api"],
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-full xl:w-[70%] mt-10 mb-8 md:mb-10 capitalize flex flex-col md:flex-row justify-around ">
        {skillsBreakdown.map((skill, idx) => (
          <>
            <div key={idx} className="sm:mx-5 md:mx-0 md:flex px-8">
              <div className={`${skill.id === 2 ? "mt-10 md:mt-0" : ""} `}>
                <h3 className="text-3xl pb-3 mb-3 md:mb-5 font-bold">
                  {skill.title}
                </h3>
                <ul>
                  {skill.lists.map((list, index) => (
                    <li key={index}>
                      <p
                        className={`px-6 py-3 my-3 ${skill.id === 1 ? "bg-blue-100  border-blue-500" : "bg-red-100  border-red-800"} text-black border-4 rounded-2xl`}
                      >
                        <span className="font-extrabold text-[18px] capitalize">
                          {list}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {skill.id === 1 ? (
              <div key={skill.id} className="border-r-2 border-slate-400"></div>
            ) : (
              ""
            )}
          </>
        ))}
      </div>
    </div>
  );
};
export default skillShowcase;
