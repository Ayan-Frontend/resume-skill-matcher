import { Typewriter } from "react-simple-typewriter";
import Seperater from "../CommonComponents/Seperater";

const Home = ({ isMenuOpen }) => {
  return (
    <>
      <section id="home" className="mt-8">
        <div className="w-full flex flex-col xl:flex-row justify-between">
          <div className="xl:w-[58%] flex flex-col items-center">
            <h1 className="hero-hedding mt-14 sm:mt-26 md:mt-32 xl:mt-22 text-center capitalize font-[Montserrat,Arial,sans-serif] font-bold text-[9.5vw] sm:text-5xl md:text-6xl xl:text-[44px]">
              <span>
                Analyze Your <div className="sm:mt-3 sm:pt-1 xl:hidden"></div>
                <span className="text-blue-500 font-[Assistant,Arial,sans-serif] font-extrabold">
                  <Typewriter
                    words={["Resume", "curriculum vitae"]}
                    loop={true}
                    cursor={!isMenuOpen}
                    cursorStyle="_"
                    typeSpeed={150}
                    deleteSpeed={110}
                    delaySpeed={3500}
                  />
                </span>
              </span>{" "}
              <br />
              <span className="inline-block sm:mt-3 sm:pt-1">
                with{" "}
                <span className="text-blue-500 font-[Assistant,Arial,sans-serif] font-extrabold">
                  Job
                </span>{" "}
                Requirements
              </span>
              <br />
            </h1>
            <p className="sm:w-[85%] xl:w-[68%] text-center mt-15 sm:mt-10 md:mt-13 xl:mt-10 xl:pt-1 text-lg sm:text-2xl xl:text-xl font-[nunito,Assistant,Arial,sans-serif] font-medium capitalize">
              Upload your resume | CV and compare it directly with job
              requirements. Our system analyzes your skills, highlights matches,
              and identifies missing skills so you can improve your resume and
              increase your chances of getting shortlisted.
            </p>
            <div className="pt-2 mt-10 mb-15 md:mt-15 md:mb-20 lg:my-15 xl:mt-10 xl:mb-0">
              <button className="bg-blue-500 text-white hover:border-blue-500 hover:bg-white hover:text-blue-500    py-4.5 px-8 sm:py-4 sm:px-8 md:py-5 md:px-10 xl:py-4 xl:px-9 rounded-2xl text-xl sm:text-[22px] md:text-2xl xl:text-xl font-bold capitalize font-[Montserrat,Arial,sans-serif] tracking-wide border-4 border-transparent cursor-pointer transition-all duration-400 ease-in-out hover:scale-105 active:scale-100">
                <a href="#resumeMatch">
                  Upload Your{" "}
                  <Typewriter
                    words={["Resume", "CV"]}
                    loop={true}
                    cursor
                    cursorStyle=""
                    typeSpeed={120}
                    deleteSpeed={110}
                    delaySpeed={7000}
                  />
                </a>
              </button>
            </div>
          </div>
          <div className="xl:w-[42%] mt-[4vh] flex justify-center items-center">
            <img
              className="md:w-[90vw] lg:w-[80vw] xl:w-[40vw] 2xl:w-[45vw] cursor-pointer"
              src="/assets/hero-1.webp"
              alt="hero"
            />
          </div>
        </div>
      </section>
      <Seperater />
    </>
  );
};
export default Home;
