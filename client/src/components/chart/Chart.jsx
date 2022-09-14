import "./Chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Actual: 1200, Last: 700 },
  { name: "February", Actual: 2100, Last: 1000 },
  { name: "March", Actual: 800, Last: 600 },
  { name: "April", Actual: 1600, Last: 1800 },
  { name: "May", Actual: 900, Last: 800 },
  { name: "June", Actual: 1700, Last: 1500 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="Last" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4c7e80" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4c7e80" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="Actual" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#058c9e" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#058c9e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="black" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Last"
            stroke="#4c7e80"
            fillOpacity={1}
            fill="url(#Last)"
          />
          <Area
            type="monotone"
            dataKey="Actual"
            stroke="#058c9e"
            fillOpacity={1}
            fill="url(#Actual)"
          />
          
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;