# Sample Data for Swedish Traffic School

## Sample Questions with Multilingual Support

### Question 1: Road Signs - Stop Sign

```json
{
  "questionText": {
    "sv": "Vad betyder denna skylt?",
    "en": "What does this sign mean?",
    "bn": "এই চিহ্নটির অর্থ কী?"
  },
  "options": [
    {
      "id": "a",
      "text": {
        "sv": "Stopplikt - Du måste stanna helt",
        "en": "Stop - You must come to a complete stop",
        "bn": "থামুন - আপনাকে সম্পূর্ণভাবে থামতে হবে"
      },
      "isCorrect": true
    },
    {
      "id": "b",
      "text": {
        "sv": "Väjningsplikt",
        "en": "Yield",
        "bn": "পথ ছেড়ে দিন"
      },
      "isCorrect": false
    },
    {
      "id": "c",
      "text": {
        "sv": "Hastighetsbegränsning",
        "en": "Speed limit",
        "bn": "গতি সীমা"
      },
      "isCorrect": false
    },
    {
      "id": "d",
      "text": {
        "sv": "Förbjuden infart",
        "en": "No entry",
        "bn": "প্রবেশ নিষেধ"
      },
      "isCorrect": false
    }
  ],
  "correctAnswer": "a",
  "explanation": {
    "sv": "En stoppskylten innebär att du måste stanna helt vid stopplinjen eller korsningen. Du får fortsätta först när det är säkert.",
    "en": "A stop sign means you must come to a complete stop at the stop line or intersection. You may proceed only when it is safe.",
    "bn": "একটি স্টপ সাইন মানে আপনাকে স্টপ লাইন বা মোড়ে সম্পূর্ণভাবে থামতে হবে। নিরাপদ হলে তবেই এগিয়ে যেতে পারবেন।"
  },
  "feedback": {
    "correct": {
      "sv": "Utmärkt! Rätt svar!",
      "en": "Excellent! Correct answer!",
      "bn": "চমৎকার! সঠিক উত্তর!"
    },
    "incorrect": {
      "sv": "Tyvärr fel. Läs förklaringen noggrant.",
      "en": "Sorry, that's incorrect. Read the explanation carefully.",
      "bn": "দুঃখিত, এটি ভুল। ব্যাখ্যাটি সাবধানে পড়ুন।"
    }
  },
  "category": "road-signs",
  "difficulty": "easy",
  "media": {
    "type": "image",
    "url": "/uploads/images/stop-sign.jpg"
  },
  "tags": ["stop", "signs", "basic"]
}
```

### Question 2: Priority Rules

```json
{
  "questionText": {
    "sv": "Vem har företräde vid ett obevakat övergångsställe?",
    "en": "Who has priority at an uncontrolled pedestrian crossing?",
    "bn": "একটি নিয়ন্ত্রণহীন পথচারী ক্রসিংয়ে কার অগ্রাধিকার আছে?"
  },
  "options": [
    {
      "id": "a",
      "text": {
        "sv": "Gående som korsar eller är på väg att korsa",
        "en": "Pedestrians crossing or about to cross",
        "bn": "পথচারী যারা পার হচ্ছেন বা পার হতে চলেছেন"
      },
      "isCorrect": true
    },
    {
      "id": "b",
      "text": {
        "sv": "Fordon som kommer från höger",
        "en": "Vehicles coming from the right",
        "bn": "ডান দিক থেকে আসা যানবাহন"
      },
      "isCorrect": false
    },
    {
      "id": "c",
      "text": {
        "sv": "Fordon på huvudvägen",
        "en": "Vehicles on the main road",
        "bn": "প্রধান সড়কের যানবাহন"
      },
      "isCorrect": false
    },
    {
      "id": "d",
      "text": {
        "sv": "Den som kommer först",
        "en": "Whoever arrives first",
        "bn": "যে প্রথম পৌঁছায়"
      },
      "isCorrect": false
    }
  ],
  "correctAnswer": "a",
  "explanation": {
    "sv": "Vid obevakade övergångsställen har gående alltid företräde när de korsar eller är på väg att korsa vägen. Som förare måste du anpassa hastigheten och vara beredd att stanna.",
    "en": "At uncontrolled pedestrian crossings, pedestrians always have priority when crossing or about to cross the road. As a driver, you must adjust your speed and be prepared to stop.",
    "bn": "নিয়ন্ত্রণহীন পথচারী ক্রসিংয়ে, পথচারীরা রাস্তা পার হওয়ার সময় বা পার হতে চলেছেন এমন সময় সর্বদা অগ্রাধিকার পান। চালক হিসাবে, আপনাকে অবশ্যই আপনার গতি সামঞ্জস্য করতে হবে এবং থামার জন্য প্রস্তুত থাকতে হবে।"
  },
  "feedback": {
    "correct": {
      "sv": "Perfekt! Du vet trafikreglerna!",
      "en": "Perfect! You know the traffic rules!",
      "bn": "নিখুঁত! আপনি ট্রাফিক নিয়ম জানেন!"
    },
    "incorrect": {
      "sv": "Fel svar. Kom ihåg att gående alltid har företräde vid övergångsställen.",
      "en": "Wrong answer. Remember that pedestrians always have priority at crossings.",
      "bn": "ভুল উত্তর। মনে রাখবেন ক্রসিংয়ে পথচারীদের সর্বদা অগ্রাধিকার থাকে।"
    }
  },
  "category": "priority",
  "difficulty": "medium",
  "tags": ["pedestrians", "priority", "crossings"]
}
```

