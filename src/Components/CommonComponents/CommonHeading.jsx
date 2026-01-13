const CommonHeading = ({ sec, heading }) => {
  return (
    <div>
      <h1 className="capitalize mt-15 mb-8 text-3xl sm:text-3xl md:text-4xl  font-bold font-[Montserrat,Assistant,Arial,sans-serif]">
        {heading.map((hds, idx) => (
          <span
            key={idx}
            className={`${
              sec === "matcher" && idx === 1 ? "text-blue-500" : ""
            }  `}
          >
            {hds + " "}
          </span>
        ))}
      </h1>
    </div>
  );
};
export default CommonHeading;
