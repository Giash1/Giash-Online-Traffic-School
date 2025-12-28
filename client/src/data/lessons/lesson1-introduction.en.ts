import type { Lesson } from '../lessonData';

export const lesson1: Lesson = {
  id: 1,
  title: "Introduction to Swedish Driving License",
  description: "Overview of the Swedish driving license process, including test format, booking procedures, and essential requirements",
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
    },
    {
      id: 3,
      title: "Validity, Booking, and Next Steps",
      sections: [
        {
          heading: "Core points (summary)",
          content: [
            "After you pass the theory test, the result is valid for 4 months. You must pass the theory test before you can take the driving test. The theory test is booked online via the Swedish Transport Agency (Trafikverket). If you pass the driver's test, you get your license, but you'll have a 2-year probation period—serious traffic violations can lead to losing the license and needing to retake tests and risk courses."
          ],
          list: {
            type: 'bullet',
            items: [
              "Theory test result validity: 4 months.",
              "You cannot take the driving test until you have passed the theory test.",
              "Book online via Trafikverket: https://fp.trafikverket.se/Boka/#/.",
              "Driving license category: Passenger car (B license).",
              "After passing the driver's test: 2-year trial period; violations can mean losing the license and retaking tests/risk courses."
            ]
          }
        }
      ]
    },
    {
      id: 4,
      title: "Driving Licence Rules (B – Passenger Car)",
      sections: [
        {
          heading: "Minimum age",
          subheading: "B licence (passenger car)",
          content: [
            "Minimum age to obtain a B driving licence is 18 years. There are no exceptions."
          ]
        },
        {
          heading: "Before you practice",
          subheading: "Learner's Permit (körkortstillstånd)",
          content: [
            "A learner's permit is required before you start any driving practice—whether you train at a traffic school or practice privately."
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Practice Options by Age",
      sections: [
        {
          heading: "Learners aged 16–17",
          subheading: "Practice only (cannot obtain a licence yet)",
          content: [
            "At ages 16–17, you may practice driving but you cannot obtain a B driving licence. A learner's permit is mandatory before any practice."
          ],
          list: {
            type: 'bullet',
            items: [
              "Traffic school: Allowed from 16 with a learner's permit and a licensed instructor.",
              "Private practice: Allowed from 16 with a learner's permit and an approved supervisor (Handledare).",
              "Supervisor rules: Must be at least 24 years old, have held a valid licence for at least 5 of the last 10 years, and must apply for and be approved as a supervisor by Transportstyrelsen.",
              "Introductory course: Mandatory for both learner and supervisor before private practice."
            ]
          }
        },
        {
          heading: "Learners aged 18+",
          subheading: "Eligible to obtain a driving licence",
          content: [
            "At age 18 and above, you are eligible to obtain a B driving licence. A learner's permit is still mandatory before starting practice."
          ],
          list: {
            type: 'bullet',
            items: [
              "Traffic school: Allowed with a learner's permit and a licensed instructor.",
              "Private practice: Allowed with the same supervisor requirements as ages 16–17.",
              "Introductory course: Still mandatory for both learner and supervisor before private practice."
            ]
          }
        }
      ]
    },
    {
      id: 6,
      title: "License Categories & Medical Requirements",
      sections: [
        {
          heading: "B License Category",
          subheading: "Most common license for passenger cars",
          content: [
            "The B license is the standard driving license for passenger cars in Sweden. It allows you to drive vehicles up to 3,500 kg with up to 8 passenger seats."
          ],
          list: {
            type: 'bullet',
            items: [
              "Valid for cars (personbil) and light trucks",
              "Allows towing trailers up to 750 kg",
              "Recognized throughout EU/EEA countries",
              "Can be upgraded to B96 or BE for heavier trailers"
            ]
          }
        },
        {
          heading: "Medical & Health Requirements",
          subheading: "Vision and health declarations",
          content: [
            "All applicants must meet basic health standards to ensure safe driving. A vision test is mandatory, and certain medical conditions must be declared."
          ],
          list: {
            type: 'bullet',
            items: [
              "Vision test: Required at optician or driving school",
              "Minimum visual acuity: 0.5 in both eyes (with correction allowed)",
              "Health declaration: Must declare epilepsy, diabetes, heart conditions, etc.",
              "Medication review: Some medications may affect driving eligibility"
            ]
          }
        }
      ]
    },
    {
      id: 7,
      title: "Costs & Driving Schools",
      sections: [
        {
          heading: "Expected Costs",
          subheading: "Budget planning for your license",
          content: [
            "Getting a Swedish driving license involves several costs. Total expenses typically range from 15,000 to 30,000 SEK depending on how many lessons you need."
          ],
          list: {
            type: 'bullet',
            items: [
              "Learner's permit application: ~200 SEK",
              "Risk 1 & Risk 2 courses: ~3,000-4,000 SEK total",
              "Theory test booking: ~325 SEK",
              "Driving lessons: ~700-900 SEK per lesson (40-60 lessons typical)",
              "Driving test booking: ~800 SEK",
              "License issuance: ~300 SEK"
            ]
          }
        },
        {
          heading: "Choosing a Driving School",
          subheading: "Traffic school vs private practice",
          content: [
            "You can choose between attending a professional driving school (trafikskola) or practicing privately with an approved supervisor. Many students combine both methods."
          ],
          list: {
            type: 'bullet',
            items: [
              "Driving schools: Offer structured lessons with certified instructors",
              "Private practice: Lower cost but requires approved supervisor and introductory course",
              "Hybrid approach: Most cost-effective for many students",
              "School cars: Dual-control vehicles for safer learning"
            ]
          }
        }
      ]
    },
    {
      id: 8,
      title: "Test Procedures & Tips",
      sections: [
        {
          heading: "Theory Test Day",
          subheading: "What to expect at the test center",
          content: [
            "The theory test is conducted at approved test centers throughout Sweden. You'll need to bring valid ID and arrive on time."
          ],
          list: {
            type: 'bullet',
            items: [
              "Bring: Valid ID (passport or national ID card)",
              "Arrive: At least 15 minutes before your test time",
              "Test format: Computer-based multiple choice questions",
              "Available languages: Swedish, English, and several other languages",
              "Time limit: 50 minutes for 65 questions",
              "Results: Immediate pass/fail notification"
            ]
          }
        },
        {
          heading: "Driving Test Overview",
          subheading: "Practical examination",
          content: [
            "The driving test (körprov) lasts about 30-40 minutes and tests your practical driving skills in real traffic conditions."
          ],
          list: {
            type: 'bullet',
            items: [
              "Duration: 30-40 minutes of actual driving",
              "Routes: Include urban, rural, and highway driving when possible",
              "Examiner: Certified examiner evaluates your skills",
              "Vehicle: You can use driving school car or private car (must meet requirements)",
              "Safety check: Basic vehicle safety questions before driving"
            ]
          }
        }
      ]
    }
  ]
};
