import { useTheme } from "next-themes";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine } from "recharts";
import { Card } from "@/components/ui/card";

interface BMIChartProps {
  bmi: number | null;
  t: (key: string) => string;
}

export function BMIChart({ bmi, t }: BMIChartProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const data = [
    { range: t("underweight"), start: 0, end: 18.5, color: "#3b82f6" },
    { range: t("normal"), start: 18.5, end: 24.9, color: "#22c55e" },
    { range: t("overweight"), start: 24.9, end: 29.9, color: "#eab308" },
    { range: t("obese"), start: 29.9, end: 35, color: "#ef4444" },
  ];

  return (
    <Card className="p-6 w-full max-w-2xl mx-auto mt-8">
      <h3 className="text-lg font-semibold mb-4">{t("bmiScale")}</h3>
      <div className="w-full overflow-x-auto">
        <BarChart width={600} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="range" stroke={isDark ? "#e5e7eb" : "#374151"} />
          <YAxis stroke={isDark ? "#e5e7eb" : "#374151"} />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? "#1f2937" : "#ffffff",
              border: "none",
              borderRadius: "0.5rem",
            }}
          />
          <Bar dataKey="end" fill="url(#colorGradient)" />
          {bmi && (
            <ReferenceLine
              x={data.find(d => bmi >= d.start && bmi < d.end)?.range}
              stroke="#ff0000"
              label={{
                value: `${t("yourBmi")}: ${bmi.toFixed(1)}`,
                position: "top",
                fill: isDark ? "#e5e7eb" : "#374151",
              }}
            />
          )}
        </BarChart>
      </div>
    </Card>
  );
}