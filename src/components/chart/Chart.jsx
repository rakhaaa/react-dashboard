import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", total: 300 },
  { name: "February", total: 276 },
  { name: "March", total: 322 },
  { name: "April", total: 435 },
  { name: "May", total: 363 },
  { name: "June", total: 247 }
];

const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Last 6 Months (Revenue)</div>
      <ResponsiveContainer width="100%" height="100%" aspect={2}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="aqua" stopOpacity={0.8} />
              <stop offset="95%" stopColor="aqua" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="aqua"
            fillOpacity={1}
            fill="url(#colorTotal)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
