import { Card } from "@/components/ui/card";

interface BMIResultProps {
  bmi: number;
  t: (key: string) => string;
}

export function BMIResult({ bmi, t }: BMIResultProps) {
  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: t("underweight"), color: "text-blue-500" };
    if (bmi < 25) return { category: t("normal"), color: "text-green-500" };
    if (bmi < 30) return { category: t("overweight"), color: "text-yellow-500" };
    return { category: t("obese"), color: "text-red-500" };
  };

  const { category, color } = getBMICategory(bmi);

  return (
    <Card className="p-6 w-full max-w-md mx-auto mt-8">
      <h3 className="text-lg font-semibold mb-4">{t("interpretation")}</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span>{t("yourBmi")}:</span>
          <span className={`font-bold ${color}`}>{bmi.toFixed(1)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>{t("result")}:</span>
          <span className={`font-bold ${color}`}>{category}</span>
        </div>
      </div>
    </Card>
  );
}