### Question 3: Speed Limits

```json
{
  "questionText": {
    "sv": "Vad är den allmänna hastighetsgränsen på motorväg i Sverige?",
    "en": "What is the general speed limit on motorways in Sweden?",
    "bn": "সুইডেনে মোটরওয়েতে সাধারণ গতি সীমা কত?"
  },
  "options": [
    {
      "id": "a",
      "text": {
        "sv": "90 km/h",
        "en": "90 km/h",
        "bn": "৯০ কিমি/ঘণ্টা"
      },
      "isCorrect": false
    },
    {
      "id": "b",
      "text": {
        "sv": "100 km/h",
        "en": "100 km/h",
        "bn": "১০০ কিমি/ঘণ্টা"
      },
      "isCorrect": false
    },
    {
      "id": "c",
      "text": {
        "sv": "110 km/h",
        "en": "110 km/h",
        "bn": "১১০ কিমি/ঘণ্টা"
      },
      "isCorrect": false
    },
    {
      "id": "d",
      "text": {
        "sv": "120 km/h",
        "en": "120 km/h",
        "bn": "১২০ কিমি/ঘণ্টা"
      },
      "isCorrect": true
    }
  ],
  "correctAnswer": "d",
  "explanation": {
    "sv": "Den allmänna hastighetsgränsen på motorväg i Sverige är 120 km/h, men den kan variera beroende på skyltning. Kontrollera alltid hastighetsskyltar.",
    "en": "The general speed limit on motorways in Sweden is 120 km/h, but it can vary depending on signage. Always check speed limit signs.",
    "bn": "সুইডেনে মোটরওয়েতে সাধারণ গতি সীমা ১২০ কিমি/ঘণ্টা, তবে চিহ্নের উপর নির্ভর করে এটি পরিবর্তিত হতে পারে। সর্বদা গতি সীমা চিহ্ন পরীক্ষা করুন।"
  },
  "feedback": {
    "correct": {
      "sv": "Korrekt! Du kan hastighetsgränserna!",
      "en": "Correct! You know the speed limits!",
      "bn": "সঠিক! আপনি গতি সীমা জানেন!"
    },
    "incorrect": {
      "sv": "Tyvärr fel. Motorvägsgränsen är 120 km/h.",
      "en": "Sorry, that's wrong. Motorway limit is 120 km/h.",
      "bn": "দুঃখিত, এটি ভুল। মোটরওয়ে সীমা ১২০ কিমি/ঘণ্টা।"
    }
  },
  "category": "traffic-rules",
  "difficulty": "easy",
  "tags": ["speed", "motorway", "limits"]
}
```

### Question 4: Parking Rules with Video

