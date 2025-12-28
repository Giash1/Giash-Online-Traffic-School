import type { Lesson } from '../lessonData';

export const lesson1: Lesson = {
  id: 1,
  title: "Introduktion till svenskt körkort",
  description: "Översikt över den svenska körkortsprocessen, inklusive testformat, bokningsförfaranden och väsentliga krav",
  pages: [
    {
      id: 1,
      title: "Kom igång",
      sections: [
        {
          heading: "TEORIPROV: FORMAT & GODKÄNNANDEKRAV",
          content: ["Översikt av teoriprovets upplägg och hur poängsättningen fungerar."],
          list: {
            type: 'bullet',
            items: [
              "Provformat: 65 frågor + 5 testfrågor (testfrågorna räknas inte).",
              "Godkänt krav: 52 rätt av 65 (80%).",
              "Tid: 50 minuter. Resultat visas direkt och skickas via e‑post."
            ]
          }
        },
        {
          heading: "Vad provet omfattar",
          content: [
            "Teoriprovet hämtar frågor från huvudområdena som används i svensk körkortsutbildning (se avsnittslistan).",
            "Studera varje avsnitt noggrant och använd övningsprov för att kontrollera dina kunskaper innan du bokar provet."
          ]
        },
        {
          heading: "Synundersökning och ansök om körkortstillstånd:",
          content: [],
          list: {
            type: 'bullet',
            items: [
              "Du behöver göra en synundersökning på en trafikskola eller hos en optiker.",
              "De kan hjälpa dig att ansöka om körkortstillstånd hos Transportstyrelsen elektroniskt.",
              "Risk 1 och Risk 2 via valfri trafikskola.",
              "https://korkortsjakten.se/introduktionskurser/stockholm."
            ]
          }
        }
      ]
    },
    {
      id: 2,
      title: "Information om teoriprovet",
      sections: [
        {
          heading: "Provformat",
          subheading: "65 frågor + 5 testfrågor (räknas inte).",
          content: [
            "Teoriprovet innehåller 65 poänggivande flervalsfrågor. Fem extra testfrågor kan förekomma men påverkar inte resultatet."
          ]
        },
        {
          heading: "Krav för att bli godkänd",
          content: [],
          list: {
            type: 'bullet',
            items: [
              "52 rätt av 65 (80%) krävs för att bli godkänd.",
              "Du har 50 minuter på dig att genomföra provet.",
              "Du får besked direkt om du blivit godkänd eller underkänd; resultatet skickas ofta via e‑post."
            ]
          }
        }
      ]
    },
    {
      id: 3,
      title: "Giltighet, bokning och nästa steg",
      sections: [
        {
          heading: "Kärnpunkter (kort sammanfattning)",
          content: [
            "När du har klarat teoriprovet är resultatet giltigt i 4 månader. Du måste ha klarat teoriprovet innan du kan göra körprovet. Teoriprovet bokas online via Trafikverket. Om du klarar körprovet får du körkort, men du har en 2-årig prövotid—allvarliga trafikförseelser kan leda till att körkortet dras in och att du behöver göra om prov och riskutbildningar."
          ],
          list: {
            type: 'bullet',
            items: [
              "Teoriprovets giltighet: 4 månader.",
              "Du kan inte göra körprovet förrän du har klarat teoriprovet.",
              "Boka via Trafikverket: https://fp.trafikverket.se/Boka/#/.",
              "Körkortskategori: Personbil (B-körkort).",
              "Efter godkänt körprov: 2-årig prövotid; överträdelser kan innebära indraget körkort och att du behöver göra om prov/riskutbildningar."
            ]
          }
        }
      ]
    },
    {
      id: 4,
      title: "Körkortsregler (B – Personbil)",
      sections: [
        {
          heading: "Minimiålder",
          subheading: "B-körkort (personbil)",
          content: ["Minimiålder för att ta B-körkort är 18 år. Det finns inga undantag."]
        },
        {
          heading: "Innan du övningskör",
          subheading: "Körkortstillstånd",
          content: [
            "Körkortstillstånd krävs innan du börjar övningsköra—oavsett om du kör på trafikskola eller privat."
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Övningskörning beroende på ålder",
      sections: [
        {
          heading: "Elever 16–17 år",
          subheading: "Endast övning (kan inte få körkort ännu)",
          content: [
            "Vid 16–17 år får du övningsköra men du kan inte ta B-körkort. Körkortstillstånd är obligatoriskt innan all övningskörning."
          ],
          list: {
            type: 'bullet',
            items: [
              "Trafikskola: Tillåtet från 16 år med körkortstillstånd och behörig handledare/instruktör.",
              "Privat övningskörning: Tillåtet från 16 år med körkortstillstånd och godkänd handledare (Handledare).",
              "Handledarkrav: Minst 24 år, haft giltigt körkort i minst 5 av de senaste 10 åren, och måste ansöka och bli godkänd som handledare av Transportstyrelsen.",
              "Introduktionsutbildning: Obligatorisk för både elev och handledare innan privat övningskörning."
            ]
          }
        },
        {
          heading: "Elever 18+ år",
          subheading: "Kan ta körkort",
          content: [
            "Från 18 år kan du ta B-körkort. Körkortstillstånd är fortfarande obligatoriskt innan du börjar övningsköra."
          ],
          list: {
            type: 'bullet',
            items: [
              "Trafikskola: Tillåtet med körkortstillstånd och behörig instruktör.",
              "Privat övningskörning: Tillåtet med samma handledarkrav som för 16–17 år.",
              "Introduktionsutbildning: Obligatorisk för både elev och handledare innan privat övningskörning."
            ]
          }
        }
      ]
    },
    {
      id: 6,
      title: "Körkortskategorier & Hälsokrav",
      sections: [
        {
          heading: "B-körkortskategori",
          subheading: "Vanligaste körkortet för personbilar",
          content: [
            "B-körkortet är standardkörkortet för personbilar i Sverige. Det tillåter dig att köra fordon upp till 3 500 kg med upp till 8 passagerarplatser."
          ],
          list: {
            type: 'bullet',
            items: [
              "Giltigt för bilar (personbil) och lätta lastbilar",
              "Tillåter dragning av släpvagnar upp till 750 kg",
              "Erkänt i hela EU/EES-området",
              "Kan uppgraderas till B96 eller BE för tyngre släpvagnar"
            ]
          }
        },
        {
          heading: "Medicinska & hälsokrav",
          subheading: "Syn- och hälsodeklarationer",
          content: [
            "Alla sökande måste uppfylla grundläggande hälsonormer för att säkerställa säker körning. Ett syntest är obligatoriskt, och vissa medicinska tillstånd måste deklareras."
          ],
          list: {
            type: 'bullet',
            items: [
              "Syntest: Krävs hos optiker eller trafikskola",
              "Minsta synskärpa: 0,5 i båda ögonen (med korrektion tillåten)",
              "Hälsodeklaration: Måste deklarera epilepsi, diabetes, hjärtsjukdomar, etc.",
              "Medicingenomgång: Vissa mediciner kan påverka körbehörigheten"
            ]
          }
        }
      ]
    },
    {
      id: 7,
      title: "Kostnader & Trafikskolor",
      sections: [
        {
          heading: "Förväntade kostnader",
          subheading: "Budgetplanering för ditt körkort",
          content: [
            "Att ta svenskt körkort innebär flera kostnader. Totalkostnaden ligger vanligtvis mellan 15 000 och 30 000 kr beroende på hur många lektioner du behöver."
          ],
          list: {
            type: 'bullet',
            items: [
              "Ansökan om körkortstillstånd: ~200 kr",
              "Risk 1 & Risk 2 kurser: ~3 000-4 000 kr totalt",
              "Teoriprov bokning: ~325 kr",
              "Körlektioner: ~700-900 kr per lektion (40-60 lektioner typiskt)",
              "Körprovsbokning: ~800 kr",
              "Körkortutfärdande: ~300 kr"
            ]
          }
        },
        {
          heading: "Välja trafikskola",
          subheading: "Trafikskola vs privat övningskörning",
          content: [
            "Du kan välja mellan att gå på en professionell trafikskola eller öva privat med en godkänd handledare. Många elever kombinerar båda metoderna."
          ],
          list: {
            type: 'bullet',
            items: [
              "Trafikskolor: Erbjuder strukturerade lektioner med certifierade instruktörer",
              "Privat övning: Lägre kostnad men kräver godkänd handledare och introduktionskurs",
              "Hybridmetod: Mest kostnadseffektivt för många elever",
              "Skolbilar: Dubbelmanuella fordon för säkrare lärande"
            ]
          }
        }
      ]
    },
    {
      id: 8,
      title: "Provrutiner & Tips",
      sections: [
        {
          heading: "Teoriprovsdagen",
          subheading: "Vad du kan förvänta dig på testcentret",
          content: [
            "Teoriprovet genomförs på godkända testcenter i hela Sverige. Du behöver ta med giltig legitimation och komma i tid."
          ],
          list: {
            type: 'bullet',
            items: [
              "Ta med: Giltig legitimation (pass eller nationellt ID-kort)",
              "Ankomst: Minst 15 minuter innan din provtid",
              "Provformat: Datorbaserade flervalsfrågor",
              "Tillgängliga språk: Svenska, engelska och flera andra språk",
              "Tidsgräns: 50 minuter för 65 frågor",
              "Resultat: Omedelbar godkänd/underkänd-besked"
            ]
          }
        },
        {
          heading: "Körprovsöversikt",
          subheading: "Praktisk examination",
          content: [
            "Körprovet varar cirka 30-40 minuter och testar dina praktiska körkunskaper i verkliga trafikförhållanden."
          ],
          list: {
            type: 'bullet',
            items: [
              "Varaktighet: 30-40 minuter faktisk körning",
              "Rutter: Inkluderar stadskörning, landsbygd och motorväg när möjligt",
              "Examinator: Certifierad examinator utvärderar dina färdigheter",
              "Fordon: Du kan använda trafikskolans bil eller privat bil (måste uppfylla krav)",
              "Säkerhetskontroll: Grundläggande fordonssäkerhetsfrågor innan körning"
            ]
          }
        }
      ]
    }
  ]
};
