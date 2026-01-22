import CommonHeading from "../CommonComponents/CommonHeading";

const Working = () => {
  const workingCard = [
    {
      id: 1,
      img: "Resume Upload Image",
      title: "1) Upload Your",
      highLight: "Resume",
      description:
        "Upload your resume or paste your content to extract key skills and technologies.",
    },
    {
      id: 2,
      img: "Job Description Image",
      title: "2) Paste Job",
      highLight: "Requirements",
      description:
        "Add a job description to define the required skills for your target role.",
    },
    {
      id: 3,
      img: "Results Dashboard Image",
      title: "3) Get Match",
      highLight: "Results",
      description:
        "Get a match score, see matched skills, missing keywords, and improvement suggestions.",
    },
  ];

  return (
    <section id="howItWork" className="mt-16 mb-8">
      <div>
        <div>
          <CommonHeading
            sec={"matcher"}
            heading={["How the", "Matcher Works"]}
          />

          <p className="text-lg text-gray-600">
            Upload your resume, paste a job description, and instantly see how
            well your skills match the role.
          </p>
        </div>

        <div className="flex">
          <div className="mt-10 sm:mx-18 md:mx-0 xl:mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3 ">
            {/* Steps */}
            {workingCard.map((card) => (
              <div
                key={card.id}
                className="mb-5 md:mb-4 xl:mb-0 flex flex-col rounded-2xl border bg-white p-6 shadow-sm"
              >
                <div className="flex min-h-40 items-center justify-center rounded-xl border border-dashed text-gray-500">
                  {card.img}
                </div>

                <h3 className="mt-6 mb-1 text-2xl font-semibold text-gray-900">
                  {card.title}{" "}
                  <span className="text-blue-500">{card.highLight}</span>
                </h3>
                <p className="pt-2 my-auto text-lg xl:text-[17px] text-gray-600">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Working;
