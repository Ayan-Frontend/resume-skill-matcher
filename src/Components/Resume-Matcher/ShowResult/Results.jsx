const Results = () => {
  return (
    <div className="mt-5">
      <div className="mt-12 mb-5">
        <h1 className="capitalize text-center text-4xl md:text-5xl font-black text-blue-500">
          results
        </h1>
      </div>
      <div className="mx-6 sm:mx-3 md:mx-6 lg:mx-10 mt-12 sm:mt-15 md:mt-20 mb-6 flex flex-col sm:flex-row sm:items-center justify-between lg:justify-evenly">
        <div className="capitalize">
          <h3 className="text-2xl mb-6 sm:mb-0 sm:text-[28px] md:text-[33px] lg:text-4xl xl:text-4xl font-black">
            matched score :
          </h3>
        </div>
        <div className="xl:ml-20 px-8 sm:px-8 md:px-12 lg:px-15 py-6 bg-black text-white rounded-3xl border-4 border-blue-500">
          <p className="capitalize text-center text-2xl md:text-[32px] lg:text-4xl font-bold">
            <span className="font-extrabold mr-3 lg:text-4xl xl:text-3xl text-blue-500 ">
              75%
            </span>{" "}
            <span>complement</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Results;
