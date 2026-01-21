import { useState } from "react";
import CommonHeading from "../CommonComponents/CommonHeading";
import Results from "./ShowResult/Results";
import Seperater from "../CommonComponents/Seperater";

const ResumeMatch = () => {
  const [file, setFile] = useState(null);
  const [hasResult, setHasResult] = useState(false);
  const [jobDesc, setJobDesc] = useState("");

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
    <>
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
            </div>
            <div className="mt-4 lg:w-[70%] lg:h-240 xl:hidden">
              <img
                src="/assets/hero-2.webp"
                className="w-full h-full cursor-pointer rounded-2xl"
                alt="Resume Illustration"
              />
            </div>
          </div>

          {/* Job Description / Requirements */}
          <div className="mt-12 xl:mt-8">
            <div className="md:mx-10 xl:mx-40">
              <label className="mb-2 block text-lg md:text-2xl font-semibold text-gray-800">
                Job Requirements / Job Description
              </label>

              <textarea
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
                placeholder="Paste the job description here... (skills, requirements, tools, frameworks)"
                rows={7}
                className="w-full resize-none rounded-xl border border-gray-300 bg-white p-3 text-sm text-gray-800 outline-none transition focus:border-black"
              />

              <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs sm:text-sm text-gray-600">
                  Tip: Paste JD from LinkedIn/Naukri to get accurate skill
                  matching.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setJobDesc(
                      "We are looking for a Frontend Developer with React, Redux, JavaScript, Tailwind CSS, REST APIs, Git, and basic testing knowledge.",
                    )
                  }
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Use Sample JD
                </button>
              </div>
            </div>
          </div>

          {/* Analyze Button */}
          <div className="text-center">
            <button
              disabled={!file || !jobDesc.trim()}
              onClick={() => setHasResult(true)}
              className={`cursor-pointer mt-8 mb-6 py-5 px-18 sm:py-5 sm:px-18 md:py-5 md:px-16 lg:py-5 lg:px-18 xl:py-4 xl:px-16 text-2xl sm:text-2xl md:text-[26px] lg:text-3xl xl:text-xl font-bold shadow-lg rounded-2xl text-white transition-all duration-300
                  ${
                    file && jobDesc.trim()
                      ? "bg-blue-500 hover:bg-blue-400"
                      : "bg-gray-400 cursor-not-allowed"
                  }
                `}
            >
              Analyze Resume
            </button>
          </div>
        </div>

        {!hasResult ? (
          <div className="mt-10 md:mt-12 mb-5 lg:mt-10 rounded-2xl border bg-white p-6 text-gray-500">
            <p className="text-center text-xl md:text-2xl">
              {!file
                ? "Upload your resume to get started."
                : !jobDesc.trim()
                  ? "Resume uploaded. Paste the job description to continue."
                  : "Ready! Click Analyze to view results."}
            </p>
          </div>
        ) : (
          <>
            <Seperater width={45} /> <Results />
          </>
        )}
      </section>
      <Seperater />
    </>
  );
};

export default ResumeMatch;
