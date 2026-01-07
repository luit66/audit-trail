import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Implemented", value: 98, color: "hsl(158, 64%, 40%)" },
  { name: "In Progress", value: 12, color: "hsl(43, 96%, 56%)" },
  { name: "Not Started", value: 4, color: "hsl(220, 14%, 90%)" },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  if (percent < 0.05) return null;

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" className="text-xs font-medium">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function ControlCoverage() {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-card rounded-lg border border-border p-5 shadow-card animate-fade-in">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-foreground">Control Coverage</h3>
        <span className="text-sm text-muted-foreground">{total} total controls</span>
      </div>

      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              innerRadius={40}
              fill="#8884d8"
              dataKey="value"
              strokeWidth={2}
              stroke="hsl(var(--card))"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                boxShadow: "var(--shadow-md)"
              }}
              formatter={(value: number) => [`${value} controls`, ""]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center gap-4 mt-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div 
              className="h-3 w-3 rounded-full" 
              style={{ backgroundColor: item.color }}
            />
            <span className="text-xs text-muted-foreground">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
