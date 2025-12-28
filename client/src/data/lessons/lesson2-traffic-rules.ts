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
    }
  ]
};
