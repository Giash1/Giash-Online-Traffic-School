
// This file is now a static English lesson file for fallback or reference only.
// For actual usage, use lesson1-introduction.en.ts and lesson1-introduction.sv.ts, etc.

import type { Lesson } from '../lessonData';
import type { LanguageCode } from '../../i18n';

export const lesson1: Lesson = {
  id: 1,
  title: 'Introduction to Swedish Driving License',
  description: 'Learn about the process of obtaining a Swedish driving license',
  pages: [
    {
      id: 1,
      title: 'Welcome to the Swedish Driving License Course',
      sections: [
        {
          heading: 'What is a Swedish Driving License?',
          content: [
            'A Swedish driving license allows you to legally drive in Sweden and is recognized throughout the EU.'
          ],
          list: {
            type: 'bullet',
            items: [
              'Proof of driving competence',
              'Required for most vehicles',
              'Accepted as ID in Sweden',
            ]
          }
        },
        {
          heading: 'How to Get Started',
          content: [
            'Apply for a learner’s permit (körkortstillstånd).',
            'Complete mandatory risk education.'
          ]
        },
        {
          heading: 'Why Take This Course?',
          content: [],
          list: {
            type: 'bullet',
            items: [
              'Covers all theory topics',
              'Practice quizzes included',
              'Learn at your own pace',
              'Available in multiple languages',
            ]
          }
        }
      ]
    },
    {
      id: 2,
      title: "Theory Test Information",
      sections: [
        {
          heading: "Test Format",
          subheading: "65 questions + 5 trial (unscored) questions.",
          content: [
            "The theory test includes 65 scored multiple-choice questions. Five additional trial questions may appear but do not affect the score."
          ]
        },
        {
          heading: "Requirements to Pass",
          content: [],
          list: {
            type: 'bullet',
            items: [
              "52 correct answers out of 65 (80%) are required to pass.",
              "You will have 50 minutes to complete the test.",
              "You will be informed immediately whether you have passed or failed the theory test; results are often emailed."
            ]
          }
        }
      ]
    },
    {
      id: 3,
      title: "Validity, Booking, and Next Steps",
      sections: [
        {
          heading: "Core points (summary)",
          content: [
            "After you pass the theory test, the result is valid for 4 months. You must pass the theory test before you can take the driving test. The theory test is booked online via the Swedish Transport Agency (Trafikverket). If you pass the driver’s test, you get your license, but you’ll have a 2-year probation period—serious traffic violations can lead to losing the license and needing to retake tests and risk courses."
          ],
          list: {
            type: 'bullet',
            items: [
              "Theory test result validity: 4 months.",
              "You cannot take the driving test until you have passed the theory test.",
              "Book online via Trafikverket: https://fp.trafikverket.se/Boka/#/.",
              "Driving license category: Passenger car (B license).",
              "After passing the driver’s test: 2-year trial period; violations can mean losing the license and retaking tests/risk courses."
            ]
          }
        }
      ]
    },
    {
      id: 4,
      title: "Driving Licence Rules (B – Passenger Car)",
      sections: [
        {
          heading: "Minimum age",
          subheading: "B licence (passenger car)",
          content: [
            "Minimum age to obtain a B driving licence is 18 years. There are no exceptions."
          ]
        },
        {
          heading: "Before you practice",
          subheading: "Learner’s Permit (körkortstillstånd)",
          content: [
            "A learner’s permit is required before you start any driving practice—whether you train at a traffic school or practice privately."
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Practice Options by Age",
      sections: [
        {
          heading: "Learners aged 16–17",
          subheading: "Practice only (cannot obtain a licence yet)",
          content: [
            "At ages 16–17, you may practice driving but you cannot obtain a B driving licence. A learner’s permit is mandatory before any practice."
          ],
          list: {
            type: 'bullet',
            items: [
              "Traffic school: Allowed from 16 with a learner’s permit and a licensed instructor.",
              "Private practice: Allowed from 16 with a learner’s permit and an approved supervisor (Handledare).",
              "Supervisor rules: Must be at least 24 years old, have held a valid licence for at least 5 of the last 10 years, and must apply for and be approved as a supervisor by Transportstyrelsen.",
              "Introductory course: Mandatory for both learner and supervisor before private practice."
            ]
          }
        },
        {
          heading: "Learners aged 18+",
          subheading: "Eligible to obtain a driving licence",
          content: [
            "At age 18 and above, you are eligible to obtain a B driving licence. A learner’s permit is still mandatory before starting practice."
          ],
          list: {
            type: 'bullet',
            items: [
              "Traffic school: Allowed with a learner’s permit and a licensed instructor.",
              "Private practice: Allowed with the same supervisor requirements as ages 16–17.",
              "Introductory course: Still mandatory for both learner and supervisor before private practice."
            ]
          }
        }
      ]
    }
  ]
};

const lesson1ByLanguage: Partial<Record<LanguageCode, Lesson>> = {
  // Swedish (already present)
  sv: {
    id: 1,
    title: 'Introduktion till svenskt körkort',
    description: 'Lär dig om processen för att ta svenskt körkort',
    pages: [
      {
        id: 1,
        title: 'Kom igång',
        sections: [
          {
            heading: 'TEORIPROV: FORMAT & GODKÄNNANDEKRAV',
            content: ['Översikt av teoriprovets upplägg och hur poängsättningen fungerar.'],
            list: {
              type: 'bullet',
              items: [
                'Provformat: 65 frågor + 5 testfrågor (testfrågorna räknas inte).',
                'Godkänt krav: 52 rätt av 65 (80%).',
                'Tid: 50 minuter. Resultat visas direkt och skickas via e‑post.'
              ]
            }
          },
          {
            heading: 'Vad provet omfattar',
            content: [
              'Teoriprovet hämtar frågor från huvudområdena som används i svensk körkortsutbildning (se avsnittslistan).',
              'Studera varje avsnitt noggrant och använd övningsprov för att kontrollera dina kunskaper innan du bokar provet.'
            ]
          },
          {
            heading: 'Synundersökning och ansök om körkortstillstånd:',
            content: [],
            list: {
              type: 'bullet',
              items: [
                'Du behöver göra en synundersökning på en trafikskola eller hos en optiker.',
                'De kan hjälpa dig att ansöka om körkortstillstånd hos Transportstyrelsen elektroniskt.',
                'Risk 1 och Risk 2 via valfri trafikskola.',
                'https://korkortsjakten.se/introduktionskurser/stockholm.'
              ]
            }
          }
        ]
      },
      {
        id: 2,
        title: 'Information om teoriprovet',
        sections: [
          {
            heading: 'Provformat',
            subheading: '65 frågor + 5 testfrågor (räknas inte).',
            content: [
              'Teoriprovet innehåller 65 poänggivande flervalsfrågor. Fem extra testfrågor kan förekomma men påverkar inte resultatet.'
            ]
          },
          {
            heading: 'Krav för att bli godkänd',
            content: [],
            list: {
              type: 'bullet',
              items: [
                '52 rätt av 65 (80%) krävs för att bli godkänd.',
                'Du har 50 minuter på dig att genomföra provet.',
                'Du får besked direkt om du blivit godkänd eller underkänd; resultatet skickas ofta via e‑post.'
              ]
            }
          }
        ]
      },
      {
        id: 3,
        title: 'Giltighet, bokning och nästa steg',
        sections: [
          {
            heading: 'Kärnpunkter (kort sammanfattning)',
            content: [
              'När du har klarat teoriprovet är resultatet giltigt i 4 månader. Du måste ha klarat teoriprovet innan du kan göra körprovet. Teoriprovet bokas online via Trafikverket. Om du klarar körprovet får du körkort, men du har en 2-årig prövotid—allvarliga trafikförseelser kan leda till att körkortet dras in och att du behöver göra om prov och riskutbildningar.'
            ],
            list: {
              type: 'bullet',
              items: [
                'Teoriprovets giltighet: 4 månader.',
                'Du kan inte göra körprovet förrän du har klarat teoriprovet.',
                'Boka via Trafikverket: https://fp.trafikverket.se/Boka/#/.',
                'Körkortskategori: Personbil (B-körkort).',
                'Efter godkänt körprov: 2-årig prövotid; överträdelser kan innebära indraget körkort och att du behöver göra om prov/riskutbildningar.'
              ]
            }
          }
        ]
      },
      {
        id: 4,
        title: 'Körkortsregler (B – Personbil)',
        sections: [
          {
            heading: 'Minimiålder',
            subheading: 'B-körkort (personbil)',
            content: ['Minimiålder för att ta B-körkort är 18 år. Det finns inga undantag.']
          },
          {
            heading: 'Innan du övningskör',
            subheading: 'Körkortstillstånd (körkortstillstånd)',
            content: [
              'Körkortstillstånd krävs innan du börjar övningsköra—oavsett om du kör på trafikskola eller privat.'
            ]
          }
        ]
      },
      {
        id: 5,
        title: 'Övningskörning beroende på ålder',
        sections: [
          {
            heading: 'Elever 16–17 år',
            subheading: 'Endast övning (kan inte få körkort ännu)',
            content: [
              'Vid 16–17 år får du övningsköra men du kan inte ta B-körkort. Körkortstillstånd är obligatoriskt innan all övningskörning.'
            ],
            list: {
              type: 'bullet',
              items: [
                'Trafikskola: Tillåtet från 16 år med körkortstillstånd och behörig handledare/instruktör.',
                'Privat övningskörning: Tillåtet från 16 år med körkortstillstånd och godkänd handledare (Handledare).',
                'Handledarkrav: Minst 24 år, haft giltigt körkort i minst 5 av de senaste 10 åren, och måste ansöka och bli godkänd som handledare av Transportstyrelsen.',
                'Introduktionsutbildning: Obligatorisk för både elev och handledare innan privat övningskörning.'
              ]
            }
          },
          {
            heading: 'Elever 18+ år',
            subheading: 'Kan ta körkort',
            content: [
              'Från 18 år kan du ta B-körkort. Körkortstillstånd är fortfarande obligatoriskt innan du börjar övningsköra.'
            ],
            list: {
              type: 'bullet',
              items: [
                'Trafikskola: Tillåtet med körkortstillstånd och behörig instruktör.',
                'Privat övningskörning: Tillåtet med samma handledarkrav som för 16–17 år.',
                'Introduktionsutbildning: Obligatorisk för både elev och handledare innan privat övningskörning.'
              ]
            }
          }
        ]
      }
    ]
  },
  // Bengali
  ban: {
    id: 1,
    title: 'স্বিডিশ ড্রাইভিং লাইসেন্স পরিচিতি (placeholder)',
    description: 'স্বিডিশ ড্রাইভিং লাইসেন্স পাওয়ার প্রক্রিয়া সম্পর্কে জানুন (placeholder)',
    pages: [
      { id: 1, title: 'শুরু করুন (placeholder)', sections: [ { heading: 'থিওরি টেস্ট: ফরম্যাট ও পাসের নিয়ম (placeholder)', content: ['এই অংশের বাংলা অনুবাদ এখানে আসবে।'], list: { type: 'bullet', items: ['placeholder'] } } ] },
      { id: 2, title: 'থিওরি টেস্ট তথ্য (placeholder)', sections: [ { heading: 'টেস্ট ফরম্যাট (placeholder)', subheading: 'placeholder', content: ['placeholder'] } ] },
      { id: 3, title: 'বৈধতা, বুকিং ও পরবর্তী ধাপ (placeholder)', sections: [ { heading: 'মূল পয়েন্ট (placeholder)', content: ['placeholder'], list: { type: 'bullet', items: ['placeholder'] } } ] },
      { id: 4, title: 'ড্রাইভিং লাইসেন্স নিয়ম (placeholder)', sections: [ { heading: 'ন্যূনতম বয়স (placeholder)', subheading: 'placeholder', content: ['placeholder'] } ] },
      { id: 5, title: 'বয়স অনুযায়ী অনুশীলন (placeholder)', sections: [ { heading: '১৬-১৭ বছর (placeholder)', subheading: 'placeholder', content: ['placeholder'], list: { type: 'bullet', items: ['placeholder'] } } ] }
    ]
  },
  // Arabic
  ar: {
    id: 1,
    title: 'مقدمة لرخصة القيادة السويدية (placeholder)',
    description: 'تعرف على عملية الحصول على رخصة القيادة السويدية (placeholder)',
    pages: [
      { id: 1, title: 'البدء (placeholder)', sections: [ { heading: 'اختبار النظري: الشكل والمعايير (placeholder)', content: ['سيتم إضافة الترجمة العربية هنا.'], list: { type: 'bullet', items: ['placeholder'] } } ] },
      { id: 2, title: 'معلومات اختبار النظري (placeholder)', sections: [ { heading: 'شكل الاختبار (placeholder)', subheading: 'placeholder', content: ['placeholder'] } ] },
      { id: 3, title: 'الصلاحية والحجز والخطوات التالية (placeholder)', sections: [ { heading: 'النقاط الأساسية (placeholder)', content: ['placeholder'], list: { type: 'bullet', items: ['placeholder'] } } ] },
      { id: 4, title: 'قواعد رخصة القيادة (placeholder)', sections: [ { heading: 'الحد الأدنى للعمر (placeholder)', subheading: 'placeholder', content: ['placeholder'] } ] },
      { id: 5, title: 'خيارات التدريب حسب العمر (placeholder)', sections: [ { heading: 'الأعمار 16-17 (placeholder)', subheading: 'placeholder', content: ['placeholder'], list: { type: 'bullet', items: ['placeholder'] } } ] }
    ]
  },
  // Farsi
  fa: {
    id: 1,
    title: 'مقدمه‌ای بر گواهینامه رانندگی سوئد (placeholder)',
    description: 'درباره فرآیند دریافت گواهینامه رانندگی سوئد بیاموزید (placeholder)',
    pages: [
      { id: 1, title: 'شروع کنید (placeholder)', sections: [ { heading: 'آزمون تئوری: قالب و معیارها (placeholder)', content: ['ترجمه فارسی این بخش در اینجا قرار می‌گیرد.'], list: { type: 'bullet', items: ['placeholder'] } } ] },
      { id: 2, title: 'اطلاعات آزمون تئوری (placeholder)', sections: [ { heading: 'قالب آزمون (placeholder)', subheading: 'placeholder', content: ['placeholder'] } ] },
      { id: 3, title: 'اعتبار، رزرو و مراحل بعدی (placeholder)', sections: [ { heading: 'نکات کلیدی (placeholder)', content: ['placeholder'], list: { type: 'bullet', items: ['placeholder'] } } ] },
      { id: 4, title: 'قوانین گواهینامه رانندگی (placeholder)', sections: [ { heading: 'حداقل سن (placeholder)', subheading: 'placeholder', content: ['placeholder'] } ] },
      { id: 5, title: 'گزینه‌های تمرین بر اساس سن (placeholder)', sections: [ { heading: 'سنین ۱۶-۱۷ (placeholder)', subheading: 'placeholder', content: ['placeholder'], list: { type: 'bullet', items: ['placeholder'] } } ] }
    ]
  },
  // Ukrainian
  ua: {
    id: 1,
    title: 'Вступ до шведських водійських прав (placeholder)',
    description: 'Дізнайтеся про процес отримання шведських водійських прав (placeholder)',
    pages: [
      { id: 1, title: 'Початок (placeholder)', sections: [ { heading: 'Теоретичний тест: формат і критерії (placeholder)', content: ['Тут буде український переклад.'], list: { type: 'bullet', items: ['placeholder'] } } ] },
      { id: 2, title: 'Інформація про теоретичний тест (placeholder)', sections: [ { heading: 'Формат тесту (placeholder)', subheading: 'placeholder', content: ['placeholder'] } ] },
      { id: 3, title: 'Дійсність, бронювання та наступні кроки (placeholder)', sections: [ { heading: 'Основні моменти (placeholder)', content: ['placeholder'], list: { type: 'bullet', items: ['placeholder'] } } ] },
      { id: 4, title: 'Правила отримання прав (placeholder)', sections: [ { heading: 'Мінімальний вік (placeholder)', subheading: 'placeholder', content: ['placeholder'] } ] },
      { id: 5, title: 'Варіанти практики за віком (placeholder)', sections: [ { heading: 'Вік 16–17 (placeholder)', subheading: 'placeholder', content: ['placeholder'], list: { type: 'bullet', items: ['placeholder'] } } ] }
    ]
  },
  // Urdu
  ur: {
    id: 1,
    title: 'سویڈش ڈرائیونگ لائسنس تعارف (placeholder)',
    description: 'سویڈش ڈرائیونگ لائسنس حاصل کرنے کے عمل کے بارے میں جانیں (placeholder)',
    pages: [
      { id: 1, title: 'شروع کریں (placeholder)', sections: [ { heading: 'تھیوری ٹیسٹ: فارمیٹ اور معیار (placeholder)', content: ['اس حصے کا اردو ترجمہ یہاں آئے گا۔'], list: { type: 'bullet', items: ['placeholder'] } } ] },
      { id: 2, title: 'تھیوری ٹیسٹ کی معلومات (placeholder)', sections: [ { heading: 'ٹیسٹ فارمیٹ (placeholder)', subheading: 'placeholder', content: ['placeholder'] } ] },
      { id: 3, title: 'درستگی، بکنگ اور اگلے اقدامات (placeholder)', sections: [ { heading: 'اہم نکات (placeholder)', content: ['placeholder'], list: { type: 'bullet', items: ['placeholder'] } } ] },
      { id: 4, title: 'ڈرائیونگ لائسنس کے قواعد (placeholder)', sections: [ { heading: 'کم از کم عمر (placeholder)', subheading: 'placeholder', content: ['placeholder'] } ] },
      { id: 5, title: 'عمر کے حساب سے پریکٹس کے اختیارات (placeholder)', sections: [ { heading: 'عمر 16–17 (placeholder)', subheading: 'placeholder', content: ['placeholder'], list: { type: 'bullet', items: ['placeholder'] } } ] }
    ]
  }
};

export const getLesson1Localized = (language: string): Lesson => {
  const lang = language as LanguageCode;
  return lesson1ByLanguage[lang] ?? lesson1;
};
