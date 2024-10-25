import { useTheme } from "next-themes";
import { LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/card";

interface BRIChartProps {
  bri: number;
  t: (key: string) => string;
}

export function BRIChart({ bri, t }: BRIChartProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const data = [
    { bri: 3.0, category: t("normal") },
    { bri: 4.0, category: t("normal") },
    { bri: 4.5, category: t("overweight") },
    { bri: 5.0, category: t("overweight") },
    { bri: 5.5, category: t("obese") },
    { bri: 6.0, category: t("obese") },
  ];

  return (
    <Card className="p-8 bg-white shadow-lg">
      <h3 className="text-2xl font-semibold mb-8 text-gray-800">{t("briScale")}</h3>
      <div className="h-[400px] w-full">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis
              dataKey="category"
              stroke="#4b5563"
              fontSize="14px"
            />
            <YAxis
              domain={[2, 7]}
              stroke="#4b5563"
              fontSize="14px"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "none",
                borderRadius: "0.5rem",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                fontSize: "14px",
              }}
            />
            <Line
              type="monotone"
              dataKey="bri"
              stroke="#2563eb"
              strokeWidth={3}
            />
            <ReferenceLine
              y={bri}
              stroke="#dc2626"
              strokeWidth={2}
              label={{
                value: `${t("yourBri")}: ${bri.toFixed(2)}`,
                position: "right",
                fill: "#4b5563",
                fontSize: "14px",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}