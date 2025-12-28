import { Lesson } from '../lessonData';

export const lesson6: Lesson = {
  id: 6,
  title: "Traffic Safety",
  description: "Risk assessment, safe distance, adapting to weather conditions, night driving, child safety, accident prevention, and maintaining attention - 16 questions",
  pages: [
    {
      id: 1,
      title: 'Road Safety Fundamentals',
      sections: [
        {
          heading: 'Road safety, for example: 16 questions',
          content: [
            'What it means to demonstrate good judgment when interacting with other road users.',
            'How to adapt your speed, distance, and other driving parameters to various situations.',
            'How different road conditions and environments affect driver behavior and road safety.'
          ],
          list: {
            type: 'bullet',
            items: [
              'Keeping safe following distances and choosing appropriate speed for conditions.',
              'Anticipating hazards and adjusting driving accordingly.',
              'Recognizing how weather and road surfaces influence stopping distances.'
            ]
          }
        }
      ]
    }
  ]
};
