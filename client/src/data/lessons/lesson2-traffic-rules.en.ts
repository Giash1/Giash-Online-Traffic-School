import type { Lesson } from '../lessonData';

export const lesson2: Lesson = {
  id: 2,
  title: "Traffic Rules",
  description: "Understanding traffic regulations and road positioning in Sweden",
  pages: [
    {
      id: 1,
      title: "Basic Road Terminology",
      sections: [
        {
          heading: "Understanding Road Components",
          content: [
            "Before diving into traffic rules, it's essential to understand the basic terminology used to describe different parts of the road."
          ]
        },

        // Video moved here (from old page 2)
        {
          heading: "Road with different parts",
          content: [
            "Watch the video below to understand Road with different parts."
          ],
          video: {
            src: "/roadwithdifferentparts.mp4.mp4",
            caption: "Understanding the different parts of road",
            poster: "/road-traffic-thumb.jpg.png"
          }
        },

        {
          heading: "Road",
          content: [
            "The whole area from property line to property line — includes carriageway, shoulders, verges, ditches, and sidewalks."
          ]
        },
        {
          heading: "Carriageway",
          content: [
            "The main part of the road for vehicle traffic; may have one or more."
          ]
        },
        {
          heading: "Lane",
          content: [
            "A marked part of the carriageway wide enough for one line of vehicles."
          ]
        },
        {
          heading: "Hard Shoulder",
          content: [
            "A paved strip beside the carriageway, used only for emergencies."
          ]
        },
        {
          heading: "Visual Analogy",
          content: [
            "Think of it like a sandwich:"
          ],
          list: {
            type: 'bullet',
            items: [
              "Road = the whole sandwich",
              "Carriageway = the filling",
              "Lanes = slices within the filling",
              "Hard shoulder = the crust on the edge"
            ]
          }
        }
      ]
    },
    {
      id: 2,
      title: "Intersections",
      sections: [
        {
          heading: "Understanding Swedish Intersections",
          content: [
              "Intersections are designed to make traffic safe and predictable.",
        "Traffic lights have the highest priority.",
        "Yield and stop signs apply when signals are not present.",
        "If no signs exist, the right-hand rule is used.",
        "Vehicles from the right have priority.",
        "Pedestrians and cyclists at marked crossings have priority.",
        "Drivers must slow down and be prepared."
          ],
          video: {
            src: "/intersection.mp4",
            caption: "Understanding intersections in Sweden",
            poster: "/intersection-thumb.jpg"
          }
        }
      ]
    },
    {
      id: 3,
      title: "Roundabouts",
      sections: [
        {
          heading: "Roundabouts in Sweden",
          content: [
            "A roundabout is a circular intersection where traffic moves counterclockwise around a central island. Traffic in the roundabout has the right of way."
          ],
          list: {
            type: 'bullet',
            items: [
              "Yield to vehicles already in the roundabout",
              "Signal your exit well in advance",
              "Choose the correct lane in time",
              "Cyclists may have separate arrangements (bicycle crossings)"
            ]
          },
          video: {
            src: "/roundabout.mp4",
            caption: "Navigating a roundabout safely",
            poster: "/roundabout.png"
          }
        }
      ]
    }
  ]
};