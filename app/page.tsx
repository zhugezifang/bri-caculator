'use client';

import { useState } from 'react';
import { Ruler } from 'lucide-react';
import { translations, Language, TranslationKey } from './i18n/translations';
import { LanguageSwitcher } from './components/language-switcher';
import { BRICalculatorForm } from './components/bri-calculator-form';
import { BRIResult } from './components/bri-result';
import { BRIChart } from './components/bri-chart';
import { FAQSection } from './components/faq-section';
import { Footer } from './components/footer';

export default function Home() {
  const [bri, setBri] = useState<number | null>(null);
  const [lang, setLang] = useState<Language>('en');

  const t = (key: TranslationKey) => translations[lang][key];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <Ruler className="w-8 h-8 text-blue-600" />
              <span className="text-3xl font-bold text-gray-800">
                {t('title')}
              </span>
            </div>
            <LanguageSwitcher
              currentLang={lang}
              onLanguageChange={setLang}
              t={t}
            />
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-gray-800 text-center py-4">
              {t('title_2')}
            </h1>
            <p className="text-lg text-gray-600 text-center mb-8">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <BRICalculatorForm onCalculate={setBri} t={t} />
            {bri !== null && <BRIResult bri={bri} t={t} />}
          </div>

          {bri !== null && (
            <div className="mb-12">
              <BRIChart bri={bri} t={t} />
            </div>
          )}

          <FAQSection t={t} />
        </div>
      </main>

      <Footer t={t} />
    </div>
  );
}
