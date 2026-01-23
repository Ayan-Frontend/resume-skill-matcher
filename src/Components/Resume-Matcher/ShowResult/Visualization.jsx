import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

const Visualization = ({ matchedSkills, missingSkills }) => {
  const matchedCount = matchedSkills.length;
  const missingCount = missingSkills.length;

  const data = [
    { name: "Matched", value: matchedCount },
    { name: "Missing", value: missingCount },
  ];

  const COLORS = ["#3B82F6", "#EF4444"]; // blue, red

  // Custom label function
  const renderLabel = ({ name, percent }) => {
    const p = Math.round(percent * 100);
    return `${name} ${p}%`;
  };

  return (
    <div className="w-full">
      <div className="capitalize text-center mb-5">
        <h2 className="mt-6 sm:mt-10 md:mt-8 lg:mt-10 xl:mt-8 mb-1 text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-500 ">
          skills Visualization
        </h2>
        <p className="mb-3 font-semibold text-[18px] md:text-xl lg:text-2xl">
          demonstratation of scores
        </p>
      </div>
      <div className="mt-6 w-full min-w-0 h-90">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius="80%"
              label={renderLabel}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* Small Legend */}
      <div className="mt-4 flex justify-center gap-6 text-sm font-semibold">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
          Matched: {matchedCount}
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          Missing: {missingCount}
        </div>
      </div>
    </div>
  );
};
export default Visualization;
