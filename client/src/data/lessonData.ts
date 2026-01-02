// Type definitions
export interface LessonSection {
  heading: string;
  subheading?: string;
  content: string[];
  list?: {
    type: 'bullet' | 'numbered';
    items: string[];
  };
  video?: {
    src: string;
    caption?: string;
    poster?: string;
  };
}

export interface LessonPage {
  id: number;
  title: string;
  sections: LessonSection[];
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  pages: LessonPage[];
}

// Import all lessons from separate files
import { allLessons } from './lessons';
import { lesson1 as lesson1_en } from './lessons/lesson1-introduction.en';
import { lesson1 as lesson1_sv } from './lessons/lesson1-introduction.sv';
import { lesson1 as lesson1_ban } from './lessons/lesson1-introduction.ban';
import { lesson1 as lesson1_ar } from './lessons/lesson1-introduction.ar';
import { lesson1 as lesson1_fa } from './lessons/lesson1-introduction.fa';
import { lesson1 as lesson1_ua } from './lessons/lesson1-introduction.ua';
import { lesson1 as lesson1_ur } from './lessons/lesson1-introduction.ur';

// Import lesson 2 - Traffic Rules
import { lesson2 as lesson2_en } from './lessons/lesson2-traffic-rules.en';
import { lesson2 as lesson2_sv } from './lessons/lesson2-traffic-rules.sv';
import { lesson2 as lesson2_ban } from './lessons/lesson2-traffic-rules.bn';

// Export the lessons array
export const lessons: Lesson[] = allLessons;


export const getLocalizedLessons = (language: string): Lesson[] => {
  return lessons.map((lesson) => {
    if (lesson.id === 1) {
      switch (language) {
        case 'sv': return lesson1_sv;
        case 'ban': return lesson1_ban;
        case 'ar': return lesson1_ar;
        case 'fa': return lesson1_fa;
        case 'ua': return lesson1_ua;
        case 'ur': return lesson1_ur;
        case 'eng': return lesson1_en;
        default: return lesson1_en;
      }
    }
    if (lesson.id === 2) {
      switch (language) {
        case 'sv': return lesson2_sv;
        case 'ban': return lesson2_ban;
        case 'eng': return lesson2_en;
        default: return lesson2_en;
      }
    }
    return lesson;
  });
};

export const getLessonById = (id: number): Lesson | undefined => {
  return lessons.find(lesson => lesson.id === id);
};


// Returns the localized lesson by id and language
// Returns the lesson by id, localized to the selected language (currently only for lesson 1)
export const getLessonByIdLocalized = (id: number, language: string): Lesson | undefined => {
  if (id === 1) {
    switch (language) {
      case 'sv': return lesson1_sv;
      case 'ban': return lesson1_ban;
      case 'ar': return lesson1_ar;
      case 'fa': return lesson1_fa;
      case 'ua': return lesson1_ua;
      case 'ur': return lesson1_ur;
      case 'eng': return lesson1_en;
      default: return lesson1_en;
    }
  }
  if (id === 2) {
    switch (language) {
      case 'sv': return lesson2_sv;
      case 'ban': return lesson2_ban;
      case 'eng': return lesson2_en;
      default: return lesson2_en;
    }
  }
  // For other lessons, just return the default (English) for now
  return lessons.find(lesson => lesson.id === id);
};

export const getLessonPage = (lessonId: number, pageId: number): LessonPage | undefined => {
  const lesson = getLessonById(lessonId);
  return lesson?.pages.find(page => page.id === pageId);
};
