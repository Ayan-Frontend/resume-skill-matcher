const SkillShowcase = ({ matchedSkills, missingSkills }) => {
  return (
    <div className="mt-20 pb-18">
      <div className="grid gap-12 md:gap-15 xl:gap-45 xl:grid-cols-2">
        {/* Matched */}
        <div className="sm:mx-8 md:mx-0 rounded-2xl border border-slate-400 bg-white py-6 px-4 sm:p-6 shadow-sm">
          <h3 className="text-2xl font-bold bg-[#f5f5f5] rounded-2xl mx-2 px-5 py-3">
            Matched Skills
          </h3>

          <div
            className={`mt-6 ${matchedSkills.length === 0 ? "flex justify-center items-center py-5" : "grid md:grid-cols-2"}`}
          >
            {matchedSkills.length === 0 ? (
              <p className="text-xl text-center px-5 py-2.5 bg-red-100 text-red-700 rounded-lg">
                No matched skills found.
              </p>
            ) : (
              matchedSkills.map((skill) => (
                <div className="my-2 pt-1 mx-3 sm:mx-5">
                  <p
                    key={skill}
                    className="text-lg border-3 border-blue-500 rounded-xl text-blue-700 bg-blue-100 px-3 py-2 font-semibold"
                  >
                    ✓ <span className="ml-2">{skill}</span>
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Missing */}
        <div className="sm:mx-8 md:mx-0 rounded-2xl border border-slate-400 bg-white py-6 px-4 sm:p-6 shadow-sm">
          <h3 className="text-2xl font-bold bg-[#f5f5f5] rounded-2xl mx-2 sm:mx-0 px-5 py-3">
            Missing Skills
          </h3>

          <div
            className={`mt-6 ${missingSkills.length === 0 ? "flex justify-center items-center py-5" : "grid md:grid-cols-2"}`}
          >
            {missingSkills.length === 0 ? (
              <p className="text-xl text-center px-5 py-2.5 bg-blue-100 text-blue-700 rounded-lg">
                No missing skills 🎉
              </p>
            ) : (
              missingSkills.map((skill) => (
                <div className="my-2 pt-1 mx-3 sm:mx-5">
                  <p
                    key={skill}
                    className="text-lg border-3 border-red-700 rounded-xl text-red-700 bg-red-100 px-3 py-2 font-semibold"
                  >
                    ✗ <span className="ml-2">{skill}</span>
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillShowcase;
