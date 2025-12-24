import { Lesson } from '../lessonData';

export const lesson1: Lesson = {
  id: 1,
  title: "Introduction to Swedish Driving License",
  description: "Learn about the process of obtaining a Swedish driving license",
  pages: [
    {
      id: 1,
      title: "Getting Started",
      sections: [
        {
          heading: "THEORY TEST: FORMAT & PASSING CRITERIA",
          content: [
            "Overview of the theory test structure and how scoring works."
          ],
          list: {
            type: 'bullet',
            items: [
              "Test format: 65 questions + 5 trial questions (trial questions do not count).",
              "Passing requirement: 52 correct out of 65 (80%).",
              "Time allowed: 50 minutes. Results are available immediately and sent by email."
            ]
          }
        },
        {
          heading: "What the test covers",
          content: [
            "The theory exam draws questions from the main topic sections used in Swedish driver licensing (see sections list).",
            "Study each section carefully and use practice tests to check your knowledge before booking the theory exam."
          ]
        },
        {
          heading: "Eye test and apply for a driving permit:",
          content: [],
          list: {
            type: 'bullet',
            items: [
              "You need to undergo an eye test at any driving school or optician's office.",
              "They will help you apply for a driving permit at Transportstyrelsen Electronically.",
              "Risk 1 and Risk 2 from any driving school",
              "https://korkortsjakten.se/introduktionskurser/stockholm."
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
    }
  ]
};
