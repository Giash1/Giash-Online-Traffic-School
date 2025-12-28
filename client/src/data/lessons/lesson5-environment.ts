import { Lesson } from '../lessonData';

export const lesson5: Lesson = {
  id: 5,
  title: "Environment",
  description: "Eco-driving techniques, fuel efficiency, emissions reduction, tire pressure management, and environmental impact of driving - 5 questions",
  pages: [
    {
      id: 1,
      title: 'Environment & Eco-friendly Driving',
      sections: [
        {
          heading: 'The environment, for example: 5 questions',
          content: [
            'How the means of transport you choose can affect the environment.',
            'How to drive the vehicle in a safe, eco-friendly manner.'
          ],
          list: {
            type: 'bullet',
            items: [
              'Choosing efficient routes and maintaining steady speed to reduce fuel consumption.',
              'Reducing idling time and using eco-driving techniques.',
              'The environmental impact of vehicle choice and maintenance.'
            ]
          }
        }
      ]
    }
  ]
};
