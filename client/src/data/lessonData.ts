// Type definitions
export interface LessonSection {
  heading: string;
  subheading?: string;
  content: string[];
  list?: {
    type: 'bullet' | 'numbered';
    items: string[];
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

// Export the lessons array
export const lessons: Lesson[] = allLessons;

export const getLessonById = (id: number): Lesson | undefined => {
  return lessons.find(lesson => lesson.id === id);
};

export const getLessonPage = (lessonId: number, pageId: number): LessonPage | undefined => {
  const lesson = getLessonById(lessonId);
  return lesson?.pages.find(page => page.id === pageId);
};
