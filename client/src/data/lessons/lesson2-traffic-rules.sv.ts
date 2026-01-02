import type { Lesson } from '../lessonData';

export const lesson2: Lesson = {
  id: 2,
  title: "Trafikregler",
  description: "Förståelse för trafikregler och vägpositionering i Sverige",
  pages: [
    {
      id: 1,
      title: "Grundläggande vägterminologi",
      sections: [
        {
          heading: "Förstå vägens komponenter",
          content: [
            "Innan vi dyker in i trafikreglerna är det viktigt att förstå den grundläggande terminologin som används för att beskriva vägens olika delar."
          ]
        },
        {
          heading: "Vägbredd och positionering",
          content: [
            "Titta på videon nedan för att förstå vägens olika delar."
          ],
          video: {
            src: "/roadwithdifferentparts.mp4.mp4",
            caption: "Förstå vägens olika delar",
            poster: "/road-traffic-thumb.jpg.png"
          }
        },
        {
          heading: "Väg",
          content: [
            "Hela området från fastighetsgräns till fastighetsgräns — inkluderar körbana, vägren, vägkanter, diken och trottoarer."
          ]
        },
        {
          heading: "Körbana",
          content: [
            "Den huvudsakliga delen av vägen för fordonstrafik; kan ha en eller flera."
          ]
        },
        {
          heading: "Körfält",
          content: [
            "En markerad del av körbanan som är tillräckligt bred för en fil av fordon."
          ]
        },
        {
          heading: "Vägren",
          content: [
            "En asfalterad remsa bredvid körbanan, används endast för nödsituationer."
          ]
        },
        {
          heading: "Visuell analogi",
          content: [
            "Tänk på det som en smörgås:"
          ],
          list: {
            type: 'bullet',
            items: [
              "Väg = hela smörgåsen",
              "Körbana = fyllningen",
              "Körfält = skivor inom fyllningen",
              "Vägren = skorpan på kanten"
            ]
          }
        }
      ]
    },
    {
      id: 2,
      title: "Korsningar",
      sections: [
        {
          heading: "Förstå svenska korsningar",
          content: [
            "Korsningar är utformade för att göra trafiken säker och förutsägbar.",
        "Trafiksignaler har högsta prioritet.",
        "Väjningsplikt och stoppskylt gäller om signaler saknas.",
        "Om inga skyltar finns gäller högerregeln.",
        "Fordon från höger har företräde.",
        "Gående och cyklister på markerade övergångar har företräde.",
        "Förare ska sänka hastigheten och vara förberedda."
          ],
          video: {
            src: "/intersection.mp4",
            caption: "Förstå korsningar i Sverige",
            poster: "/intersection-thumb.jpg"
          }
        }
      ]
    },
    {
      id: 3,
      title: "Rondeller",
      sections: [
        {
          heading: "Rondeller i Sverige",
          content: [
            "En rondell är en cirkulär korsning där trafiken rör sig moturs runt en central ö och har företräde."
          ],
          list: {
            type: 'bullet',
            items: [
              "Ge företräde åt fordon som redan befinner sig i rondellen",
              "Signalera din avfart i god tid",
              "Välj rätt körfält i tid",
              "Cyklande kan ha särskilda lösningar (cykelöverfarter)"
            ]
          },
          video: {
            src: "/roundabout.mp4",
            caption: "Rondellregler i Sverige",
            poster: "/roundabout.png"
          }
        }
      ]
    }
  ]
};