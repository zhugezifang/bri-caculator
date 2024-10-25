import { Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  t: (key: string) => string;
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="mt-16 pb-8 text-gray-600">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{t("about")}</h3>
              <p className="text-base leading-relaxed">{t("aboutText")}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{t("resources")}</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-base hover:text-blue-600 transition-colors">
                    {t("documentation")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base hover:text-blue-600 transition-colors">
                    {t("research")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base hover:text-blue-600 transition-colors">
                    {t("privacy")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{t("connect")}</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="hover:bg-blue-50">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-blue-50">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-base">© 2024 BRI Calculator. {t("rights")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}