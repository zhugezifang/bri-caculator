export const translations = {
  en: {
    title: 'BRI Calculator',
    title_2: 'Free Body Roundness Index(BRI) Calculator',
    subtitle: 'Calculate your Body Roundness Index',
    unit: 'Unit',
    metric: 'Metric (cm)',
    imperial: 'Imperial (inches)',
    gender: 'Gender',
    male: 'Male',
    female: 'Female',
    height: 'Height',
    waistCircumference: 'Waist Circumference',
    age: 'Age (optional)',
    calculate: 'Calculate BRI',
    result: 'Your BRI Result',
    briScale: 'BRI Scale',
    yourBri: 'Your BRI',
    interpretation: 'BRI Interpretation',
    normal: 'Normal',
    overweight: 'Overweight',
    obese: 'Obese',
    enterHeight: 'Enter height',
    enterWaist: 'Enter waist circumference',
    enterAge: 'Enter age (optional)',
    selectLanguage: 'Select Language',
    // FAQ translations
    faqTitle: 'Frequently Asked Questions',
    faqWhat: 'What is Body Roundness Index (BRI)?',
    faqWhatAnswer:
      'Body Roundness Index (BRI) is a measure that combines height and waist circumference to estimate body shape and fat distribution. It was developed as an alternative to BMI for assessing health risks.',
    faqHow: 'How is BRI calculated?',
    faqHowAnswer:
      'BRI is calculated using a complex mathematical formula that considers your height and waist circumference. The formula creates a number that represents how close or far your body shape is from a cylinder.',
    faqWhy: 'Why use BRI instead of BMI?',
    faqWhyAnswer:
      'BRI may be more accurate than BMI because it takes into account body shape and fat distribution. Central obesity (excess fat around the waist) is a better predictor of health risks than overall body weight.',
    faqDifference: "What's a healthy BRI range?",
    faqDifferenceAnswer:
      'A BRI below 4.0 is considered normal, 4.0-5.0 indicates overweight, and above 5.0 suggests obesity. However, these ranges may vary based on factors like age, gender, and ethnicity.',
    // Footer translations
    about: 'About',
    aboutText:
      'The BRI Calculator helps you assess your body shape and potential health risks using the Body Roundness Index, a modern alternative to BMI.',
    resources: 'Resources',
    documentation: 'Documentation',
    research: 'Research Papers',
    privacy: 'Privacy Policy',
    connect: 'Connect',
    rights: 'All rights reserved.',
  },
  zh: {
    title: '身体圆度指数 (BRI) 计算器',
    title_2: '身体圆度指数 (BRI) 计算器',
    subtitle: '计算您的身体圆度指数',
    unit: '单位',
    metric: '公制 (厘米)',
    imperial: '英制 (英寸)',
    gender: '性别',
    male: '男性',
    female: '女性',
    height: '身高',
    waistCircumference: '腰围',
    age: '年龄（可选）',
    calculate: '计算 BRI',
    result: '您的 BRI 结果',
    briScale: 'BRI 范围',
    yourBri: '您的 BRI',
    interpretation: 'BRI 解释',
    normal: '正常',
    overweight: '超重',
    obese: '肥胖',
    enterHeight: '输入身高',
    enterWaist: '输入腰围',
    enterAge: '输入年龄（可选）',
    selectLanguage: '选择语言',
    // FAQ translations
    faqTitle: '常见问题',
    faqWhat: '什么是身体圆度指数（BRI）？',
    faqWhatAnswer:
      '身体圆度指数（BRI）是一个结合身高和腰围来估计身体形状和脂肪分布的指标。它是作为BMI的替代方案而开发的，用于评估健康风险。',
    faqHow: 'BRI是如何计算的？',
    faqHowAnswer:
      'BRI使用一个复杂的数学公式计算，该公式考虑了您的身高和腰围。该公式创建一个数字，表示您的体型与圆柱体的接近或远离程度。',
    faqWhy: '为什么使用BRI而不是BMI？',
    faqWhyAnswer:
      'BRI可能比BMI更准确，因为它考虑了体型和脂肪分布。中心性肥胖（腰部周围的过量脂肪）比整体体重更能预测健康风险。',
    faqDifference: '健康的BRI范围是多少？',
    faqDifferenceAnswer:
      'BRI低于4.0被认为是正常的，4.0-5.0表示超重，高于5.0表示肥胖。但是，这些范围可能会因年龄、性别和种族等因素而有所不同。',
    // Footer translations
    about: '关于我们',
    aboutText:
      'BRI计算器帮助您使用身体圆度指数评估身体形状和潜在健康风险，这是BMI的现代替代方案。',
    resources: '资源',
    documentation: '文档',
    research: '研究论文',
    privacy: '隐私政策',
    connect: '联系我们',
    rights: '版权所有。',
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
