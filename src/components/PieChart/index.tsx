import { Pie, PieChart, Cell } from "recharts";

// Option 1: Add fill property to each data item
const data02 = [
  { name: "A1", value: 100 },
  { name: "B1", value: 100 },
  { name: "A2", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 100 },
];

const COLORS = ["#00C25E", "#005227", "#13A538", "#FF4440", "#005874"];
const stats = ["Aýlyk", "Söwda", "Tölegler", "Internet", "Salgyt"];

const renderCustomLabel = ({ cx, cy }: { cx: number; cy: number }) => {
  return (
    <text
      x={cx}
      y={cy}
      fill="#333"
      textAnchor="middle"
      dominantBaseline="central"
      className="text-2xl font-bold"
    >
      238 TMT
    </text>
  );
};

export default function Example() {
  return (
    <div className="flex items-center">
      <PieChart width={300} height={300}>
        <Pie
          data={[{ value: 100 }]} // Invisible pie for centering
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={0}
          label={renderCustomLabel}
          labelLine={false}
        />
        <Pie
          data={data02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={90}
          outerRadius={120}
        >
          {data02.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      <div className="flex flex-col gap-4">
        {stats.map((t, i) => {
          return (
            <div key={i} className="flex gap-1.5 items-center">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[i] }}
              ></div>
              <div className="font-popreg text-[#474747] text-xs">{t}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
