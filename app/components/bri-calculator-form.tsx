"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BRICalculatorFormProps {
  onCalculate: (bri: number) => void;
  t: (key: string) => string;
}

export function BRICalculatorForm({ onCalculate, t }: BRICalculatorFormProps) {
  const [unit, setUnit] = useState("metric");
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [waist, setWaist] = useState("");
  const [age, setAge] = useState("");

  const calculateBRI = () => {
    const h = parseFloat(height);
    const w = parseFloat(waist);
    
    if (h > 0 && w > 0) {
      const heightInM = unit === "metric" ? h / 100 : h * 0.0254;
      const waistInM = unit === "metric" ? w / 100 : w * 0.0254;
      
      const waistTerm = waistInM / (2 * Math.PI);
      const heightTerm = 0.5 * heightInM;
      const bri = 364.2 - (365.5 * Math.sqrt(1 - ((waistTerm * waistTerm) / (heightTerm * heightTerm))));
      
      onCalculate(bri);
    }
  };

  return (
    <Card className="p-8 bg-white shadow-lg">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>{t("unit")}</Label>
            <Select value={unit} onValueChange={setUnit}>
              <SelectTrigger>
                <SelectValue placeholder={t("metric")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="metric">{t("metric")}</SelectItem>
                <SelectItem value="imperial">{t("imperial")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>{t("gender")}</Label>
            <Select value={gender} onValueChange={setGender}>
              <SelectTrigger>
                <SelectValue placeholder={t("male")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">{t("male")}</SelectItem>
                <SelectItem value="female">{t("female")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="height">{t("height")}</Label>
          <Input
            id="height"
            type="number"
            placeholder={t("enterHeight")}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="text-lg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="waist">{t("waistCircumference")}</Label>
          <Input
            id="waist"
            type="number"
            placeholder={t("enterWaist")}
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            className="text-lg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="age">{t("age")}</Label>
          <Input
            id="age"
            type="number"
            placeholder={t("enterAge")}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="text-lg"
          />
        </div>

        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6"
          onClick={calculateBRI}
          disabled={!height || !waist}
        >
          {t("calculate")}
        </Button>
      </div>
    </Card>
  );
}