```json
{
  "questionText": {
    "sv": "Se videon. Är det tillåtet att parkera här?",
    "en": "Watch the video. Is parking allowed here?",
    "bn": "ভিডিওটি দেখুন। এখানে পার্কিং অনুমোদিত?"
  },
  "options": [
    {
      "id": "a",
      "text": {
        "sv": "Ja, parkering är tillåten",
        "en": "Yes, parking is allowed",
        "bn": "হ্যাঁ, পার্কিং অনুমোদিত"
      },
      "isCorrect": false
    },
    {
      "id": "b",
      "text": {
        "sv": "Nej, parkering förbjuden inom 10 meter från korsning",
        "en": "No, parking prohibited within 10 meters of intersection",
        "bn": "না, মোড়ের ১০ মিটারের মধ্যে পার্কিং নিষিদ্ধ"
      },
      "isCorrect": true
    },
    {
      "id": "c",
      "text": {
        "sv": "Endast kortare stopp tillåtet",
        "en": "Only brief stops allowed",
        "bn": "শুধুমাত্র সংক্ষিপ্ত থামা অনুমোদিত"
      },
      "isCorrect": false
    },
    {
      "id": "d",
      "text": {
        "sv": "Parkering tillåten med P-skiva",
        "en": "Parking allowed with parking disc",
        "bn": "পার্কিং ডিস্ক দিয়ে পার্কিং অনুমোদিত"
      },
      "isCorrect": false
    }
  ],
  "correctAnswer": "b",
  "explanation": {
    "sv": "Du får inte parkera inom 10 meter från en korsning utan skylt. Detta är viktigt för att säkerställa god sikt och säker trafik vid korsningar.",
    "en": "You may not park within 10 meters of an intersection without signage. This is important to ensure good visibility and safe traffic at intersections.",
    "bn": "চিহ্ন ছাড়া একটি মোড়ের ১০ মিটারের মধ্যে আপনি পার্ক করতে পারবেন না। মোড়ে ভাল দৃশ্যমানতা এবং নিরাপদ ট্রাফিক নিশ্চিত করার জন্য এটি গুরুত্বপূর্ণ।"
  },
  "feedback": {
    "correct": {
      "sv": "Bra jobbat! Du förstår parkeringsreglerna!",
      "en": "Well done! You understand parking rules!",
      "bn": "ভাল করেছেন! আপনি পার্কিং নিয়ম বোঝেন!"
    },
    "incorrect": {
      "sv": "Fel. Minns regeln om 10 meter från korsningar.",
      "en": "Wrong. Remember the 10-meter rule from intersections.",
      "bn": "ভুল। মোড় থেকে ১০ মিটার নিয়মটি মনে রাখুন।"
    }
  },
  "category": "parking",
  "difficulty": "medium",
  "media": {
    "type": "video",
    "url": "/uploads/videos/parking-intersection.mp4",
    "thumbnailUrl": "/uploads/images/parking-thumb.jpg"
  },
  "tags": ["parking", "intersection", "distance"]
}
```

### Question 5: Environmental Driving

```json
{
  "questionText": {
    "sv": "Vilken körteknik ger lägst bränsleförbrukning?",
    "en": "Which driving technique gives the lowest fuel consumption?",
    "bn": "কোন ড্রাইভিং কৌশল সর্বনিম্ন জ্বালানি খরচ দেয়?"
  },
  "options": [
    {
      "id": "a",
      "text": {
        "sv": "Köra i låg växel",
        "en": "Drive in low gear",
        "bn": "নিম্ন গিয়ারে চালান"
      },
      "isCorrect": false
    },
    {
      "id": "b",
      "text": {
        "sv": "Växla upp tidigt och hålla jämn hastighet",
        "en": "Shift up early and maintain steady speed",
        "bn": "তাড়াতাড়ি শিফট করুন এবং স্থির গতি বজায় রাখুন"
      },
      "isCorrect": true
    },
    {
      "id": "c",
      "text": {
        "sv": "Accelerera och bromsa ofta",
        "en": "Accelerate and brake frequently",
        "bn": "ঘন ঘন ত্বরান্বিত এবং ব্রেক করুন"
      },
      "isCorrect": false
    },
    {
      "id": "d",
      "text": {
        "sv": "Köra med tomgång vid rödljus",
        "en": "Idle at red lights",
        "bn": "লাল বাতিতে নিষ্ক্রিয় থাকুন"
      },
      "isCorrect": false
    }
  ],
  "correctAnswer": "b",
  "explanation": {
    "sv": "Att växla upp tidigt till högre växlar och hålla en jämn hastighet minskar bränsleförbrukningen. Undvik onödiga accelerationer och inbromsningar.",
    "en": "Shifting up early to higher gears and maintaining steady speed reduces fuel consumption. Avoid unnecessary acceleration and braking.",
    "bn": "তাড়াতাড়ি উচ্চ গিয়ারে শিফট করা এবং স্থির গতি বজায় রাখা জ্বালানি খরচ কমায়। অপ্রয়োজনীয় ত্বরণ এবং ব্রেকিং এড়িয়ে চলুন।"
  },
  "feedback": {
    "correct": {
      "sv": "Rätt! Du kör miljövänligt!",
      "en": "Correct! You drive eco-friendly!",
      "bn": "সঠিক! আপনি পরিবেশবান্ধব চালান!"
    },
    "incorrect": {
      "sv": "Tyvärr fel. Tänk på miljövänlig körning.",
      "en": "Unfortunately wrong. Think about eco-friendly driving.",
      "bn": "দুর্ভাগ্যবশত ভুল। পরিবেশবান্ধব ড্রাইভিং সম্পর্কে চিন্তা করুন।"
    }
  },
  "category": "environment",
  "difficulty": "medium",
  "tags": ["eco-driving", "fuel", "environment"]
}
```

