import React from "react";
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, Legend } from "recharts";

interface Props {
  filteredData: any[]; // Define prop type for filtered data
  title: string; // Title for the graph
  explanation: string; // Explanation of the graph
}

// React: Refers to the namespace provided by the React library.
// FC   : Short for "FunctionComponent," which indicates that this is a functional component.
// Props: Represents the type of props (properties) that the component expects to receive.
const AreaChartGraph: React.FC<Props> = ({ filteredData, title, explanation }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Title and explanation */}
      <h2 className="text-4xl font-bold text-blue-600 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">{title}</h2>
      <p className="text-gray-600 mt-3">{explanation}</p>
      <div className="flex justify-center mt-3">
        {/* Area chart component */}
        <AreaChart width={800} height={400} data={filteredData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFB74D" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFB74D" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#81C784" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#81C784" stopOpacity={0} />
            </linearGradient>
          </defs>
          {/* X axis */}
          <XAxis dataKey="date" tickFormatter={(date) => new Date(date).getFullYear().toString()} /> {/* Convert year to string */}
          <YAxis />
          <YAxis domain={[0, "auto"]} /> {/* Auto adjust y-axis domain */}
          {/* Grid */}
          <CartesianGrid strokeDasharray="1 1" />
          {/* Tooltip */}
          <Tooltip />
          {/* Areas */}
          <Area type="monotone" dataKey="ron95" stroke="#FFB74D" fillOpacity={0.8} fill="url(#colorUv)" name="RON95" />
          <Area type="monotone" dataKey="ron97" stroke="#81C784" fillOpacity={0.8} fill="url(#colorPv)" name="RON97" />
          <Area type="monotone" dataKey="diesel" stroke="#333333" fillOpacity={0.8} fill="url(#colorUv)" name="DIESEL" />
          {/* Legend */}
          <Legend />
        </AreaChart>
      </div>
    </div>
  );
};

export default AreaChartGraph;
