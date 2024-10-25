import { Card } from "@/components/ui/card";

interface BRIResultProps {
  bri: number;
  t: (key: string) => string;
}

export function BRIResult({ bri, t }: BRIResultProps) {
  const getBRICategory = (bri: number) => {
    if (bri < 4.0) return { category: t("normal"), color: "text-green-600" };
    if (bri < 5.0) return { category: t("overweight"), color: "text-yellow-600" };
    return { category: t("obese"), color: "text-red-600" };
  };

  const { category, color } = getBRICategory(bri);

  return (
    <Card className="p-8 bg-white shadow-lg h-full flex flex-col justify-center">
      <h3 className="text-2xl font-semibold mb-8 text-gray-800">{t("interpretation")}</h3>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <span className="text-xl text-gray-600">{t("yourBri")}:</span>
          <span className={`text-3xl font-bold ${color}`}>{bri.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl text-gray-600">{t("result")}:</span>
          <span className={`text-3xl font-bold ${color}`}>{category}</span>
        </div>
      </div>
    </Card>
  );
}