---

## Sample Lesson Data

### Lesson 1: Introduction to Swedish Road Signs

```json
{
  "title": {
    "sv": "Introduktion till svenska vägskyltar",
    "en": "Introduction to Swedish Road Signs",
    "bn": "সুইডিশ রোড চিহ্নের পরিচিতি"
  },
  "description": {
    "sv": "Lär dig de grundläggande vägskyltarna i Sverige och vad de betyder.",
    "en": "Learn the basic road signs in Sweden and what they mean.",
    "bn": "সুইডেনের মৌলিক রাস্তার চিহ্ন এবং তাদের অর্থ শিখুন।"
  },
  "content": {
    "sv": "## Vägskyltar i Sverige\n\nVägskyltar är avgörande för trafiksäkerheten. De delas in i fyra huvudkategorier:\n\n### 1. Varningsskyltar\nTriangulära skyltar med röd kant som varnar för faror.\n\n### 2. Förbudsskyltar\nRunda skyltar med röd kant som anger förbud.\n\n### 3. Påbudsskyltar\nBlå runda skyltar som anger vad som måste göras.\n\n### 4. Upplysningsskyltar\nRektangulära skyltar som ger information.",
    "en": "## Road Signs in Sweden\n\nRoad signs are crucial for traffic safety. They are divided into four main categories:\n\n### 1. Warning Signs\nTriangular signs with red borders that warn of dangers.\n\n### 2. Prohibition Signs\nRound signs with red borders indicating prohibitions.\n\n### 3. Mandatory Signs\nBlue round signs indicating what must be done.\n\n### 4. Information Signs\nRectangular signs providing information.",
    "bn": "## সুইডেনে রাস্তার চিহ্ন\n\nরাস্তার চিহ্নগুলি ট্রাফিক নিরাপত্তার জন্য অত্যন্ত গুরুত্বপূর্ণ। এগুলি চারটি প্রধান বিভাগে বিভক্ত:\n\n### ১. সতর্কতা চিহ্ন\nলাল সীমানা সহ ত্রিভুজাকার চিহ্ন যা বিপদ সম্পর্কে সতর্ক করে।\n\n### ২. নিষেধাজ্ঞা চিহ্ন\nলাল সীমানা সহ গোলাকার চিহ্ন যা নিষেধাজ্ঞা নির্দেশ করে।\n\n### ৩. বাধ্যতামূলক চিহ্ন\nনীল গোলাকার চিহ্ন যা কী করতে হবে তা নির্দেশ করে।\n\n### ৪. তথ্য চিহ্ন\nতথ্য প্রদানকারী আয়তক্ষেত্রাকার চিহ্ন।"
  },
  "category": "road-signs",
  "order": 1,
  "estimatedTime": 20,
  "media": [
    {
      "type": "image",
      "url": "/uploads/images/sign-categories.jpg"
    },
    {
      "type": "video",
      "url": "/uploads/videos/road-signs-intro.mp4"
    }
  ],
  "relatedQuestions": []
}
```

---

## MongoDB Seed Script

Create `server/src/utils/seedData.ts`:

```typescript
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Question from '../models/Question';
import Lesson from '../models/Lesson';

dotenv.config();

const sampleQuestions = [
  // Add all sample questions here
];

const sampleLessons = [
  // Add all sample lessons here
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Question.deleteMany({});
    await Lesson.deleteMany({});
    console.log('Cleared existing data');

    // Insert new data
    await Question.insertMany(sampleQuestions);
    await Lesson.insertMany(sampleLessons);
    console.log('Sample data inserted successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
```

Run with: `npx ts-node src/utils/seedData.ts`

---

## Quick API Test Requests (Postman Collection)

### 1. Register User
```
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "Test User",
  "email": "test@example.com",
  "password": "password123",
  "preferredLanguage": "sv"
}
```

### 2. Login
```
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password123"
}
```

### 3. Get Random Questions
```
GET http://localhost:5000/api/questions/random?count=10
Authorization: Bearer YOUR_TOKEN_HERE
```

### 4. Submit Quiz
```
POST http://localhost:5000/api/quiz/submit
Authorization: Bearer YOUR_TOKEN_HERE
Content-Type: application/json

{
  "quizType": "practice",
  "answers": [
    {
      "questionId": "QUESTION_ID",
      "selectedAnswer": "a",
      "timeSpent": 30
    }
  ],
  "timeSpent": 300
}
```

---

**Use this sample data to test your application! 🚀**
