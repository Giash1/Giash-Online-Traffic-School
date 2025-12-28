import { Lesson } from '../lessonData';

export const lesson4: Lesson = {
  id: 4,
  title: "Vehicle Knowledge & Maneuvering",
  description: "Learn about brakes, tires, lights, safety equipment, cargo loading, vehicle inspection, and maneuvering techniques - 7 questions",
  pages: [
    {
      id: 1,
      title: 'Vehicle Knowledge Overview',
      sections: [
        {
          heading: 'Vehicle knowledge and maneuvering, for example: 7 questions',
          content: [
            'How the vehicle works, and how the road conditions affect its driving characteristics.',
            'Risks may arise if the vehicle fails to function properly.',
            'The link between driving technique and the vehicle’s behavior.'
          ],
          list: {
            type: 'bullet',
            items: [
              'How brakes, tyres and suspension affect handling.',
              'How load and passengers change vehicle behavior.',
              'Basic vehicle maintenance that affects safety.'
            ]
          }
        }
      ]
    }
  ]
};
