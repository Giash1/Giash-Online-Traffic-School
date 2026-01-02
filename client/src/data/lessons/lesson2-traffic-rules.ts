import { Lesson } from '../lessonData';

export const lesson2: Lesson = {
  id: 2,
  title: "Traffic Rules",
  description: "Comprehensive coverage of road signs, right-of-way rules, speed limits, intersections, roundabouts, overtaking, parking regulations, and rules for all road users - 32 questions",
  pages: [
    {
      id: 1,
      title: "Basic Traffic Rules",
      sections: [
        {
          heading: 'Rules of the road, for example: 32 questions',
          content: [
            'Road signs, road markings, speed limits, meeting oncoming traffic and overtaking, cargo, passengers, and obligations to other road users.'
          ],
          list: {
            type: 'bullet',
            items: [
              'Understand common road markings and what they require drivers to do.',
              'Speed limits and when they change (urban, rural, motorways).',
              'Rules for overtaking, meeting oncoming traffic and carrying cargo or passengers.'
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
            "At Swedish intersections, the main goal is to make meetings between different traffic streams as safe and predictable as possible. Drivers are guided by a clear order of rules: first by any traffic signals, then by signs such as väjningsplikt (yield) and stoppskylt (stop), and finally by the basic priority rules when no control exists. Where no traffic lights, priority signs, or roundabout rules apply, the right‑hand rule governs, meaning that vehicles coming from the right have precedence. Pedestrians and cyclists who are using, or clearly about to use, a marked crossing at an intersection must be given space and time to pass safely, and drivers are expected to adjust their speed in advance so that interaction becomes smooth rather than sudden."
          ],
          video: {
            src: "/intersection.mp4",
            caption: "Understanding intersections in Sweden",
            poster: "/road-traffic-thumb.jpg.png"
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
              'Yield to vehicles already in the roundabout',
              'Signal your exit well in advance',
              'Choose the correct lane in time',
              'Cyclists may have separate arrangements (bicycle crossings)'
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
