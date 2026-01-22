const Seperater = ({ width = 80 }) => {
  return (
    <div className="mt-20 md:mt-24 xl:mt-18 mb-2 opacity-50 flex justify-center seperator">
      <div
        style={{ width: `${width}%` }}
        className="border-2 border-slate-300 rounded-2xl"
      ></div>
    </div>
  );
};
export default Seperater;
