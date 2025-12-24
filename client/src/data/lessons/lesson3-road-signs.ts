import { Lesson } from '../lessonData';

export const lesson3: Lesson = {
  id: 3,
  title: "Actions and Reactions",
  description: "How substances, fatigue and external factors affect driver behaviour",
  pages: [
    {
      id: 1,
      title: 'Actions and Reactions',
      sections: [
        {
          heading: 'Actions and reactions, for example: 5 questions',
          content: [
            'How medicines, alcohol, other drugs, stress, and tiredness can affect driver behavior.',
            'How driving at various times of day can affect driver behavior and road safety.',
            'How peer pressure can affect driver behavior and road safety.'
          ],
          list: {
            type: 'bullet',
            items: [
              'Effects of alcohol and medicines on reaction time and judgment.',
              'How fatigue reduces attention and increases crash risk.',
              'How stress and emotions can alter driving decisions.'
            ]
          }
        }
      ]
    }
  ]
};
