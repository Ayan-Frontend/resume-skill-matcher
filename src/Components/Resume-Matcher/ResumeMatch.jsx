import { useState } from "react";
import CommonHeading from "../CommonComponents/CommonHeading";
import Results from "./ShowResult/Results";
import SkillShowcase from "./ShowResult/SkillShowcase";
import Seperater from "../CommonComponents/Seperater";

const ResumeMatch = () => {
  const [file, setFile] = useState(null);

  // Drag events
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const droppedFile = e.dataTransfer.files[0];
    if (!droppedFile) return;

    // Accept only txt or pdf
    if (
      droppedFile.type === "text/plain" ||
      droppedFile.type === "application/pdf"
    ) {
      setFile(droppedFile);
    } else {
      alert("Only TXT or PDF files are allowed");
    }
  };

  // Click upload
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    setFile(selectedFile);
  };

  return (
    <section id="resumeMatch">
      <div>
        <CommonHeading sec={"matcher"} heading={["skills", "matcher"]} />

        <div className="upload-section pt-8 flex flex-col xl:flex-row justify-evenly items-center">
          {/* LEFT IMAGE */}
          <div className="hidden xl:block w-[32%] h-170">
            <img
              src="/assets/hero-2.webp"
              className="w-full h-full cursor-pointer rounded-2xl"
              alt="Resume Illustration"
            />
          </div>

          {/* RIGHT UPLOAD BOX */}
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={`flex flex-col items-center justify-center relative w-[98%] h-90 sm:w-[80%] sm:h-95 md:w-[74%] md:h-100 lg:w-[60%] xl:w-[38%] xl:h-88 mt-4 sm:mt-6 lg:mt-4 mb-20 xl:ml-20 rounded-3xl border-3 border-dashed transition-all duration-300
              ${
                file
                  ? "border-4 border-blue-500 bg-blue-50"
                  : "border-gray-600 bg-white"
              }
              shadow-[0_50px_40px_-15px_rgba(0,0,0,0.4)]
            `}
          >
            {/* Hidden input */}
            <input
              type="file"
              accept=".txt,.pdf"
              id="resumeUpload"
              className="hidden"
              onChange={handleFileChange}
            />

            <label
              htmlFor="resumeUpload"
              className="mt-12 capitalize cursor-pointer py-4 px-11 text-3xl sm:text-3xl md:text-2xl lg:text-[28px] xl:text-2xl rounded-3xl transition-all duration-300 ease-in-out font-bold text-white bg-blue-500 hover:bg-blue-400"
            >
              click to upload
            </label>

            <p className="w-60 mt-8 md:text-[17px] xl:text-[16px] flex justify-center text-center font-[nunito,Assistant,-apple-system,Arial,sans-serif]">
              <span className="font-medium">
                Drag & Drop your Resume here or{" "}
                <span className="underline underline-offset-2">
                  <label htmlFor="resumeUpload" className=" cursor-pointer">
                    Click to Upload
                  </label>
                </span>
              </span>
              <span className="absolute bottom-4 font-bold">
                .txt & .pdf Files are Allowed
              </span>
            </p>

            {/* File name preview */}
            {file && (
              <p className="mt-4 text-green-600 font-semibold">
                Selected: {file.name}
              </p>
            )}

            {/* Analyze Button */}
            <div className="absolute -bottom-42 xl:-bottom-38">
              <button
                disabled={!file}
                className={`cursor-pointer py-5 px-20 sm:py-5 sm:px-18 md:py-5 md:px-16 lg:py-5 lg:px-18 xl:py-3.5 xl:px-12 text-2xl sm:text-2xl md:text-[26px] lg:text-2xl xl:text-xl font-bold shadow-lg rounded-2xl text-white transition-all duration-300
                  ${
                    file
                      ? "bg-blue-500 hover:bg-blue-400"
                      : "bg-gray-400 cursor-not-allowed"
                  }
                `}
              >
                Analyze Now
              </button>
            </div>
          </div>
          <div className="mt-40 lg:w-[70%] lg:h-240 xl:hidden">
            <img
              src="/assets/hero-2.webp"
              className="w-full h-full cursor-pointer rounded-2xl"
              alt="Resume Illustration"
            />
          </div>
        </div>
      </div>
      <Seperater width={45} />
      <Results />
      <SkillShowcase />
    </section>
  );
};

export default ResumeMatch;
